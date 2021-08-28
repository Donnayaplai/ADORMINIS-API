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

const getUserID = async (personalCode) => {
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
        CHECKINDATE: req.body.checkInDate ? req.body.checkInDate : false,
        CONTRACTOFRENTID: req.body.contractOfRentID ? req.body.contractOfRentID : false,
        USERID: await getUserID(req.params.personalCode),
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

module.exports = { USER_INFO, getUserID, ADD_USER }