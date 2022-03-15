import express from 'express'
import { connectDB, getDB } from '*/config/mongodb'
import { env } from '*/config/environtment'
import { BoardModel } from '*/models/board.model'

connectDB()
  .then(() => console.log('Connected Successfully to database.'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit()
  })

const bootServer = () => {
  const app = express()

  app.get('/test', async (req, res) => {
    res.end('<h1>Hello World.</h1>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running at ${env.APP_HOST}:${env.APP_PORT}`)
  })
}