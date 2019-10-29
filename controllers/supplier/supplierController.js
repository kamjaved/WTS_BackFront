const Supplier = require("../../models/supplier/supplierModel");
const factory = require("../handlerFactory");

exports.createSupplier = factory.createOne(Supplier);
exports.getAllSuppliers = factory.getAll(Supplier);
exports.getSupplier = factory.getOne(Supplier);
exports.updateSupplier = factory.updateOne(Supplier);
exports.deleteSupplier = factory.deleteOne(Supplier);
