const mongoose = require('mongoose')
import { MongoMemoryServer } from 'mongodb-memory-server'
import { log } from '../logger'

// Connect to mock memory db.
let mongod: any
export const connect = async () => {
  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10
  }
  mongod = await MongoMemoryServer.create()
  const uri = await mongod.getUri()
  try {
    await mongoose.connect(uri, { dbName: 'UMSR' })
    log.info(`Test MongoDB Connection Successfull..!!`)
  } catch (error: any) {
    log.error(`Test MongoDB Connection Failed..!!`)
  }
}

// Close db connection
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongod.stop()
}

// Delete db collections
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}
