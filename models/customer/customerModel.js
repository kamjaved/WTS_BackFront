const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "There must be a Name"],
    uppercase: true
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "Please provide a Category"]
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

customerSchema.pre(/^find/, function(next) {
  this.populate({
    path: "category",
    select: "-__v"
  });

  next();
});

module.exports = Customer = mongoose.model("Customer", customerSchema);
