const express = require("express");
const router = express.Router();
const { ROOM_FINDALL } = require("../controller/room");
const { RESIDENT_INFO } = require("../controller/residentInfo");
const rent = require("../controller/rent")

router.get("/:dormID", async (req, res) => {
  const dormID = req.params.dormID;
  const room = await ROOM_FINDALL(dormID);
  res.json(room)
});

router.get("/:dormID/:roomID", async (req, res) => {
  const roomID = req.params.roomID;
  const residentInfo = await RESIDENT_INFO(roomID);
  res.json(residentInfo)
});

//Check user info
router.get("/:dormID/:roomID/:personalCode/addRes", async (req, res) => {
  const personalCode = req.params.personalCode;
  const user = await rent.USER_INFO(personalCode);
  res.json(user)
});

//Add user
router.post("/:dormID/:roomID/:personalCode/addRes", async (req, res) => {
  req.params.personalCode;
  req.params.roomID;
  console.log("test")
  const addResident = await rent.ADD_USER(req, res);
  res.json(addResident)
});

module.exports = router;