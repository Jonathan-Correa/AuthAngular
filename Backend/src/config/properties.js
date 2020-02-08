module.exports = {

	DB : {
		URI : "mongodb://localhost/AuthAngular",
		config : {
  			useNewUrlParser: true,
		  	useUnifiedTopology: true
		}
	},
	sessionConfig : { //configuraciones de express session
	  secret: 'kjhggfjhgfngjhgjg',
	  name : "mysecretcookie",
	  resave : false,
	  saveUninitialized : false,
	  cookie: { 
	   secure: false,
	   maxAge : 60 * 60 * 24,
	   httpOnly : false
	  }
	}
}