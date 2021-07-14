const { DataTypes } = require("Sequelize");
const Resident = require('../models/resident');
const Rent = require('../models/rent')

Resident.hasMany(Rent, { foreignKey: 'RESIDENTID' })

const getResidentInfo = Resident.findOne({
  include: [{
    model: Rent,
    attributes: ['CHECKINDATE', 'CHECKOUTDATE', 'CONTRACTOFRENTID', 'ROOMID'],
    where: {
      ROOMID: 130000007 //hard code
    }
  }]
});

module.exports = { getResidentInfo };