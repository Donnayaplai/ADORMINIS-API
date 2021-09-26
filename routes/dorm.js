const express = require('express');
const router = express.Router();
const dorm = require('../controller/dorm');

//Create new dormitory
router.post('/', dorm.CREATE_DORM);

module.exports = router;
