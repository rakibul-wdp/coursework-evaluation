## User Authentication and Social Media interaction with CRUD operation - API

### Route Here

### Following this instruction you can check API

```
// user related route
route.post('/create', userController.createUser);
http://localhost:5000/create
{
  "username": "Example",
  "email": "example@gmail.com",
  "password": "password"
}

route.post('/login', userController.loginUser);
http://localhost:5000/login
{
  "username": "Example",
  "password": "password"
}

route.post('/forgetPassword', userController.forgetPassword);
http://localhost:5000/forgetPassword
{
  "username": "Example",
  "password": "passwordchange"
}


// post related route
route.post('/posts', postController.createPost);
http://localhost:5000/posts
{
  "title": "Title One",
  "content": "Content example"
}

route.get('/posts', postController.getPosts);
http://localhost:5000/posts

route.put('/posts/:id', postController.updatePost);
http://localhost:5000/posts/639b4ec8ef010d2ebabd760f
{
  "title": "Title One",
  "content": "Content example"
}

route.delete('/posts/:id', postController.deletePost);
http://localhost:5000/posts/639b4ec8ef010d2ebabd760f

route.get('/posts/like/:id', postController.likePost);
http://localhost:5000/posts/like/639b4ec8ef010d2ebabd760f

route.post('/posts/comment/:id', postController.commentPost);
http://localhost:5000/posts/comment/639b4ec8ef010d2ebabd760f
{
  "comment": "comment example"
}
```

### Technology

- Node.js
- Express.js
- MongoDB
- Mongoose
- JsonWebToken (JWT)
- bcrypt
- body-parser
- dotenv
