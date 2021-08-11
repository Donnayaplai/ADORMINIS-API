const express = require("express");
const router = express.Router();
const User = require("../controller/user");

// Create a new user
router.post("/", User.create);

module.exports = router;
