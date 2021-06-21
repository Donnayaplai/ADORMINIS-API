const { DataTypes } = require("Sequelize");
const Room = require('../models/room');
const RoomStatus = require('../models/roomStatus');

Room.hasMany(RoomStatus, { foreignKey: 'ROOMID' })

const getAll = Room.findAll({
  attributes: ['ROOMID', 'ROOMNO', 'FLOOR', 'BUILDINGID', 'ROOMTYPEID'],
  include: [{
    model: RoomStatus,
    attributes: ['STATUS']
  }]
});

const getRoomNo = Room.findOne({
  attributes: ['ROOMNO'],
  where: { ROOMID: '130000001' }
});

module.exports = { getAll, getRoomNo };