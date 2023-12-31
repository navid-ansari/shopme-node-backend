import pino from 'pino'
import dayjs from 'dayjs'
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const log = pino({
  name: 'shopme',
  //transport: {
  //  target: 'pino-pretty'
  //},
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      colorizeObjects: true //--colorizeObjects
      //customColors: 'err:red,info:green'
    }
  },
  //options: {
  //  colorize: true
  //},
  timestamp: () => `,"time":"${dayjs().format('llll')}"`
  //level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
})

export { log }

/*import logger from 'pino'
const pino = require('pino')
import dayjs from 'dayjs'

const log = logger({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  },
  //prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
})

export { log }*/
