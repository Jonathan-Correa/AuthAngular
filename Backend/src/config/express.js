const express = require('express'),
	  morgan = require('morgan'),
      passport = require('passport'),
      session = require('express-session'),
      { sessionConfig } = require('./properties'),
	  cookieParser = require('cookie-parser'),
	  cors = require('cors');



function initSettings(app){

	app.set('port', process.env.PORT || 3000);
}


function initMiddlewares(app){

	app.use(cors({ 
		origin : "http://localhost:4200",
		credentials : true
	}));
	app.use(morgan('dev'));
	app.use(cookieParser());
	app.use(express.json());
	app.use(express.urlencoded({extended : false}));
	app.use(session(sessionConfig));
	require('../controllers/auth.controllers');
	app.use(passport.initialize());
	app.use(passport.session());
}

module.exports.start = (app) => {

	initSettings(app);
	initMiddlewares(app);
}