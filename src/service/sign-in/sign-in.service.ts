import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

// logger
import { log } from '../../logger'

// schema
//const signInSchema = require('../../schema/signin/SignInSchema')
import { SignInSchema } from '../../schema/signin/SignInSchema'

// model
import { User } from '../../types/controller/user'
import { comparePassword } from '../../util/password-hashing/compare-password'
import { errorResponse } from '../../lib/errors'

export const signInService = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const user: User = await SignInSchema.findOne({ email })
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
