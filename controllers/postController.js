const Post = require('../models/postModel');

const createPost = (req, res) => {
  const { title, content } = req.body;

  if (title && content) {
    post = new Post({ title: title, content: content });
    post.save();
    return res.json('Post created');
  } else {
    return res.json('Added title and content');
  }
};

const getPosts = (req, res) => {
  Post.find().then((post) => {
    return res.json({ posts: post });
  });
};

module.exports = {
  createPost,
  getPosts
}