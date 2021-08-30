const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const { FIND_EMAIL, USER_REGISTER } = require('../controller/user');

// @desc Register user
// @access Public
router.post(
  '/register',
  [
    check('fname', 'Name is required').not().isEmpty(),
    check('lname', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
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
      let user = await FIND_EMAIL(email);
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }

      user = new User({
        fname,
        lname,
        telno,
        gender,
        IDCardNo,
        email,
        password,
      });
      console.log(user, "<<<user")
      //Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);
// router.post('/register', USER_REGISTER);

module.exports = router;
