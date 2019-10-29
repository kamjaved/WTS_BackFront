const express = require("express");
const supplierController = require("../../controllers/supplier/supplierController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(supplierController.getAllSuppliers)
  .post(supplierController.createSupplier);

router
  .route("/:id")
  .get(supplierController.getSupplier)
  .patch(supplierController.updateSupplier)
  .delete(supplierController.deleteSupplier);

module.exports = router;
