module.exports = function(app) {

	const passport = require('passport');
	const authCtrl = require('../controllers/auth.controllers');
	const userCtlr = require("../controllers/user.controllers");

	

	//-------------------------------------------------------
	app.route("/users/signup")
		.post(userCtlr.postSignup);
	//------------------------------------------------------------

	//------------------------------------------------------------
	app.route('/users/signin')
		.post(userCtlr.postSingin);
	//----------------------------------------------------------------

	app.route('/users/logout')
		.get(authCtrl.isLogged, userCtlr.logout);
}
