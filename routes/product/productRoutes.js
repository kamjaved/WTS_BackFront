const express = require("express");
const productController = require("../../controllers/product/productController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
