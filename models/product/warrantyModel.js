const mongoose = require("mongoose");

const warrantySchema = new mongoose.Schema({
  warranty: {
    type: Number,
    required: [true, "Warranty must belong Given"]
  }
});

// warrantySchema.pre(/^find/, function(next) {
//   this.populate({
//     path: "state"
//   });

//   next();
// });

module.exports = Warranty = mongoose.model("Warranty", warrantySchema);
