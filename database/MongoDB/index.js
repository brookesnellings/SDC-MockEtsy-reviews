const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reregretsy-reviews', {
  useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const SellersSchema = new mongoose.Schema({
  sellerID: String,
  sellerName: String,
  sellerUsername: String,
  sellerAvatar: String,
  listingID: Number,
  productTitle: String,
  productImage: String
});

const Sellers = mongoose.model('Seller', SellersSchema);

// const ReviewsSchema = new mongoose.Schema({
//   reviewerID: String,
//   reviewerName: String,
//   reviewerAvatar: String,
//   reviewDate: String,
//   reviewRating: Number,
//   reviewText: String,
//   sellers_ID: String
// });
