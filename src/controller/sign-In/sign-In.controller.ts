import { Request, Response } from 'express'

// logger
import { log } from '../../logger'

// service
import { signInUser } from '../../service'

// request validator
import { validateSignInReq } from '../validator/signin-request-validator'

// error
import { errorResponse } from '../../lib/errors'

export const signInHandler = async (req: Request, res: Response) => {
  //log.info('Sign In Controller Working')
  const { email, password } = req.body
  try {
    validateSignInReq({ email, password })
    const user = await signInUser(req, res)
    return user
  } catch (e: any) {
    //log.error('Error In Sign In Controller')
    errorResponse(res, e)
  }
  /*const success = false
  const unauthorized = false
  const notfound = true
  if (success) {
    res.status(200).send({ message: 'success case' })
  } else if (unauthorized) {
    res.status(401).send({ message: 'unauthorized case' })
  } else if (notfound) res.status(404).send({ message: 'notfound case' })*/
}
