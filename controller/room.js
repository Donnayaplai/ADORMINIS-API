require('Sequelize');
const Building = require('../models/building');
const Room = require('../models/room');

// Room.belongsTo(Building, {
//   foreignKey: 'BUILDINGID'
// });
// Building.hasMany(Room);

// const ROOM_FINDALL = async (dormID) => {
//   const data = await Room.findAll({
//     attributes: ['ROOMID', 'ROOMNO', 'FLOOR', 'STATUS', 'BUILDINGID', 'ROOMTYPEID'],
//     as: "ROOM",
//     include: [{
//       model: Building,
//       attributes: ['BUILDINGID', 'BUILDINGNAME', 'NUMOFFLOOR', 'DORMID'],
//       as: "BUILDING",
//       where: {
//         DORMID: dormID
//       }
//     }]
//   })
//   return data;
// }

//find buildings form dormID >>> find rooms from buildingID

const FIND_BUILDINGS = async (dormID) => {
  const buildings = await Building.findAll({
    where: {
      DORMID: dormID,
    },
  });
  return buildings;
};

const FIND_ROOMS = async (buildingID) => {
  const rooms = await Room.findAll({
    where: {
      BUILDINGID: buildingID,
    },
  });
  return rooms;
};

module.exports = { FIND_BUILDINGS, FIND_ROOMS };
