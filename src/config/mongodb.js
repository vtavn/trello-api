import { MongoClient } from 'mongodb'
import { env } from '*/config/environtment'

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  try {
    // connect the client to the server
    await client.connect()
    console.log('Connected successfully to database!')

    // List database
    await listDatabases(client)

  } finally {
    // close connect database when finish/error
    await client.close()
  }
}

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  // console.log(databasesList)
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}