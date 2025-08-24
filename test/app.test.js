const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

describe('GET /', () => {
  it('should return Hola Mundo! with status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hola Mundo!');
  });
});