const express = require("express");
const stateController = require("../../controllers/location/stateController");
const authController = require("../../controllers/authController");

const router = express.Router({ mergeParams: true });

//Protect all routes after this middleware- Authentication
router.use(authController.protect);

//Restrict all router after this middleware to admin only- Authorization
router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(stateController.getAllStates)
  .post(stateController.createState);

router.use(authController.restrictTo("admin"));

router
  .route("/:id")
  .get(stateController.getState)
  .patch(stateController.updateState)
  .delete(stateController.deleteState);

module.exports = router;
