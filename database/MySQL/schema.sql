DROP DATABASE IF EXISTS regretsy_reviews;

CREATE DATABASE regretsy_reviews;

USE regretsy_reviews;

CREATE TABLE sellers (
  sellerID VARCHAR(500) PRIMARY KEY,
  sellerName VARCHAR(500),
  sellerUsername VARCHAR(500),
  sellerAvatar VARCHAR(500),
  averageRating INT,
  listingID INT,
  productTitle VARCHAR(500),
  productImage VARCHAR(500)
);

CREATE TABLE reviews (
    reviewerID VARCHAR(500) PRIMARY KEY,
    reviewerName VARCHAR(500),
    reviewerAvatar VARCHAR(500),
    reviewDate VARCHAR(500),
    reviewRating INT,
    reviewText TEXT,
    sellers_ID VARCHAR(500),
    FOREIGN KEY (sellers_ID)
      REFERENCES sellers(sellerID),
);