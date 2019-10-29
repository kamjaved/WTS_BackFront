const Customer = require("../../models/customer/customerModel");
const factory = require("../handlerFactory");

exports.setStateId = (req, res, next) => {
  //Nested routes
  if (!req.body.state) req.body.state = req.params.stateId;
  next();
};

exports.createCustomer = factory.createOne(Customer);
exports.getAllCustomers = factory.getAll(Customer);
exports.getCustomer = factory.getOne(Customer);
exports.updateCustomer = factory.updateOne(Customer);
exports.deleteCustomer = factory.deleteOne(Customer);
