const { createPost, readPosts, readOnePost, updatePost, deletePost } = require('../controllers/post');

const router = require('express').Router();

router.post('/', createPost);
router.get('/', readPosts);
router.get('/:id', readOnePost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;