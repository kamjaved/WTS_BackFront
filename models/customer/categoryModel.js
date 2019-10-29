const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category must belong Given"],
    unique: true
  }
});

categorySchema.pre(/^find/, function(next) {
  this.populate({
    path: "state"
  });

  next();
});

module.exports = Category = mongoose.model("Category", categorySchema);
