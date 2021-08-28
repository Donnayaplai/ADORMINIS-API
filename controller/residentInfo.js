const { DataTypes } = require("Sequelize");
const User = require('../models/user');
const Rent = require('../models/rent')

User.hasMany(Rent, {
  foreignKey: 'USERID',
  as: "RENT"
})

const RESIDENT_INFO = async (roomID) => {
  const data = await User.findAll({
    include: [{
      model: Rent,
      attributes: ['CHECKINDATE', 'CHECKOUTDATE', 'CONTRACTOFRENTID', 'ROOMID'],
      as: "RENT",
      where: {
        ROOMID: roomID,
        CHECKOUTDATE: null
      }
    }]
  });
  // console.log(data, "controller")
  return data;
}

module.exports = { RESIDENT_INFO }