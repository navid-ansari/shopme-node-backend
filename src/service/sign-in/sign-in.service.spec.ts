import { Request, Response } from 'express'

// service
import { signInUser } from './sign-in.service'

// schema
const signInSchema = require('../../schema/signin/SignInSchema')

// test fixtures
import { UserFixture, MockedUser } from '../../adapters/user-fixture'

// mocked node response
import { getMockRes } from '../../types/test/mock-response'
import { comparePassword } from '../../util/password-hashing/compare-password'

jest.mock('../../util/password-hashing/compare-password')
jest.mock('../../schema/signin/SignInSchema')

const mocked = jest.mocked

describe('validate sign in service', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('return 404 when user is not found', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'NavidAnsari1!'
    const mockRequest: Partial<Request> = {
      body: {
        email,
        password
      }
    }
    const mockResponse = getMockRes()
    signInSchema.findOne.mockResolvedValue(null)
    await signInUser(mockRequest as Request, mockResponse as Response)
    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'User not found'
    })
  })

  it('return 401 when password is not matching', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'NavidAnsari1'
    const mockRequest: Partial<Request> = {
      body: {
        email,
        password
      }
    }
    const mockResponse = getMockRes()
    const mockedUser = MockedUser({ email, password })
    signInSchema.findOne.mockResolvedValue(mockedUser)
    mocked(comparePassword).mockResolvedValueOnce(false)
    await signInUser(mockRequest as Request, mockResponse as Response)
    expect(mockResponse.status).toHaveBeenCalledWith(401)
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Password is incorrect'
    })
  })

  it('return 200 when email and password is matched', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'polly'
    const mockRequest: Partial<Request> = {
      body: {
        email,
        password
      }
    }
    const mockResponse = getMockRes()
    const mockedUser = MockedUser({ email, password })
    const userFixture = UserFixture({ email, password })
    signInSchema.findOne.mockResolvedValue(mockedUser)
    mocked(comparePassword).mockResolvedValueOnce(true)
    await signInUser(mockRequest as Request, mockResponse as Response)
    expect(mockedUser).toEqual(userFixture)
    expect(mockResponse.status).toHaveBeenCalledWith(200)
    expect(mockResponse.json).toHaveBeenCalledWith(mockedUser)
  })
})
