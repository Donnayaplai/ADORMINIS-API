const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class ALLROOMSTATUS extends Model { }

ALLROOMSTATUS.init({
    ROOMID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    DORMID: {
        type: DataTypes.INTEGER
    },
    ROOMNO: {
        type: DataTypes.STRING
    },
    STATUS: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'ALLROOMSTATUS'
});

module.exports = ALLROOMSTATUS;