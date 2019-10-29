const express = require("express");
const customerBranchController = require("../../controllers/customer/customerBranchController");
const authController = require("../../controllers/authController");

const router = express.Router();

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin"));

router
  .route("/:stateId/state/:cityId/city/:locationId/location")
  .get(
    customerBranchController.setStateCityLocationId,
    customerBranchController.getAllCustomerBranches
  )
  .post(
    customerBranchController.setStateCityLocationId,
    customerBranchController.createCustomerBranch
  );

router
  .route("/")
  .get(customerBranchController.getAllCustomerBranches)
  .post(customerBranchController.createCustomerBranch);

router
  .route("/:id")
  .get(customerBranchController.getCustomerBranch)
  .patch(customerBranchController.updateCustomerBranch)
  .delete(customerBranchController.deleteCustomerBranch);

module.exports = router;
