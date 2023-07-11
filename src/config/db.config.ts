const mongoose = require('mongoose')
import { log } from '../logger'

export const connectDB = async () => {
  try {
    /*mongoose.connection.on('connecting', () => {
      log.info('MongoDB connecting..')
      //console.log(mongoose.connection.readyState) //logs 2
    })
    mongoose.connection.on('connected', () => {
      log.info('MongoDB connected..')
      //console.log(mongoose.connection.readyState) //logs 1
    })
    mongoose.connection.on('disconnecting', () => {
      log.info('MongoDB disconnecting..')
      //console.log(mongoose.connection.readyState) // logs 3
    })
    mongoose.connection.on('disconnected', () => {
      log.info('MongoDB disconnected..')
      //console.log(mongoose.connection.readyState) //logs 0
    })*/
    const mongodb_uri =
      'mongodb+srv://shopmeuser:shopmeuser@shopme-cluster.oai0bsj.mongodb.net/'
    //await mongoose.connect(process.env.MONGO_CONNECTION_URI, {
    await mongoose.connect(mongodb_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    log.info(`MongoDB Connection Successfull..!!`)
  } catch (error: any) {
    log.error(`MongoDB Connection Failed..!!`)
    process.exit(1)
  }
}
