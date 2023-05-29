import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Avatar,
  TextField,
  IconButton,
  FormGroup,
} from '@mui/material'
import axios from 'axios'
import DtUpdate from './DtUpdate'
import AddCommentIcon from '@mui/icons-material/AddComment'
import { stringAvatar } from '../../components/Avatar'
import Comment from '../../components/Comment'
import SERVER_URL from '../../config'

export default function DtDetail() {
  const [post, setPost] = useState(null)
  const { id } = useParams()
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedCommentId, setEditedCommentId] = useState(null)
  const [editedCommentContent, setEditedCommentContent] = useState('')
  const [comment, setComment] = useState('')
  const navigate = useNavigate()
  const shadowStyle = {
    boxShadow: '-2px 10px 16px 2px rgba(0,0,0,0.47)',
  }
  const baseUrl = SERVER_URL

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const res = await axios.get(
          `https://${baseUrl}/posts/get/doTutorial/${id}`
        )
        setPost(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    getSinglePost()
  }, [isEditMode, comment])

  if (!post) {
    return <div>데이터를 불러오는 중입니다...</div>
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`https://${baseUrl}/posts/delete/doTutorial/${id}`)
      navigate(`/do/tutorial`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleEditClick = () => {
    setIsEditMode(true)
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `https://${baseUrl}/posts/delete/${id}/comments/${commentId}`
      )
      setPost((prevPost) => ({
        ...prevPost,
        comments: prevPost.comments.filter(
          (comment) => comment._id !== commentId
        ),
      }))
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdateComment = async () => {
    try {
      await axios.put(
        `https://${baseUrl}/posts/update/${id}/comments/${editedCommentId}`,
        { content: editedCommentContent }
      )

      setPost((prevPost) => ({
        ...prevPost,
        comments: prevPost.comments.map((comment) =>
          comment._id === editedCommentId
            ? { ...comment, content: editedCommentContent }
            : comment
        ),
      }))

      setEditedCommentId(null)
      setEditedCommentContent('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`https://${baseUrl}/posts/${id}/comments`, {
        content: comment,
      })

      setComment('')
      const newComment = res.data
      setPost((prevPost) => ({
        ...prevPost,
        comments: [...prevPost.comments, newComment],
      }))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {!isEditMode ? (
        <>
          <Box
            sx={{
              mt: { xs: 6, md: 0 },
              borderBottom: 2,
              borderColor: '#0084ff',
              mb: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                mb: 3,
                pb: 1,
                borderBottom: 2,
                borderColor: '#ddd',
              }}
            >
              <Avatar {...stringAvatar('Kent Dodds')} />
              <Typography
                sx={{
                  mt: 0.5,
                  ml: 2,
                  fontSize: { md: 24 },
                  fontWeight: 'bold',
                }}
                variant='body2'
              >
                지역: {post.area} / 나이: {post.age} / 성별: {post.sex} / 과목:
                {post.subject}
              </Typography>
            </Box>

            <Typography
              sx={{ mb: 0.5, fontWeight: 'bold', fontSize: { md: 24 } }}
              variant='h6'
            >
              {post.title}
            </Typography>
          </Box>

          <Paper
            sx={{
              minHeight: { sx: 100, md: 150, lg: 250 },
              maxHeight: { sx: 250, md: 300, lg: 350 },
              overflow: 'auto',
              border: 2,
              borderColor: '#00bFA5',
              ...shadowStyle,
            }}
          >
            <Typography sx={{ m: 2, fontSize: { md: 24 } }} variant='body2'>
              {post.content}
            </Typography>
          </Paper>

          <Box
            sx={{
              minHeight: 50,
              maxHeight: 350,
              overflow: 'auto',
              mt: 4,
            }}
          >
            {post.comments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                handleDeleteComment={handleDeleteComment}
                handleUpdateComment={handleUpdateComment}
              />
            ))}
          </Box>

          <FormGroup sx={{ display: 'flex', position: 'relative' }}>
            <TextField
              sx={{
                mt: 4,
                backgroundColor: 'white',
                ...shadowStyle,
              }}
              value={comment}
              name='comment'
              onChange={handleChange}
              fullWidth
              autoFocus
            />
            <IconButton
              sx={{
                position: 'absolute',
                top: 35,
                right: 20,
              }}
              onClick={handleSubmit}
            >
              <AddCommentIcon fontSize='large' />
            </IconButton>
          </FormGroup>
          <Box sx={{ display: 'flex', justifyContent: 'right', mt: 4, mb: 15 }}>
            <Button
              sx={{ mr: 2 }}
              variant='contained'
              onClick={handleEditClick}
            >
              수정
            </Button>

            <Button
              onClick={handleDelete}
              sx={{ mr: 2 }}
              variant='contained'
              color='error'
            >
              삭제
            </Button>

            <Link to={`/do/lesson`}>
              <Button variant='outlined'>뒤로가기</Button>
            </Link>
          </Box>
        </>
      ) : (
        <DtUpdate
          postTitle={post.title}
          postContent={post.content}
          postArea={post.area}
          postAge={post.age}
          postSex={post.sex}
          postSubject={post.subject}
          setIsEditMode={setIsEditMode}
        />
      )}
    </Container>
  )
}
