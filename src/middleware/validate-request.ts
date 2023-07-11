import { Request, Response, NextFunction } from 'express'
import { AnySchema, object } from 'yup'

// logger
import { log } from '../logger'

const validateReq =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    //log.info('Validate Request')
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params
        },
        { abortEarly: false }
      )
      return next()
    } catch (err: any) {
      const allErrors = err.inner.reduce(
        (errors: any, currentValidation: any) =>
          Object.assign(errors, {
            [currentValidation.path]: currentValidation.message //first error is enough for this demo
          }),
        {}
      )
      return res.status(400).json({ success: false, errors: allErrors })
    }
  }

const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  /*log.info(
    `Endpoint=> ${req.url}, Method=> ${req.method}, Time=> ${new Date()}`
  )*/
  next()
}

export interface Error {
  type: any
  message: any
}
export { validateReq, LoggerMiddleware }
