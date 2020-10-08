const mongoose = require('mongoose');


const User = mongoose.Schema({
  _id: String,
  name: String,
  surname: String,
  password: String
});

userSchema.statics.addUser = async function (_id, name, surname, password) {
  let user = new this({
    _id,
    name,
    surname,
    password
  })
  return await user.save();
}


module.exports = mongoose.model('User', userSchema);
