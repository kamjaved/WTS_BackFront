const Warranty = require("../../models/product/warrantyModel");
const factory = require("../handlerFactory");

exports.createWarranty = factory.createOne(Warranty);
exports.getAllWarrantys = factory.getAll(Warranty);
exports.getWarranty = factory.getOne(Warranty);
exports.updateWarranty = factory.updateOne(Warranty);
exports.deleteWarranty = factory.deleteOne(Warranty);
