const connection = require('./index.js');

(async () => {
  await connection.connect().then(() => console.log('DB connected'));
})();

const retrieveItemReviews = id =>
  connection
    .query(`SELECT * FROM reviews WHERE id='${id}'`)
    .then(result => result.rows)
    .catch(console.error);

module.exports = { retrieveItemReviews };
