const CustomerBranch = require("../../models/customer/customerBranchModel");
const factory = require("../handlerFactory.js");

exports.setStateCityLocationId = (req, res, next) => {
  //Nested routes
  if (!req.body.state) req.body.state = req.params.stateId;
  if (!req.body.city) req.body.city = req.params.cityId;
  if (!req.body.location) req.body.location = req.params.locationId;
  next();
};

exports.createCustomerBranch = factory.createOne(CustomerBranch);
exports.getAllCustomerBranches = factory.getAll(CustomerBranch);
exports.getCustomerBranch = factory.getOne(CustomerBranch);
exports.updateCustomerBranch = factory.updateOne(CustomerBranch);
exports.deleteCustomerBranch = factory.deleteOne(CustomerBranch);
