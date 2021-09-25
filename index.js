const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use(morgan('dev'));

//Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.json({
//     message: 'API Running',
//   });
// });

//Define Route

//Room
const roomRouter = require('./routes/room');
app.use('/api/room', roomRouter);

//building
const buildingRouter = require('./routes/building');
app.use('/api/building', buildingRouter);

//User
const userRouter = require('./routes/user');
app.use('/api/user', userRouter);

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
