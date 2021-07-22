const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

// require("dotenv").config();
require("./models/resident");

// const roomRouter = require("./routes/room");

const api = require("./api");
// const db = require("./config/db");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
//Router
// app.get("/", roomRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
//Connecting to Frontend
// app.get("/", function (req, res) {
//   res.redirect("https://adorminis.netlify.app/");
// });
