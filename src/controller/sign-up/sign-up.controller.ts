import { Request, Response } from 'express'
import { errorResponse } from '../../lib/errors'

// logger
import { log } from '../../logger'

// service
import { signUpUser } from '../../service'
import { hashPassword } from '../../util/password-hashing/hash-password'
import { validateSignUp } from '../validator/signup-validator'

export const signUpHandler = async (req: Request, res: Response) => {
  try {
    /*return res.send(omit(user.toJSON(), "password"));*/
    // return await signUpUser(req, res)
    const { body } = req
    const { username, email, fname, lname, dob, password, role } = body
    validateSignUp({
      username,
      email,
      fname,
      lname,
      dob,
      password,
      role
    })
    const encryptedPassword = await hashPassword(password)
    //console.log(encryptedPassword)
    req.body.password = encryptedPassword
    //console.log(req.body)
    await signUpUser(req, res)
  } catch (e: any) {
    errorResponse(res, e)
    //log.error("Error In Sign Up Controller");
  }
}
