const { DataTypes } = require("Sequelize");
const User = require('../models/user');
const Rents = require('../models/rent');

const USER_INFO = async (personalCode) => {
    const user = await User.findOne({
        where: {
            PERSONALCODE: personalCode
        }
    });
    return user;
}

const getUserByCode = async (personalCode) => {
    const userID = await User.findOne({
        attributes: ['USERID'],
        where: {
            PERSONALCODE: personalCode
        }
    });
    // console.log(userID.dataValues.USERID, "<<<getUserID")
    return userID.dataValues.USERID;
}

const ADD_USER = async (req, res) => {
    // console.log(req.body, "<<<addUser")
    const rent = {
        CHECKINDATE: req.body.checkInDate ? req.body.checkInDate : null,
        CONTRACTOFRENTID: req.body.contractOfRentID ? req.body.contractOfRentID : null,
        USERID: await getUserByCode(req.body.personalCode),
        ROOMID: req.params.roomID
    };
    
    Rents.create(rent)
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err)
            return {
                message:
                    err.message
            }
        });
}

module.exports = { USER_INFO, getUserID: getUserByCode, ADD_USER }