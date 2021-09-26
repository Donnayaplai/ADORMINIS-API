const express = require('express');
const router = express.Router();
const { FIND_ROOMS } = require('../controller/room');
const rent = require('../controller/rent');

//Get all room in building
router.get('/all/:buildingID', async (req, res) => {
  const buildingID = req.params.buildingID;
  const rooms = await FIND_ROOMS(buildingID);
  res.json(rooms);
});

//Check user info// get user info in Profile page
router.get('/:personalCode', async (req, res) => {
  const personalCode = req.params.personalCode;
  const user = await rent.getUserInfoByCode(personalCode);
  res.json(user);
});

//Add resident to specific room
router.post('/:buildingID/:roomID', async (req, res) => {
  req.body.personalCode;
  req.params.roomID;
  req.params.buildingID;
  console.log('test', req.body.personalCode, req.params.roomID);
  const addResident = await rent.addUserToRoom(req, res);
  res.json(addResident);
});

//Insert addtional info in Profile page
router.post('/addRes/:dormID/:roomID/:newCoRID', async (req, res) => {
  req.params.dormID;
  req.params.roomID;
  req.params.newCoRID;
  console.log('Test Add CoR');
  const addCoRDetail = await rent.addCoRDetail(req, res);
  res.json(addCoRDetail);
});

module.exports = router;
