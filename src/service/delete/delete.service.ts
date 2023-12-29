import { Request, Response } from 'express'

//const UserSchema = require('../../schema/user/UserSchema')

import { UserSchema } from '../../schema/user/UserSchema'

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const user = await UserSchema.findByIdAndRemove(id)
    //console.log(user)
    if (user) {
      return res.send(user)
    }
    if (!user) {
      return res.sendStatus(404)
    }
  } catch (error: any) {
    //console.log(error)
  }
}
