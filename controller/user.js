require("Sequelize");
const users = require("../models/user");

exports.create = (req, res) => {
  const user = {
    FNAME: req.body.fname ? req.body.fname : false,
    LNAME: req.body.lname ? req.body.lname : false,
    TELNO: req.body.telno ? req.body.telno : false,
    GENDER: req.body.gender ? req.body.gender : false,
    IDCARDNO: req.body.idCardNo ? req.body.idCardNo : false,
    EMAIL: req.body.email ? req.body.email : false,
    PASSWORD: req.body.password ? req.body.password : false,
    PERSONALCODE: req.body.personalcode ? req.body.personalcode : false,
    ROLEID: req.body.roleid ? req.body.roleid : false,
  };

  users
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
