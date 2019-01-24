var mongoose = require('mongoose');

// Module.exprts allows us to pass this to other files when it is called
module.exports = mongoose.model('BasicModel', {
	name : {type: String, default: ''}
});