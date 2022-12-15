const express = require('express');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const route = express.Router();

// user related route
route.post('/create', userController.createUser);
route.post('/login', userController.loginUser);
route.post('/forgetPassword', userController.forgetPassword);

// post related route
route.post('/posts', postController.createPost);
route.get('/posts', postController.getPosts);
route.put('/posts/:id', postController.updatePost);
route.delete('/posts/:id', postController.deletePost);

route.get('/posts/like/:id', postController.likePost);

module.exports = route;