const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const app = express();

app.use(cors());

//Connect Database
sequelize.sync();

//Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'API Running',
  });
});

//Define Route

//Room
// const roomRouter = require('./routes/room');
// app.use('/api/dormitory', roomRouter);
// app.get('/', roomRouter);
// Test PM: http://localhost:3001/room/100000003
// Resdent info: http://localhost:3001/room/100000003/130000001
// Add resident: http://localhost:3001/room/100000003/130000001/0/addRes

//User
app.use('/api/users', require('./routes/user'));
// app.use('/api/auth', require('./routes/auth'));

//Dorm
// const dormRouter = require('./routes/dorm');
// app.use('/dorm', dormRouter);
// Test PM(GET): http://localhost:3001/dorm/100000004
// (POST): http://localhost:3001/dorm

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//Connecting to Frontend
// app.get("/", function (req, res) {
//   res.redirect("https://adorminis.netlify.app/");
// });
