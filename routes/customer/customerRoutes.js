const express = require("express");
const customerController = require("../../controllers/customer/customerController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(customerController.getAllCustomers)
  .post(customerController.createCustomer);

router
  .route("/:id")
  .get(customerController.getCustomer)
  .patch(customerController.updateCustomer)
  .delete(customerController.deleteCustomer);

module.exports = router;
