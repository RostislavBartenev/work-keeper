const User = require('../models/HASAN.user.model');


const regUserDstructurization = (user) => ({
  userID: user._id,
  email: user.email,
  name: user.name,
  surname: user.surname,
  accessToken: user.accessToken,
  refreshToken: user.refreshToken,
});

module.exports = regUserDstructurization;
