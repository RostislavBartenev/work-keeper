const User = require('../models/HASAN.user.model');


const loginUserDstructurization = (user) => ({
  userID: user._id,
  email: user.email,
  name: user.name,
  surname: user.surname,
  accessToken: user.accessToken,
  refreshToken: user.refreshToken,
});

module.exports = loginUserDstructurization;
