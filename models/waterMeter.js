const sequelize = require('../config/db');
const { DataTypes, Model } = require('sequelize');

class WATERMETER extends Model { }
WATERMETER.init(
    {
        WMETERID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        WATERNO: {
            type: DataTypes.DECIMAL,
        },
        METERDATE: {
            type: DataTypes.DATE,
        },
        ROOMID: {
            type: DataTypes.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: 'WATERMETER',
    }
);

module.exports = WATERMETER;
