import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Box,
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import SERVER_URL from '../../config'

export default function LookLesson() {
  const navigate = useNavigate()
  const [post, setPost] = useState([])
  const baseUrl = SERVER_URL
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`https://${baseUrl}/posts/get/lookLesson`)
        setPost(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    getPost()
  }, [])

  return (
    <>
      <div className='flex flex-column align-items-center justify-center'>
        <TableContainer
          sx={{ mt: { xs: 10, md: 4 }, maxWidth: 1400 }}
          component={Paper}
        >
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  지역
                </TableCell>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  나이
                </TableCell>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  성별
                </TableCell>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  과목
                </TableCell>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  제목
                </TableCell>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  작성자
                </TableCell>
                <TableCell
                  sx={{ fontSize: { sx: 12, md: 18 }, fontWeight: 'bolder' }}
                >
                  작성일
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {post.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.area}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.sex}</TableCell>
                  <TableCell>{row.subject}</TableCell>

                  <TableCell
                    onClick={() => {
                      navigate(`/look/lesson/${row._id}`)
                    }}
                    sx={{
                      cursor: 'pointer',
                      ':hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {row.title}
                  </TableCell>

                  <TableCell>{row.userName}</TableCell>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString('ko-KR')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'right',
          mt: 4,
          maxWidth: 1580,
        }}
      >
        <Link to={`/look/lesson/write`}>
          <Button sx={{ mr: { xs: 2, md: 0 } }} variant='contained'>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 18 },

                fontWeight: 'bold',
              }}
            >
              글쓰기
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  )
}
