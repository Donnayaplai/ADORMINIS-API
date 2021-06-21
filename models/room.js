const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class ROOM extends Model { }

ROOM.init({
    ROOMID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ROOMNO: {
        type: DataTypes.STRING
    },
    FLOOR: {
        type: DataTypes.INTEGER
    },
    BUILDINGID: {
        type: DataTypes.INTEGER
    },
    ROOMTYPEID: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'ROOM'
});

module.exports = ROOM;