import { validateSignUp } from './signup-validator'
import { MockedUser } from '../../adapters/user-fixture'

describe('validate sign up request', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('throws error if username is missing', () => {
    const mockUser = MockedUser({ username: undefined })
    expect(() => validateSignUp(mockUser)).toThrow(
      'missing username in request'
    )
  })
})
