const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require("body-parser");
// const bcrypt = requre("bcrypt");
const roomRouter = require('./routes/room');

app.use(express.json());
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "static")));

// app.get("/", function (req, res) {
//   res.redirect("https://adorminis.netlify.app/");
// });

app.get("/",roomRouter);

//Hashing the password
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
