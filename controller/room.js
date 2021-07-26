const { DataTypes } = require("Sequelize");
const Room = require('../models/room');
const RoomStatus = require('../models/roomStatus');

Room.hasMany(RoomStatus, {
  as: 'ALLROOMSTATUS',
  foreignKey: 'ROOMID'
})

const ROOM_FINDALL = async (dormID) => {
  const data = await Room.findAll({
    attributes: ['ROOMID', 'ROOMNO', 'FLOOR', 'BUILDINGID', 'ROOMTYPEID'],
    as: "ROOM"
    ,
    include: [{
      model: RoomStatus,
      as: "ALLROOMSTATUS",
      attributes: ['STATUS']
      ,
      where: {
        DORMID: dormID
      }
    }]
  })
  // console.log(data, "comtroller")
  return data;
}

module.exports = { ROOM_FINDALL }