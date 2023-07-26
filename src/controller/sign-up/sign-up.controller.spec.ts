import { Request, response, Response } from 'express'

// test fixtures
//import { UserFixture, MockedUser } from '../../adapters/'

// mocked node response
import { getMockRes } from '../../types/test/mock-response'

import { signUpController } from './sign-up.controller'
describe('sign up controller', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  const username = 'Navid_Ansari'
  const email = 'navid@gmail.com'
  const fname = 'Navid'
  const lname = 'Ansari'
  const dob = '25-07-1990'
  const password = 'NavidAnsari1!'
  const role = [
    {
      label: 'User',
      value: 'USER',
      code: 100
    }
  ]
  const mockResponse = getMockRes()

  it('return 400 when request does not contain username', async () => {
    const mockRequest: Partial<Request> = {
      body: {
        email,
        fname,
        lname,
        dob,
        password,
        role
      }
    }

    await signUpController(mockRequest as Request, mockResponse as Response)
    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: 'missing username in request'
    })
  })
})
