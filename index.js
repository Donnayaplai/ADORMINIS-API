const express = require("express");
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const roomRouter = require("./routes/room");

const db = require("./config/db");

const app = express();
app.use(express.json());
// app.use("/", express.static(path.join(__dirname, "static")));
app.use(cors());

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting to Frontend
// app.get("/", function (req, res) {
//   res.redirect("https://adorminis.netlify.app/");
// });

//Register
app.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;

  db.query(
    `INSERT INTO MANAGER (EMAIL, PASSWORD, FNAME, LNAME) VALUES (?,?,?,?)`,
    [email, password, fname, lname],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//Router
app.get("/", roomRouter);

//Hashing the password
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
