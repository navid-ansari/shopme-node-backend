import { Request, Response } from 'express'

// service
import { healthcheckService } from '../../service'

// logger
import { log } from '../../logger'

export const healthcheckController = async (req: Request, res: Response) => {
  //log.info('Test Controller Working')
  try {
    const healthcheck = await healthcheckService(req, res)
    return healthcheck
  } catch (e) {
    return res.status(500).end()
  }
}
