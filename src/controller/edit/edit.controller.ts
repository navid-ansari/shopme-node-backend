import { Request, Response } from 'express'

// logger
import { log } from '../../logger'

// service
import { editUser } from '../../service'

export const editUserHandler = async (req: Request, res: Response) => {
  log.info('Edit controller')
  try {
    return await editUser(req, res)
  } catch (e) {
    /*return res.status(409).send(e.message);*/
    //log.error('Error In View Controller')
  }
}
