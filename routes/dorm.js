const express = require("express");
const router = express.Router();
const dorm = require("../controller/dorm")

router.post("/", dorm.CREATE_DORM);

module.exports = router;