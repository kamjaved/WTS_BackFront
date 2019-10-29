const mongoose = require("mongoose");
const validator = require("validator");

const supplierBranchSchema = new mongoose.Schema({
  contactPerson1: {
    type: String,
    required: [true, "Please provide Contact Person Name"]
  },
  contactPerson2: {
    type: String
  },

  email: {
    type: String,
    required: [true, "Please provide supplier email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  location: {
    type: mongoose.Schema.ObjectId,
    ref: "Location",
    required: [true, "Please provide a location"]
  },

  supplier: {
    type: mongoose.Schema.ObjectId,
    ref: "Supplier",
    required: [true, "Please provide a supplier"]
  },
  state: {
    type: mongoose.Schema.ObjectId,
    ref: "State",
    required: [true, "Please provide a state"]
  },
  city: {
    type: mongoose.Schema.ObjectId,
    ref: "City",
    required: [true, "Please provide a city"]
  },
  phone: {
    type: Number,
    min: 10
  },
  address: {
    type: String,
    required: [true, "Please provide Address"]
  },
  createdDate: {
    type: Date,
    default: Date.now,
    select: false
  }
});

//QUERY MIDDLEWARE
supplierBranchSchema.pre(/^find/, function(next) {
  this.populate({
    path: "location",
    select: "-state -city -__v"
  })
    .populate({
      path: "state",
      select: "state"
    })
    .populate({
      path: "city",
      select: "-state -__v"
    })
    .populate({
      path: "supplier",
      select: "-__v"
    });
  next();
});

module.exports = SupplierBranch = mongoose.model(
  "SupplierBranch",
  supplierBranchSchema
);
