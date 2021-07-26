const express = require("express");
const router = express.Router();
const { ROOM_FINDALL } = require("../controller/room");

// router.get("/", async (req, res) => {
//   const room = await ROOM_FINDALL();
//   console.log(room, "route")
//   res.send(room)
// });

router.get("/:dormID", async (req, res) => {
  const dormID = req.params.dormID;
  const room = await ROOM_FINDALL(dormID);
  // console.log(room)
  res.json(room)
});

module.exports = router;