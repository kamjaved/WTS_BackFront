const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "There must be a Name"],
    uppercase: true
  },
  supplierBranch: {
    type: mongoose.Schema.ObjectId,
    ref: "SupplierBranch"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// supplierSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: ""
//   });

//   next();
// });

module.exports = Supplier = mongoose.model("Supplier", supplierSchema);
