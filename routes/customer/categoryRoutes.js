const express = require("express");
const categoryController = require("../../controllers/customer/categoryController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(categoryController.getAllCategorys)
  .post(categoryController.createCategory);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
