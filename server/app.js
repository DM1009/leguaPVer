import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import PostRouter from './router/post.js'
import connectDB from './db/database.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', PostRouter)

app.listen(8080, () => {
  console.log('포트 8080에 연결되었습니다!')
})

connectDB()
