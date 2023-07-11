import { Request, Response } from 'express'

// logger
import { log } from '../../logger'

// service
import { deleteUser } from '../../service'

// validator
import { validateId } from '../validator/validateId'

export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    return deleteUser(req, res)
  } catch (e) {
    //log.error('Error In Delete Controller')
  }
}
