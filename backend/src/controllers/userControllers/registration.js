const User = require('../../models/HASAN.user.model');
const createToken = require('../../helpers/token');
const userDestructuring = require('../../helpers/regUserDestr');
const bcrypt = require("bcrypt");

const saltRounds = process.env.saltRounds ?? 10;

const registration = async (req, res) => {
  const { name, surname, email, password } = req.body;
  console.log(req.body);
  if (name && email && password && surname) {
    try {
      const userPass = await bcrypt.hash(password, +saltRounds);

      const newUser = new User({
        name,
        surname,
        email,
        password: userPass,
      });

      const payload = { id: newUser._id };

      newUser.accessToken = createToken('access', payload);
      newUser.refreshToken = createToken('refresh', payload);

      await newUser.save();

      return res.json(userDestructuring(newUser));
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: 'Пользователь с таким email уже существует' });
    }
  }
  return res.sendStatus(204);
};

module.exports = registration;
