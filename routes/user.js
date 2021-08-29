const express = require('express');
const router = express.Router();
const { USER_REGISTER } = require('../controller/user');

router.post('/', USER_REGISTER);

module.exports = router;
