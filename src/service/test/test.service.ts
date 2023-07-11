import { Request, Response } from 'express'
import { errorResponse } from '../../lib/errors'
import { log } from '../../logger'

export const testApi = async (req: Request, res: Response) => {
  //log.info('Test Controller Working')
  try {
    if (req) {
      return res.status(200).json({ message: 'Test Api Working' })
    }
  } catch (error: any) {
    //console.log(error)
    errorResponse(res, error)
  }
}
