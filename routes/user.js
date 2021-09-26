const express = require('express');
const router = express.Router();
const { RESIDENT_INFO } = require('../controller/residentInfo');
const userController = require('../controller/user');

//Get resident info RoomTable page
router.get('/info/:roomID', async (req, res) => {
  const roomID = req.params.roomID;
  const residentInfo = await RESIDENT_INFO(roomID);
  res.json(residentInfo);
});

router.post('/register', userController.USER_REGISTER);

// router.post('/login', userController.USER_LOGIN);

module.exports = router;
