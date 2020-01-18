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
	  resave : false,
	  saveUninitialized : false
	}
}