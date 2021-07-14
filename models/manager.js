const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class MANAGER extends Model { }

MANAGER.init({
    MANAGERID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    FNAME: {
        type: DataTypes.STRING
    },
    LNAME: {
        type: DataTypes.STRING
    },
    TELNO: {
        type: DataTypes.STRING
    },
    GENDER: {
        type: DataTypes.STRING
    },
    ROLE: {
        type: DataTypes.STRING
    },
    EMAIL: {
        type: DataTypes.STRING
    },
    PASSWORD: {
        type: DataTypes.STRING
    },
    DORMID: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'MANAGER'
});

module.exports = MANAGER;