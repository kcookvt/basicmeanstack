var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Config stuff
var db = require('./config/db');

var port = process.env.PORT || 8080;

//mongoose.connect(db.url); Uncomment after authentication for db.js

// Parsing and method stuff

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended : true}));
// override with x-http-method-override header in request. simulate DELETE
app.use(methodOverride('X-HTTP-Method-Override'));


app.use(express.static(__dirname + '/public/'));


require('./routes/routes.js')(app); // Configure our routes




app.listen(port);
console.log('Port: ' + port);
exports = module.exports = app;