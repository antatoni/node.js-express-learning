import express from 'express';
import {
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
  createPost,
} from '../controllers/postController.js';

const router = express.Router();

//Get all posts
router.get('/', getPosts);

//Get single post (GET req);
router.get('/:id', getSinglePost);

//Create new post (POST req)
router.post('/', createPost);

//Update post with ID , (PUT req);
router.put('/:id', updatePost);

//Delete post with ID , (DELETE req)
router.delete('/:id', deletePost);
export default router;
