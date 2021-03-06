const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class ROOM_TYPE extends Model { }

ROOM_TYPE.init({
    ROOMTYPEID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ROOMNAME: {
        type: DataTypes.STRING
    },
    PRICE: {
        type: DataTypes.DECIMAL
    }
}, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'ROOM_TYPE'
});

module.exports = ROOM_TYPE;