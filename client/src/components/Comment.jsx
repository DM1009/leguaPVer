import React, { useState } from 'react'
import { Box, Typography, IconButton, TextField, Button } from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import PropTypes from 'prop-types'

export default function Comment({
  comment,
  handleDeleteComment,
  handleUpdateComment,
}) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedContent, setEditedContent] = useState(comment.content)

  //   const handleEditClick = () => {
  //     setIsEditMode(true)
  //   }

  const handleCancelEdit = () => {
    setIsEditMode(false)
    setEditedContent(comment.content)
  }

  const handleSaveEdit = () => {
    handleUpdateComment(comment._id, editedContent)
    setIsEditMode(false)
  }

  const handleChange = (e) => {
    setEditedContent(e.target.value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      key={comment._id}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
          p: 1,
          border: 2,
          borderRadius: 2,
          borderColor: '#00bFA5',
          backgroundColor: 'white',
        }}
      >
        <Typography sx={{ pt: 1.5 }}>
          {comment.userName}: {comment.content}
        </Typography>
        <Box>
          {!isEditMode && (
            <>
              {/* <IconButton sx={{ pb: 2 }} onClick={handleEditClick}>
                <EditIcon color='info' />
              </IconButton> */}
              <IconButton
                sx={{ pb: 2 }}
                onClick={() => handleDeleteComment(comment._id)}
              >
                <DeleteForeverIcon color='error' />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
      {isEditMode && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TextField
            value={editedContent}
            onChange={handleChange}
            sx={{ mt: 1, mr: 1, backgroundColor: 'white' }}
            fullWidth
            autoFocus
          />
          <Button
            sx={{ mt: 1.5, height: 40 }}
            variant='contained'
            onClick={handleSaveEdit}
          >
            저장
          </Button>
          <Button
            sx={{ mt: 1.5, height: 40, ml: 1 }}
            variant='contained'
            color='error'
            onClick={handleCancelEdit}
          >
            취소
          </Button>
        </Box>
      )}
    </Box>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
  handleUpdateComment: PropTypes.func.isRequired,
}
