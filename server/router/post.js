import express from 'express'
import {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  getPost,
  getSinglePost,
  getSubjectPost,
  updateComment,
  updatePost,
} from '../controllers/post.js'

const router = express.Router()

router.post('/posts/create', createPost)
router.post('/posts/:postId/comments', createComment)
router.delete('/posts/delete/:postId/comments/:commentId', deleteComment)
router.put('/posts/update/:boardId/:id', updatePost)
router.put('/posts/update/:postId/comments/:commentId', updateComment)
router.delete('/posts/delete/:boardId/:id', deletePost)
router.get('/posts/get/:boardId', getPost)
router.get('/posts/get/:boardId/sub/:subject', getSubjectPost)
router.get('/posts/get/:boardId/:id', getSinglePost)

export default router
