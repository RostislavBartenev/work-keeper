const bcrypt = require('bcrypt');
const User = require('../../models/HASAN.user.model');
const createToken = require('../../helpers/token');
const loginUserDstructurization = require('../../helpers/loginUserDestr');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({ email }).exec();
      const isValidPass = await bcrypt.compare(password, user.password);

      if (isValidPass) {
        const payload = { id: user._id };
        user.accessToken = createToken('access', payload);
        user.refreshToken = createToken('refresh', payload);

        user.save();
        return res.json(loginUserDstructurization(user));
      }
      return res.status(401).json({ message: 'Неверный email или пароль' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Неверный email или пароль' }); // или Внутренняя ошибка сервера
    }
  }
  return res.sendStatus(204);
};

module.exports = login;
