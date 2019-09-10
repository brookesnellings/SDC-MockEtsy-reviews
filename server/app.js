const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index');
const data = require('../database/data');
const listData = require('../database/forCharles');
const fakeData = require('../database/utilities/dataGenerator')

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use('/', express.static('./client/dist'));

// database seeding functions:
// // db.seedDB(data);
// // db.seedDBListingID(listData.sellerData);
// // db.seedDBProductInfo(listData.itemIDandPhotoforCharles);

// Testing routes
app.get('/reviews/tests/datagen', (req, res) => { res.send(fakeData.dataGen()); }) // data generator
app.get('/reviews/tests/knex/retrieveseller', (req, res) => { db.retrieveSeller(674905924) }); // retrieve data for listing ID: 674905924
app.get('/reviews/tests/knex/retrievesellerids', (req, res) => { db.retrieveSellerIds(); }); // retrieve all listing ids


// Get seller information for a single seller ID
app.get('/reviews/sellers/product/:id', (req, res) => {
    db.retrieveSeller(req.params.id, (err, results) => {
        if (err) console.log(err);
        res.send(results);
    });
})


// Get seller IDs from database
app.get('/reviews/sellers', (req, res) => {
    db.retrieveSellerIds((err, results) => {
        if (err) console.log(err, ' in server\n');
        res.send(results);
    });
})

module.exports = app;