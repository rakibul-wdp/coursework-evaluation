const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res.json('User already exists');
    } else {
      bcrypt.hash(password, 10).then((result) => {
        if (!result) {
          return res.json('An error occurred');
        }
        user = new User({ username: username, password: result });
        user.save();
        return res.json('User created successfully');
      });
    }
  });
};

module.exports = {
  createUser
}