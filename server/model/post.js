import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  boardId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  area: { type: String, required: true },
  age: { type: String, required: true },
  sex: { type: String, required: true },
  subject: { type: String, required: true },
  comments: [
    {
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      userName: {
        type: String,
        required: true,
      },
    },
  ],
})

const Post = mongoose.model('Post', postSchema)

export default Post
