import { Request, Response } from 'express'
import { log } from '../../logger'

//const UserSchema = require('../../schema/user/UserSchema')
import { UserSchema } from '../../schema/user/UserSchema'

export const editUser = async (req: Request, res: Response) => {
  const id = req.query.id
  log.info('Edit service ')
  console.log(id)
  try {
    const user = await UserSchema.findById(id)
    if (user) {
      return res.status(200).send(omitPassword(user))
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
  } catch (error: any) {
    res.status(500).json({ message: 'Error in Edit query' })
  }
}

const omitPassword = ({
  _id,
  username,
  email,
  fname,
  lname,
  dob,
  role,
  __v
}) => ({
  _id,
  username,
  email,
  fname,
  lname,
  dob,
  role,
  __v
})
