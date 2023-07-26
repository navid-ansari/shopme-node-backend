import { Request, Response } from 'express'
import { omit } from 'lodash'

// logger
import { log } from '../../logger'

// service
import { userList } from '../../service'
import { rolesService } from '../../service/roles/roles.service'

export const rolesController = async (req: Request, res: Response) => {
  try {
    const roles = await rolesService(req, res)
    return roles
  } catch (e) {
    //log.error('Error In User List Controller')
  }
}
