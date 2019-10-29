const Category = require("../../models/customer/categoryModel");
const factory = require("../handlerFactory");

exports.createCategory = factory.createOne(Category);
exports.getAllCategorys = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
