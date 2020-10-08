require('dotenv').config();
const jwt = require('jsonwebtoken');

const {
  jwtToken, jwtRefreshToken, tokenLife, refreshTokenLife,
} = process.env;

const createToken = (type = 'access', payload) => {
  switch (type) {
    case 'access':
      return jwt.sign(payload, jwtToken, { expiresIn: tokenLife });
    case 'refresh':
      return jwt.sign(payload, jwtRefreshToken, { expiresIn: refreshTokenLife });
    default:
      return jwt.sign(payload, jwtToken, { expiresIn: tokenLife });
  }
};

module.exports = createToken;
