const passport = require('passport');
const User = require("../models/user.models.js");


exports.postSignup = async function(req, res, next){

  const newUser = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

  const dbUser = await User.findOne({email: req.body.email});

  if(dbUser){
    return res.status(400).json({ message : "this email already exists"});
  }

  newUser.save((err, user) => {

    if(err) console.error(err);

    req.logIn(user, (err) => {

      if(err) next(err);

      else {
        user.password = null;

        res.json(user);
      }
    });
  });
}

//User SignIn
exports.postSingin = (req, res, next) => {

  passport.authenticate('local', (err, user) => {

    if(err) next(err);

    if(!user) {
      return res.status(401).json({ message : "this email doesn't exists"});
    }
    
    req.logIn(user, (err) => {

      if(err) next(err);

      else {
        user.password = null;
        res.json(user);
      }
    });
  })(req, res, next);
}


exports.logout = (req, res, next) => {

  req.logout();
  res.json({message : "logout successfully"});
}
