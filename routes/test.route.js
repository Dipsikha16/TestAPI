const router = require('express').Router();

const {
    findUserById
} = require('../controller/user.controller');

const {
    findPostById,
    createPost,
    updatePost,
    deletePost
} = require("../controller/post.controller");
const { route } = require('..');

// Get user by Id
router.get('/user/:id', findUserById);

//get post for specific user
router.get('/post/:id', findPostById);

//create post
router.post('/post', createPost);

// Update post by post id
router.put('/post/:id', updatePost);

//delete a post
router.delete('/post/:id', deletePost);

module.exports = router;