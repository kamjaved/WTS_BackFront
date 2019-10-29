const express = require("express");
const supplierBranchController = require("../../controllers/supplier/supplierBranchController");
const authController = require("../../controllers/authController");

const router = express.Router();

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin"));

router
  .route("/:stateId/state/:cityId/city/:locationId/location")
  .get(
    supplierBranchController.setStateCityLocationId,
    supplierBranchController.getAllSupplierBranches
  )
  .post(
    supplierBranchController.setStateCityLocationId,
    supplierBranchController.createSupplierBranch
  );

router
  .route("/")
  .get(supplierBranchController.getAllSupplierBranches)
  .post(supplierBranchController.createSupplierBranch);

router
  .route("/:id")
  .get(supplierBranchController.getSupplierBranch)
  .patch(supplierBranchController.updateSupplierBranch)
  .delete(supplierBranchController.deleteSupplierBranch);

module.exports = router;
