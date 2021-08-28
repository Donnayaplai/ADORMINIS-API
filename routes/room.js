const express = require("express");
const router = express.Router();
const { FIND_BUILDINGS, FIND_ROOMS } = require("../controller/room");
const { RESIDENT_INFO } = require("../controller/residentInfo");
const rent = require("../controller/rent")

//Get buildings
router.get("/:dormID", async (req, res) => {
  const dormID = req.params.dormID;
  const buildings = await FIND_BUILDINGS(dormID);
  res.json(buildings)
});

//Get rooms
router.get("/:dormID/:buildingID", async (req, res) => {
  const buildingID = req.params.buildingID;
  const rooms = await FIND_ROOMS(buildingID);
  res.json(rooms)
});

//Resident info
router.get("/:dormID/:buildingID/:roomID", async (req, res) => {
  const roomID = req.params.roomID;
  const residentInfo = await RESIDENT_INFO(roomID);
  res.json(residentInfo)
});

//Check user info
router.get("/:dormID/:buildingID/:roomID/:personalCode/addRes", async (req, res) => {
  const personalCode = req.params.personalCode;
  const user = await rent.USER_INFO(personalCode);
  res.json(user)
});

//Add user
router.post("/:dormID/:dormID/:roomID/:personalCode/addRes", async (req, res) => {
  req.params.personalCode;
  req.params.roomID;
  console.log("test")
  const addResident = await rent.ADD_USER(req, res);
  res.json(addResident)
});

module.exports = router;