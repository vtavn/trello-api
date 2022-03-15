import { MongoClient } from 'mongodb'
import { env } from '*/config/environtment'

let dbInstance = null

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  // connect the client to the server
  await client.connect()
  // Asign clientDB to dbInstance
  dbInstance = client.db(env.DATABASE_NAME)

}

export const getDB = () => {
  if(!dbInstance) throw new Error('Must connect to Database first!')
  return dbInstance
}

// List database
// await listDatabases(client)
// const listDatabases = async (client) => {
//   const databasesList = await client.db().admin().listDatabases()
//   // console.log(databasesList)
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`))
// }