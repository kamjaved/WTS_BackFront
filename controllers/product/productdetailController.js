const ProductDetail = require("../../models/product/ProductDetailModel");
const factory = require("../handlerFactory");

exports.createProductDetail = factory.createOne(ProductDetail);
exports.getAllProductDetails = factory.getAll(ProductDetail);
exports.getProductDetail = factory.getOne(ProductDetail);
exports.updateProductDetail = factory.updateOne(ProductDetail);
exports.deleteProductDetail = factory.deleteOne(ProductDetail);
