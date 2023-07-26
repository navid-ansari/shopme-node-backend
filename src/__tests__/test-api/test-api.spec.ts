const request = require('supertest')
import { createServer } from '../../initializer/create-server'

describe('Test Integration: Integration', () => {
  const app = createServer()

  it('return 200 for test api', async () => {
    const res = await request(app)
      .get('/api/test')
      .set('Accept', 'application/json')
      .expect(200)
      .expect({ message: 'Test Api Working' })
    expect(res.status).toEqual(200)
    expect(res.body).toEqual({ message: 'Test Api Working' })
  })
})
