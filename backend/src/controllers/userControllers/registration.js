const User = require('../../models/userModel');
const createToken = require('../../helpers/token');
const userDestructuring = require('../../helpers/userDestr');
const bcrypt = require("bcrypt");

const saltRounds = process.env.saltRounds ?? 10;

const registration = async (req, res) => {
  const { name, email, password } = req.body;

  if (name && email && password) {
    try {
      const userPass = await bcrypt.hash(password, +saltRounds);

      const newUser = new User({
        name,
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
      return res.status(422).json({ message: 'Email already exists in system' });
    }
  }
  return res.sendStatus(204);
};

module.exports = registration;
