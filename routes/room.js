const express = require("express");
const router = express.Router();
const Room = require("../controller/room");

router.get("/", async (req, res) => {
  const room = await Room.getRooms;
  return res.json(room);
});

// router.get("/:dormID", async (req, res) => {
//   const dormID = req.params.dormID;
//   const room = await Room.getRooms(dormID);
//   res.json(room);
// });

module.exports = router;
