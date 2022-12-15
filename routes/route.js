const express = require('express');
const userController = require('../controllers/userController');
const route = express.Router();

route.post('/create', userController.createUser);

module.exports = route;