const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

var userSchema = new Schema({
  
  name : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  }
}, {
  timestamps : true
});



userSchema.pre('save', async function(next){

  const user = this;
  
  if(!user.isModified("password")){
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt, null);
  user.password = hash;
  next();
});

//metodo para comparar contraseñas encriptadas
userSchema.methods.comparePassword = function(password){

  return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model("users", userSchema);
