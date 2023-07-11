const request = require('supertest')
import { createServer } from '../../../src/initializer/create-server'
import { connect, closeDatabase, clearDatabase } from '../test-db-config'

const signInSchema = require('../../../src/schema/signin/SignInSchema')
const UserSchema = require('../../../src/schema/user/UserSchema')

const Test_User = (override = {}) => ({
  username: 'Navid',
  email: 'navid@gmail.com',
  fname: 'Navid',
  lname: 'Ansari',
  dob: '25-07-1990',
  password: '$2b$10$8VUcxI8jNRNJCGjhTygze.It4xT6BIFepqzHdSb04NYL7sTRO30vO',
  role: [
    {
      label: 'User',
      value: 'USER',
      code: 100
    }
  ],
  ...override
})

describe('Sign In api: Integration', () => {
  const app = createServer()

  beforeAll(async () => {
    await connect()
  })

  afterEach(async () => {
    await clearDatabase()
  })

  afterAll(async () => {
    await closeDatabase()
  })

  it('return 404 when user is not found', async () => {
    const email: string = 'incorrectemail@gmail.com'
    const password: string = 'password'

    const user = new UserSchema(Test_User())
    await user.save()
    await signInSchema.findOne({ email })
    const res = await request(app)
      .post('/api/signin')
      .set('Accept', 'application/json')
      .send({
        email,
        password
      })
    expect(res.status).toBe(404)
    expect(res.body).toEqual({ message: 'User not found' })
  })

  it('return 401 when password is incorrect', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'incorrectpassword'

    const user = new UserSchema(Test_User())
    await user.save()
    await signInSchema.findOne({ email })
    const res = await request(app)
      .post('/api/signin')
      .set('Accept', 'application/json')
      .send({
        email,
        password
      })
    expect(res.status).toBe(401)
    expect(res.body).toEqual({ message: 'Password is incorrect' })
  })

  it('return 200 when user logged in', async () => {
    const email: string = 'navid@gmail.com'
    const password: string = 'Navideng1!'
    const user = new UserSchema(Test_User())
    await user.save()
    await signInSchema.findOne({ email })
    const res = await request(app)
      .post('/api/signin')
      .set('Accept', 'application/json')
      .send({
        email,
        password
      })
    expect(res.status).toBe(200)
    //expect(res.body).toEqual(foundUser)
  })
})
