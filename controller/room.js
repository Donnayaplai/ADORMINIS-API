const { DataTypes } = require("Sequelize");
const Room = require('../models/room');
const Building = require('../models/building');

Room.belongsTo(Building, {
  foreignKey: 'BUILDINGID'
});
Building.hasMany(Room);

const ROOM_FINDALL = async (dormID) => {
  const data = await Room.findAll({
    attributes: ['ROOMID', 'ROOMNO', 'FLOOR', 'STATUS', 'BUILDINGID', 'ROOMTYPEID'],
    as: "ROOM",
    include: [{
      model: Building,
      attributes: ['BUILDINGID', 'BUILDINGNAME', 'NUMOFFLOOR', 'DORMID'],
      as: "BUILDING",
      where: {
        DORMID: dormID
      }
    }]
  })
  // console.log(data, "controller")
  return data;
}

module.exports = { ROOM_FINDALL }