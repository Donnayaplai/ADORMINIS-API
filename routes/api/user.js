const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
require('Sequelize');
const User = require('../../models/user');

//@route GET api/users
// @desc Register user
// @access Public
router.post(
  '/',
  [
    check('fname', 'Firstname is required').not().isEmpty(),
    check('lname', 'Lastname is required').not().isEmpty(),

    check('telno', 'Please enter a valid telephone number').isLength({
      min: 10,
    }),
    check('gender', 'Gender is required').not().isEmpty(),
    check('IDCardNo', 'ID Card Number is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //See if user exists
    const { fname, lname, telno, gender, IDCardNo, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
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
);

module.exports = router;
