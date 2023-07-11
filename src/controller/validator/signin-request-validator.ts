import { Request } from 'express'
import { InputError } from '../../lib/errors'

export const validateSignInReq = ({
  email,
  password
}: {
  email?: string
  password?: string
}): boolean => {
  if (!email && password) {
    throw new InputError('missing email in request')
  }
  if (email && !password) {
    throw new InputError('missing password in request')
  }
  if (!email && !password) {
    throw new InputError('missing email and password in request')
  }
  return true
}
