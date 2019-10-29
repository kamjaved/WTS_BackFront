const mongoose = require("mongoose");

const productdetailSchema = new mongoose.Schema({
  partName: {
    type: String,
    unique: true,
    required: [true, "There must be a Name"],
    uppercase: true
  },
  productName: {
    type: String,
    unique: true,
    required: [true, "There must be a Name"],
    uppercase: true
  },
  productType: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: [true, "Please provide a Product"]
  },
  warranty: {
    type: mongoose.Schema.ObjectId,
    ref: "Warranty",
    required: [true, "Please provide a Warranty"]
  },
  desc: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

productdetailSchema.pre(/^find/, function(next) {
  this.populate({
    path: "warranty",
    select: "-__v"
  }).populate({
    path: "productType",
    select: "-__v"
  });

  next();
});

module.exports = ProductDetail = mongoose.model(
  "ProductDetail",
  productdetailSchema
);
