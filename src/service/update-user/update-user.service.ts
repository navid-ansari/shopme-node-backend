import { Request, Response } from 'express'
import { hashPassword } from '../../util/password-hashing/hash-password'

//const UserSchema = require('../../schema/user/UserSchema')
import { UserSchema } from '../../schema/user/UserSchema'

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id
  console.log(id)
  console.log(req.body)
  try {
    const user = await UserSchema.findByIdAndUpdate(id, {
      ...req.body,
      password: await hashPassword(req.body.password)
    })
    return res.status(200).send(user)
  } catch (error: any) {
    res.status(500).json({ message: 'Error in user update query' })
  }
}
