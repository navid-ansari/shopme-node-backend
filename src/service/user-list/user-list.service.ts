import { Request, Response } from 'express'
import { omit } from 'lodash'

//const UserSchema = require('../../schema/user/UserSchema')
import { UserSchema } from '../../schema/user/UserSchema'

import { IUser } from '../../types/response/user'

export const userList = async (req: Request, res: Response) => {
  try {
    const userList: IUser[] = await UserSchema.find({})
    if (userList) {
      // console.log(userList)
      // remove password from the response
      /*const modifiedList = userList.map(({ password, ...user }) => {
        return user
      })*/
      //console.log(userList)
      return res.status(200).json(userList)
      // return res.status(200).json(modifiedList)
    }
  } catch (error: any) {
    return res.status(500).end()
  }
}
