import { validateSignInReq } from './signin-request-validator'

describe('validate sign in request', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('throws error if email is missing', () => {
    const password: string = 'NavidAnsari1!'
    expect(() => validateSignInReq({ password })).toThrow(
      'missing email in request'
    )
  })
  it('throws error if passsword is missing', () => {
    const email: string = 'navid@gmail.com'
    expect(() => validateSignInReq({ email })).toThrow(
      'missing password in request'
    )
  })
  it('throws error if email is missing', () => {
    expect(() => validateSignInReq({})).toThrow(
      'missing email and password in reques'
    )
  })
})
