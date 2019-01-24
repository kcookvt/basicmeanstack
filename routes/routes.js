var BasicModel = require('../models/model.js');
var ejs = require('ejs');

module.exports = function(app) {

	// server routes =============================================
	// handle things like api calls
	// auth routes

	// sample route
	app.get('/api/models', function(req, res) {
		// use mongoose to find all models in db
		BasicModel.find(function(err, models) {

			// error handling

			if(err) {
				res.send(err);
			}

			res.json(models); //returns all models in json format
		});
	});

	// front end routes
	// route to handle angular requests
	app.get('*', function(req, res) {
		res.render('../public/views/index.ejs'); // load our public/views index file
	});
}; // Need semicolon for module.exports 