const express = require("express");
const productdetailController = require("../../controllers/product/productdetailController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(productdetailController.getAllProductDetails)
  .post(productdetailController.createProductDetail);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(productdetailController.getProductDetail)
  .patch(productdetailController.updateProductDetail)
  .delete(productdetailController.deleteProductDetail);

module.exports = router;
