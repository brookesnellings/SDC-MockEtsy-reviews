const request = require('supertest');
const app = require('./server/app.js');

// Server Routes Unit Tests

test('Reviews GET route sends back an empty response', async done => {
  request(app)
    .get('/reviews')
    .expect(200, done);
});

test('Reviews GET route to specific product UUID sends back an array of review objects', async done => {
  request(app)
    .get('/reviews/7e1213c2-dc50-43cc-92e6-dbf09e081c16')
    .expect(200)
    .then(response => {
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body[1]).toHaveProperty('seller_name');
      done();
    });
});

test('Reviews POST route sends back a 404', async done => {
  request(app)
    .post('/reviews')
    .expect(400, done);
});
