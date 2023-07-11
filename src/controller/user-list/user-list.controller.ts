import { Request, Response } from 'express'
import { omit } from 'lodash'

// logger
import { log } from '../../logger'

// service
import { userList } from '../../service'

export const userListHandler = async (req: Request, res: Response) => {
  try {
    const users = await userList(req, res)
    //console.log(users);
    return users
    /*const omitPassword = users.every()
    omit(users.)*/
  } catch (e) {
    //log.error('Error In User List Controller')
  }
}
