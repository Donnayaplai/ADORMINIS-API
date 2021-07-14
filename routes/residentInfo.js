const express = require("express");
const router = express.Router();
const ResidentInfo = require("../controller/residentInfo");

router.get("/", async (req, res) => {
  const info = await ResidentInfo.getResidentInfo;
  return res.json(info);
});

// router.get("/:roomID", async (req, res) => {
//   const roomID = req.params.roomID;
//   const info = await ResidentInfo.getResidentInfo(roomID);
//   res.json(info);
// });

module.exports = router;
