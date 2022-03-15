import express from 'express'
import { connectDB, getDB } from '*/config/mongodb'
import { env } from '*/config/environtment'
import { apiV1 } from '*/routes/v1'

connectDB()
  .then(() => console.log('Connected Successfully to database.'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit()
  })

const bootServer = () => {
  const app = express()

  // enable req.body data
  app.use(express.json())

  // user APIs v1
  app.use('/v1', apiV1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server is running at ${env.APP_HOST}:${env.APP_PORT}`)
  })
}