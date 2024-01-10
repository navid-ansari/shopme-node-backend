const request = require('supertest')
import { createServer } from '../../../initializer/create-server'

describe('Test Integration: Healthcheck', () => {
  const app = createServer()

  it('return 200 for healthcheck api', async () => {
    const res = await request(app)
      .get('/api/healthcheck')
      .set('Accept', 'application/json')
      .expect(200)
      .expect({ message: 'Healthcheck success. Server is up and running' })
    expect(res.status).toEqual(200)
    expect(res.body).toEqual({
      message: 'Healthcheck success. Server is up and running'
    })
  })
})
