const { DataTypes } = require("Sequelize");
const Room = require('../models/room');
const RoomStatus = require('../models/roomStatus');

Room.hasMany(RoomStatus, { foreignKey: 'ROOMID' })

exports.findAll = (dormID) => {

  Room.findAll({
    attributes: ['ROOMID', 'ROOMNO', 'FLOOR', 'BUILDINGID', 'ROOMTYPEID'],
    include: [{
      model: RoomStatus,
      attributes: ['STATUS'],
      where: {
        DORMID: dormID
      }
    }]
  })
    .then(data => {
      return data;
    })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message
    //   });
    // });
};