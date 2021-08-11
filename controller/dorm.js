require("Sequelize");
const dorms = require('../models/dorm');

exports.create = (req, res) => {

    const dorm = {
        DORMNAMETH: req.body.dormNameTH ? req.body.dormNameTH : false,
        DORMNAMEENG: req.body.dormNameENG ? req.body.dormNameENG : false,
        NUMOFBUILDING: req.body.numOfBuylding ? req.body.numOfBuylding : false,
        ADDRESS: req.body.address ? req.body.address : false,
        PROVINCE: req.body.province ? req.body.province : false,
        STREET: req.body.street ? req.body.street : false,
        POSTCODE: req.body.postCode ? req.body.postCode : false,
        TELNO: req.body.telNo ? req.body.telNo : false,
        SUBDISTRICT: req.body.subdistrict ? req.body.subdistrict : false,
        DISTRICT: req.body.district ? req.body.district : false,
        DORMCODE: req.body.dormCode ? req.body.dormCode : false
    };

    dorms.create(dorm)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });

};