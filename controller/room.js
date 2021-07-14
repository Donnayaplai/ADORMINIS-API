const { DataTypes } = require("Sequelize");
const Room = require('../models/room');
const RoomStatus = require('../models/roomStatus'); 

Room.hasMany(RoomStatus, { foreignKey: 'ROOMID' })

const getRooms = Room.findAll({
  attributes: ['ROOMID', 'ROOMNO', 'FLOOR', 'BUILDINGID', 'ROOMTYPEID'],
  include: [{
    model: RoomStatus,
    attributes: ['STATUS'],
    where: {
      DORMID: 100000003 //hard code
    }
  }]
});

module.exports = { getRooms };