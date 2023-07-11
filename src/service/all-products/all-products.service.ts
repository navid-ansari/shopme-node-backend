import { Request, Response } from 'express'
//import { omit } from 'lodash'

//const UserSchema = require('../../schema/user/UserSchema')

//import { IUser } from '../../types/response/user'

export const allProductsService = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: 'all products api working'
    })
  } catch (error: any) {
    return res.status(500).end()
  }
}
