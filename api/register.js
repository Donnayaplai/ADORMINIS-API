const express = require("express");
const RESIDENT = require("../models/resident");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { FNAME, LNAME, EMAIL, PASSWORD } = req.body;

  const alreadyExistsUser = await RESIDENT.findOne({ where: { EMAIL } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }

  const newUser = new RESIDENT({ FNAME, LNAME, EMAIL, PASSWORD });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
});

module.exports = router;
// const express = require("express");
// const RESIDENT = require("./register");
// const router = express.Router();
// router.post("/register", async (req, res) => {
//   const { FNAME, LNAME, EMAIL, PASSWORD } = req.body;

//   const alreadyExistUser = await RESIDENT.findAll({
//     where: { EMAIL },
//   }).catch((err) => {
//     console.log("Error: ", err);
//   });
//   if (alreadyExistUser) {
//     return res.json({ message: "User with this email already exist!" });
//   }
//   const newUser = new RESIDENT({ FNAME, LNAME, EMAIL, PASSWORD });
//   const savedUser = await newUser.save().catch((err) => {
//     console.log("Error: ", err);
//     res.json({ error: "Cannot register user at the moment." });
//   });
//   if (savedUser) res.json({ message: "Thanks for registered with us!" });
//   else res.json({ error: "Cannot register user at the moment." });
// });
// module.exports = router;
