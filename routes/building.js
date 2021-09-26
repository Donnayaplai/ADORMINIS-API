const express = require('express');
const router = express.Router();
const { FIND_BUILDINGS } = require('../controller/room');

//Get all building by dormID
router.get('/:dormID', async (req, res) => {
  const dormID = req.params.dormID;
  const buildings = await FIND_BUILDINGS(dormID);
  res.json(buildings);
});

module.exports = router;
