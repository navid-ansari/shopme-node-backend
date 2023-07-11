import express from 'express'
const cors = require('cors')
const dotenv = require('dotenv')
import { validateReq, LoggerMiddleware } from '../middleware'
import { routes } from '../routes/routes'

const createServer = () => {
  const app = express()
  app.use(cors())
  dotenv.config()
  app.use(express.json())
  //app.use(LoggerMiddleware)
  routes(app)
  return app
}

export { createServer }
