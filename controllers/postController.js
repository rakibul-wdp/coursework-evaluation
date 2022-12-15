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

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (title && content && id) {
    Post.findById(id).then((post) => {
      if (!post) {
        return res.json('Post with title does not exists');
      } else {
        Post.updateOne({ _id: id }, { title: title, content: content }).then(
          (data) => {
            console.log(data);
            return res.json('Post updated successfully');
          }
        );
      }
    });
  } else {
    return res.json('Enter id, title, and content');
  }
};

module.exports = {
  createPost,
  getPosts,
  updatePost
}