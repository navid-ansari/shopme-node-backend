import { Request, Response } from 'express'

// service
import { testApi } from '../../service'

// logger
import { log } from '../../logger'

export const testApiHandler = async (req: Request, res: Response) => {
  //log.info('Test Controller Working')
  try {
    const test = await testApi(req, res)
    return test
  } catch (e) {
    return res.status(500).end()
  }
}
