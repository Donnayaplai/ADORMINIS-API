const express = require("express");
const router = express.Router();
const dorms = require("../models/dorm");
const newDorm = require("../controller/dorm")

router.get("/:dormID", async (req, res) => {
    const dormID = req.params.dormID;
    const dormInfo = await dorms.findByPk(dormID);
    res.json(dormInfo)
});

router.post("/", newDorm.create);

module.exports = router;