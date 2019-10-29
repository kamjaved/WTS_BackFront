const SupplierBranch = require("../../models/supplier/supplierBranchModel");
const factory = require("../handlerFactory");

exports.setStateCityLocationId = (req, res, next) => {
  //Nested routes
  if (!req.body.state) req.body.state = req.params.stateId;
  if (!req.body.city) req.body.city = req.params.cityId;
  if (!req.body.location) req.body.location = req.params.locationId;
  next();
};

exports.createSupplierBranch = factory.createOne(SupplierBranch);
exports.getAllSupplierBranches = factory.getAll(SupplierBranch);
exports.getSupplierBranch = factory.getOne(SupplierBranch);
exports.updateSupplierBranch = factory.updateOne(SupplierBranch);
exports.deleteSupplierBranch = factory.deleteOne(SupplierBranch);
