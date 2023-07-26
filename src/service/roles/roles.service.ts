import { Request, Response } from 'express'
import { log } from '../../logger'
import { IProduct } from '../../types/response/product'
import { errorResponse } from '../../lib/errors'
import { IRoles } from '../../types/response/roles'

const RolesSchema = require('../../schema/roles/RolesSchema')

export const rolesService = async (req: Request, res: Response) => {
  try {
    const roles: IRoles = await RolesSchema.find({}) // query mongo db
    if (RolesSchema) {
      return res.status(200).json(roles)
    }
  } catch (error: any) {
    log.error(`Error in Roles Service: ${error}`)
    return res.status(500).end()
  }
}
