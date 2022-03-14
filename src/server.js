import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environtment'

const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>Hello Wordl.</h1>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Server is running at ${env.HOST}:${env.PORT}`)
})