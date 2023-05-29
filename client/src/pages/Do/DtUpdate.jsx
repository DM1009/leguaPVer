import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import SERVER_URL from '../../config'

DtUpdate.propTypes = {
  postTitle: PropTypes.string,
  postContent: PropTypes.string,
  postArea: PropTypes.string,
  postAge: PropTypes.string,
  postSex: PropTypes.string,
  postSubject: PropTypes.string,
  setIsEditMode: PropTypes.boolean,
}

export default function DtUpdate({
  postTitle,
  postContent,
  postArea,
  postAge,
  postSex,
  postSubject,
  setIsEditMode,
}) {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: postTitle,
    content: postContent,
    area: postArea,
    age: postAge,
    sex: postSex,
    subject: postSubject,
  })
  const baseUrl = SERVER_URL

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleEditClick = () => {
    setIsEditMode(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`https://${baseUrl}/posts/update/doTutorial/${id}`, {
        title: formData.title,
        content: formData.content,
        boardId: 'doTutorial',
        area: formData.area,
        age: formData.age,
        sex: formData.sex,
        subject: formData.subject,
      })
      setIsEditMode(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: 4,
        }}
      >
        <FormControl sx={{ mt: 1, mr: 4, minWidth: 80 }}>
          <InputLabel id='demo-select-small-label'>지역</InputLabel>
          <Select
            value={formData.area}
            autoWidth
            name='area'
            label='지역'
            onChange={handleChange}
          >
            <MenuItem value={'서울'}>서울</MenuItem>
            <MenuItem value={'경기'}>경기</MenuItem>
            <MenuItem value={'인천'}>인천</MenuItem>
          </Select>
        </FormControl>
        <TextField
          value={formData.age}
          onChange={handleChange}
          sx={{ mt: 1, width: 70, mr: 4 }}
          name='age'
          label='나이'
          autoFocus
        />
        <FormControl sx={{ m: 1, mr: 4, minWidth: 80 }}>
          <InputLabel id='demo-select-small-label'>성별</InputLabel>
          <Select
            value={formData.sex}
            autoWidth
            name='sex'
            label='성별'
            onChange={handleChange}
          >
            <MenuItem value={'남성'}>남성</MenuItem>
            <MenuItem value={'여성'}>여성</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, mr: 4, minWidth: 80 }}>
          <InputLabel id='demo-select-small-label'>과목</InputLabel>
          <Select
            value={formData.subject}
            autoWidth
            label='과목'
            name='subject'
            onChange={handleChange}
          >
            <MenuItem value={'초등학생 수학'}>초등학생 수학</MenuItem>
            <MenuItem value={'초등학생 영어'}>초등학생 영어</MenuItem>
            <MenuItem value={'중학생 수학'}>중학생 수학</MenuItem>
            <MenuItem value={'중학생 영어'}>중학생 영어</MenuItem>
            <MenuItem value={'고등학생 수학'}>고등학생 수학</MenuItem>
            <MenuItem value={'고등학생 영어'}>고등학생 영어</MenuItem>
            <MenuItem value={'수능 과외'}>수능과외</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ mt: 4 }}>
        <TextField
          value={formData.title}
          onChange={handleChange}
          fullWidth
          autoFocus
          label='제목'
          name='title'
        />

        <TextField
          sx={{ mt: 4 }}
          name='content'
          label='내용'
          value={formData.content}
          onChange={handleChange}
          fullWidth
          multiline
          minRows={8}
          maxRows={10}
        />
      </Box>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button sx={{ mr: 2 }} variant='contained' onClick={handleSubmit}>
          등록
        </Button>

        <Button onClick={handleEditClick} variant='contained' color='error'>
          취소
        </Button>
      </Box>
    </>
  )
}
