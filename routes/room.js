const express = require("express");
const router = express.Router();
const { ROOM_FINDALL } = require("../controller/room");
const { RESIDENT_INFO } = require("../controller/residentInfo");

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

// router.get("/:roomID", async (req, res) => {
//   const roomID = req.params.roomID;
//   const residentInfo = await ResidentInfo.RESIDENT_INFO(roomID);
//   console.log(residentInfo)
//   res.json(residentInfo)
// });

module.exports = router;