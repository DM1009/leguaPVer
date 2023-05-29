import Post from '../model/post.js'

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find({ boardId: req.params.boardId }).sort({
      createdAt: -1,
    })
    res.status(200).json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    res.status(200).json(post)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getSubjectPost = async (req, res) => {
  try {
    const { boardId, subject } = req.params

    const posts = await Post.find({
      boardId,
      subject: { $regex: subject, $options: 'i' },
    }).sort({
      createdAt: -1,
    })

    res.status(200).json(posts)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}
export const createPost = async (req, res) => {
  const { title, content, boardId, area, age, sex, subject } = req.body
  try {
    const post = new Post({ title, content, boardId, area, age, sex, subject })
    await post.save()
    res.status(201).json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const updatePost = async (req, res) => {
  const { title, content, boardId, area, age, sex, subject } = req.body
  try {
    const { id } = req.params
    const post = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
        boardId,
        area,
        age,
        sex,
        subject,
      },
      { new: true }
    )
    console.log(post)
    res.status(201).json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndRemove(id)
    console.log(post)
    res.status(200).json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const createComment = async (req, res) => {
  const { content } = req.body
  const { postId } = req.params

  try {
    const post = await Post.findById(postId)
    if (!post) {
      return res.status(404).json({ message: '포스트가 없습니다' })
    }
    const newComment = {
      content,
      userName: 'name',
    }
    post.comments.push(newComment)
    await post.save()
    res.status(201).json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}
export const updateComment = async (req, res) => {
  const { postId, commentId } = req.params
  const { content } = req.body
  try {
    const post = await Post.findById(postId)
    if (!post) {
      return res.status(404).json({ message: '포스트가 없습니다' })
    }

    const comment = post.comments.find(
      (comment) => comment._id.toString() === commentId
    )
    if (!comment) {
      return res.status(404).json({ message: '코멘트가 없습니다' })
    }

    comment.content = content
    await post.save()

    res.status(200).json(comment)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const deleteComment = async (req, res) => {
  const { postId, commentId } = req.params
  try {
    const post = await Post.findById(postId)
    if (!post) {
      return res.status(404).json({ message: '포스트가 없습니다' })
    }

    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== commentId
    )

    await post.save()

    res.status(200).json(post)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server Error' })
  }
}
