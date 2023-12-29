import { Request, Response } from 'express'

//const UserSchema = require('../../schema/user/UserSchema')
import { UserSchema } from '../../schema/user/UserSchema'

export const signUpService = async (req: Request, res: Response) => {
  const user = new UserSchema({ ...req.body })
  //console.log(user)
  try {
    /*// check if username already taken
    const username = await UserSchema.findOne({ username: req.body.username })
    if (username) {
      return res
        .status(422)
        .send({ message: 'username already exist', usernameExist: true })
    }*/

    // check if email already taken
    const email = await UserSchema.findOne({ email: req.body.email })
    if (email) {
      return res
        .status(422)
        .send({ message: 'email id already exist', emailExist: true })
    }

    // save user
    const save = await user.save()
    //console.log(save)
    if (save) {
      res.set('Location', `api/view/${save._id}`)
      return res.sendStatus(201)
    }
  } catch (error: any) {
    //console.log(error)
    return res.sendStatus(500)
  }
}
