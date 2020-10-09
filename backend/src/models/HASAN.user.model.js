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
  organization: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }],

});

module.exports = mongoose.model('User', userSchema);
