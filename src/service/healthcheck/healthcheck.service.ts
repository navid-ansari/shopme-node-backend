import { Request, Response } from 'express'
import { errorResponse } from '../../lib/errors'
import { log } from '../../logger'

export const healthcheckService = async (req: Request, res: Response) => {
  //log.info('Test Controller Working')
  try {
    if (req) {
      return res
        .status(200)
        .json({ message: 'Healthcheck success. Server is up and running' })
    }
  } catch (error: any) {
    //console.log(error)
    log.error(`Error in Healthcheck Service: ${error}`)
    errorResponse(res, error)
  }
}
