const express = require("express");
const warrantyController = require("../../controllers/product/warrantyController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(warrantyController.getAllWarrantys)
  .post(warrantyController.createWarranty);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(warrantyController.getWarranty)
  .patch(warrantyController.updateWarranty)
  .delete(warrantyController.deleteWarranty);

module.exports = router;
