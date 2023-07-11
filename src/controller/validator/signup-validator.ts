import { Request } from 'express'
import { InputError } from '../../lib/errors'
import { IRole } from '../../model/user.model'

export const validateSignUp = ({
  username,
  email,
  fname,
  lname,
  dob,
  password,
  role
}: {
  username: string
  email: string
  fname: string
  lname: string
  dob: string
  password: string
  role: IRole[]
}): boolean => {
  if (!username) {
    throw new InputError('missing username in request')
  }
  return true
}
