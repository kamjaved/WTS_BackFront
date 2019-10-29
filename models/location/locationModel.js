const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
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
  locationName: {
    type: String,
    //unique: true,
    required: [true, "Please provide address details"]
  },
  // pincode: {
  //   type: Number,
  //   min: 7,
  //   required: [true, "Please Provide a pin"]
  // },
  phone: {
    type: Number,
    min: 10
  },

  //  createdBy: { type: String, select: false },

  createdDate: {
    type: Date,
    default: Date.now,
    select: false
  }
  // modifiedBy: { type: String, select: false },
  // modifiedDate: Date
});

//QUERY MIDDLEWARE
locationSchema.pre(/^find/, function(next) {
  this.populate({
    path: "state",
    select: "state "
  }).populate({
    path: "city",
    select: "-state -__v"
  });

  next();
});

module.exports = Location = mongoose.model("Location", locationSchema);
