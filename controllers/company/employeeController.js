const Employee = require("../../models/company/employeeModel.js");
const factory = require("../handlerFactory.js");

exports.createEmployee = factory.createOne(Employee);
exports.getAllEmployees = factory.getAll(Employee);
exports.getEmployee = factory.getOne(Employee);
exports.updateEmployee = factory.updateOne(Employee);
exports.deleteEmployee = factory.deleteOne(Employee);
