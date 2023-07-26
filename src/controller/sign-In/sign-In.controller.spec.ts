import { Request, Response } from 'express'
import { signInController } from './sign-In.controller'
import { signInService } from '../../service/sign-in/sign-in.service'
import { getMockRes } from '../../types/test/mock-response'
import { validateSignInReq } from '../validator/signin-request-validator'
import { InputError } from '../../lib/errors'

const mocked = jest.mocked

describe('validate sign in request', () => {
  it('return 400 when email is missing in the request', async () => {
    const password: string = 'NavidAnsari1!'
    const mockRequest: Partial<Request> = {
      body: {
        password
      }
    }
    const mockResponse = getMockRes()
    expect(() => validateSignInReq({ password })).toThrow(
      'missing email in request'
    )
  })

  it('return 400 when password is missing in the request', async () => {
    const email: string = 'navid@gmail.com'
    const mockRequest: Partial<Request> = {
      body: {
        email
      }
    }
    const mockResponse = getMockRes()
    expect(() => validateSignInReq({ email })).toThrow(
      'missing password in request'
    )
  })

  it('return 400 when email and password is missing in the request', async () => {
    const email: string = 'navid@gmail.com'
    const mockRequest: Partial<Request> = {
      body: {}
    }
    const mockResponse = getMockRes()
    expect(() => validateSignInReq({})).toThrow(
      'missing email and password in request'
    )
  })
})
