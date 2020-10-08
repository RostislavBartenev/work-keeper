const bcrypt = require('bcrypt');
const User = require('../../models/userModel');
const createToken = require('../../helpers/token');
const userDstructurization = require('../../helpers/userDestr');

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  if (email && password) {
    try {
      const user = await User.findOne({ email }).exec();
      const isValidPass = await bcrypt.compare(password, user.password);

      if (isValidPass) {
        const payload = { id: user._id };
        user.accessToken = createToken('access', payload);
        user.refreshToken = createToken('refresh', payload);

        user.save();
        return res.json(userDstructurization(user));
      }
      return res.sendStatus(401);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(204);
};

module.exports = login;
