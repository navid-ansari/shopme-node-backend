import { Response } from 'express'
import {
  InputError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  BadResponseError
} from './definitions'

export {
  InputError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  BadResponseError
}

type Err = Error

export const errorResponse = (res: Response, err: Err): void => {
  if (err instanceof InputError) {
    res.status(400)
  } else if (err instanceof AuthenticationError) {
    res.status(401)
  } else if (err instanceof ForbiddenError) {
    res.status(403)
  } else if (err instanceof NotFoundError) {
    res.status(404)
  } else if (err instanceof BadResponseError) {
    res.status(502)
  }
  res.json({ error: err.message })
}
