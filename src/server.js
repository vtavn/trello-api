import express from 'express'
import { mapOder } from '*/utilities/sorts.js'

const app = express()

const hostname = 'localhost'
const port = 3300

app.get('/', (req, res) => {
  res.end('<h1>Hello Wordl.</h1>')
})

app.listen(port, hostname, (req, res) => {
  console.log(`Server is running at ${hostname}:${port}`)
})