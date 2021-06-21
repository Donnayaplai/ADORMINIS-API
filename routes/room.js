const express = require('express');
const router = express.Router();
const Room = require('../controller/room');

router.get('/', async (req, res) => {
    const room = await Room.getAll
    return res.json(room)
}
);

module.exports = router;