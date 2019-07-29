const express = require('express');
const cors = require('cors');
const compression = require('compression');
// const db = require('../database/MongoDB/queries.js');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use('/', express.static('./client/dist'));

app.get('/reviews', (req, res) => {
  res.send();
});

// Get review data from database
app.get('/reviews/:id', (req, res) => {
  db.retrieveItemReviews(req.params.id)
    .then(response => res.send(response))
    .catch(err => {
      console.log('Error in server GET route', err);
      res.sendStatus(404);
    });
});

module.exports = app;
