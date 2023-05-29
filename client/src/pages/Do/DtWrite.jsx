import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SERVER_URL from '../../config'

export default function DtWrite() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    area: '',
    age: '',
    sex: '',
    subject: '',
  })
  const navigate = useNavigate()
  const baseUrl = SERVER_URL

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`https://${baseUrl}/posts/create`, {
        title: formData.title,
        content: formData.content,
        boardId: 'doTutorial',
        area: formData.area,
        age: formData.age,
        sex: formData.sex,
        subject: formData.subject,
      })

      navigate(`/do/tutorial`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <Container
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: { xs: 10, md: 4 },
          }}
        >
          <FormControl
            sx={{
              mt: { xs: 2, md: 1 },
              mr: { md: 4 },
              width: { xs: 150, md: 90 },
              maxWidth: { xs: 150, md: 90 },
            }}
          >
            <InputLabel sx={{ fontSize: 16 }} id='demo-select-small-label'>
              지역
            </InputLabel>
            <Select
              name='area'
              labelId='demo-select-small-label'
              id='demo-select-small'
              value={formData.area}
              autoWidth
              label='Area'
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
            name='age'
            sx={{
              mt: { xs: 2, md: 1 },
              width: { xs: 150, md: 90 },
              maxWidth: { xs: 150, md: 90 },
              mr: { md: 4 },
              fontSize: 16,
            }}
            label='나이'
            autoFocus
          />
          <FormControl
            sx={{
              mt: { xs: 2, md: 1 },
              mr: { md: 4 },
              width: { xs: 150, md: 90 },
              maxWidth: { xs: 150, md: 90 },
            }}
          >
            <InputLabel sx={{ fontSize: 16 }} id='demo-select-small-label'>
              성별
            </InputLabel>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              name='sex'
              value={formData.sex}
              autoWidth
              label='Sex'
              onChange={handleChange}
            >
              <MenuItem value={'남성'}>남성</MenuItem>
              <MenuItem value={'여성'}>여성</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            sx={{
              mt: { xs: 2, md: 1 },
              mr: { md: 4 },
              width: { xs: 150, md: 90 },
              maxWidth: { xs: 150, md: 90 },
            }}
          >
            <InputLabel sx={{ fontSize: 16 }} id='demo-select-small-label'>
              과목
            </InputLabel>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              name='subject'
              value={formData.subject}
              autoWidth
              label='Subject'
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
          <Typography variant='h4'>제목</Typography>
          <TextField
            value={formData.title}
            onChange={handleChange}
            name='title'
            fullWidth
            autoFocus
          />
          <Typography sx={{ mt: 2 }} variant='h4'>
            내용
          </Typography>
          <TextField
            sx={{
              minHeight: { xs: '3rem', sm: '5rem', md: '4rem' },
              maxHeight: { xs: '10rem', sm: '15rem', md: '20rem' },
              overflow: 'auto',
            }}
            value={formData.content}
            onChange={handleChange}
            fullWidth
            name='content'
            multiline
          />
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ mr: 2 }} variant='contained' onClick={handleSubmit}>
            등록
          </Button>
          <Link to={`/do/tutorial`}>
            <Button variant='contained' color='error'>
              취소
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  )
}
