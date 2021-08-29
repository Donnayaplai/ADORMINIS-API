const User = require('../models/user');
const Role = require('../models/role');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
User.belongsTo(Role);

async function USER_REGISTER(req, res) {
  const { fname, lname, telno, gender, IDCardNo, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exist' }] });
    }
    //Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await User.create({
      FNAME: fname,
      LNAME: lname,
      TELNO: telno,
      GENDER: gender,
      IDCARDNO: IDCardNo,
      EMAIL: email,
      PASSWORD: password,
    });

    //Return jsonwebtoken
    const payload = {
      User: {
        USERID: User.USERID,
      },
    };
    jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000000 });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
}
module.exports = { USER_REGISTER };
// exports.create = (req, res) => {
//   const user = {
//     FNAME: req.body.fname ? req.body.fname : false,
//     LNAME: req.body.lname ? req.body.lname : false,
//     TELNO: req.body.telno ? req.body.telno : false,
//     GENDER: req.body.gender ? req.body.gender : false,
//     IDCARDNO: req.body.idCardNo ? req.body.idCardNo : false,
//     EMAIL: req.body.email ? req.body.email : false,
//     PASSWORD: req.body.password ? req.body.password : false,
//     PERSONALCODE: req.body.personalcode ? req.body.personalcode : false,
//     ROLEID: req.body.roleid ? req.body.roleid : false,
//   };

//   users
//     .create(user)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };
