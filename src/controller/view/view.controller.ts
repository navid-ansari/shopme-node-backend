import { Request, Response } from 'express'

// logger
import { log } from '../../logger'

// service
import { viewUser } from '../../service'

export const viewUserHandler = async (req: Request, res: Response) => {
  try {
    return await viewUser(req, res)
  } catch (e) {
    /*return res.status(409).send(e.message);*/
    //log.error('Error In View Controller')
  }
}
