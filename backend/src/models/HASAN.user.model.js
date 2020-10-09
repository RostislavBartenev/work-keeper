const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
