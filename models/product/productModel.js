const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productType: {
    type: String,
    required: [true, "Product must belong Given"]
  }
});

// productSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: "state"
//   });

//   next();
// });

module.exports = Product = mongoose.model("Product", productSchema);
