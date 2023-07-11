import { Request, Response } from 'express'

// logger
import { log } from '../../logger'

// service
import { updateUser } from '../../service'

export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    return await updateUser(req, res)
  } catch (e) {
    /*return res.status(409).send(e.message);*/
    //log.error('Error In View Controller')
  }
}
