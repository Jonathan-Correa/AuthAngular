const mongoose = require('mongoose');
const { DB } = require('./config/properties');

mongoose.connect(DB.URI, DB.config) 
	.then(db => console.log("MongoDB is connected"))
    .catch(err => console.error(err));

module.exports = mongoose;
