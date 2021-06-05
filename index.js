const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", function (req, res) {
  res.redirect("https://adorminis.netlify.app/");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
