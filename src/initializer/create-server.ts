import express from 'express'
const cors = require('cors')
const dotenv = require('dotenv')
const interceptor = require('express-interceptor')
import { validateReq, LoggerMiddleware } from '../middleware'
import { routes } from '../routes/routes'
// logger
import { log } from '../logger'

var httpInterceptor = interceptor(function (req, res) {
  //console.log(res)
  log.info(`Request Url: ${req.url}`)
  return {
    // Only Json responses will be intercepted
    isInterceptable: function () {
      return /json/.test(res.get('Content-Type'))
    },
    intercept: function (body, send) {
      send(body)

      log.info(`Response Object: ${body}`)
    }
  }
})

const createServer = () => {
  const app = express()
  app.use(cors())
  app.use(httpInterceptor)
  dotenv.config()
  app.use(express.json())
  app.use(LoggerMiddleware)
  routes(app)
  return app
}

export { createServer }
