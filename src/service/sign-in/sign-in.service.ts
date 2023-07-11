import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

// logger
import { log } from '../../logger'

// schema
const signInSchema = require('../../schema/signin/SignInSchema')

// model
import { User } from '../../types/controller/user'
import { comparePassword } from '../../util/password-hashing/compare-password'
import { errorResponse } from '../../lib/errors'

export const signInUser = async (req: Request, res: Response) => {
  //log.info('Sign In Service Working')
  const { email, password } = req.body
  try {
    const user: User = await signInSchema.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    if (user) {
      const validatePassword = await comparePassword(password, user.password)
      if (!validatePassword) {
        return res.status(401).json({ message: 'Password is incorrect' })
      } else {
        return res.status(200).json(user)
      }
    }
  } catch (error: any) {
    errorResponse(res, error)
  }
}
