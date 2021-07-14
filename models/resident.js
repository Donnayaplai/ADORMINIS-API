const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class RESIDENT extends Model { }

RESIDENT.init({
    RESIDENTID: {
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
    EMAIL: {
        type: DataTypes.STRING
    },
    PASSWORD: {
        type: DataTypes.STRING
    },
    PERSONALCODE: {
        type: DataTypes.STRING
    },
    IDCARDNO: {
        type: DataTypes.STRING
    }    
}, {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'RESIDENT'
});

module.exports = RESIDENT;