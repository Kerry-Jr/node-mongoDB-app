const request = require('supertest')

const app = require('../src/app')

test('Should sign up new user', async () => {
  await (await request(app).post('/users')).send({
    name: 'Kerry',
    email: 'kerry@kerry.com',
    password: 'MyPass777!'

  })
})