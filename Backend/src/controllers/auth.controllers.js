const User = require('../models/user.models');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.serializeUser((user, done) => {
  done(null, user._id);
});


passport.deserializeUser(function(id, done) {

  User.findById(id, function(err, user){
    done(err, user);
  });
});


//function para sign In
passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
},
  async function(email, password, done){

    const dbUser = await User.findOne({email: email});

    console.log("dbUser");
    console.log(dbUser);
    console.log("dbUser");

      if(!dbUser){
        return done(null, false, {failure_msg : "The email doesn't exists"});
      }

      if(dbUser.comparePassword(password)){
        return done(null, dbUser);
      }

      return done(null, false, {failure_msg: "Incorrect password"});
  }
));


exports.isLogged = (req, res, next) => {

    if(req.isAuthenticated()){
      console.log("req.user");
      console.log(req.user);
      console.log("req.user");
      return next();
    }

    res.status(401).json({ message : "you must to log in"});
}