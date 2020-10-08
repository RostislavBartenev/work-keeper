const userDstructurization = (user) => ({
  name: user.name,
  accessToken: user.accessToken,
  refreshToken: user.refreshToken,
});

module.exports = userDstructurization;
