const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET ALL POSTS
router.get("/", async (req, res) => {
  //   res.send("We are on posts route");

  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// SAVE POST
router.post("/", async (req, res) => {
  //   console.log(req.body);

  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
