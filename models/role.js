const sequelize = require('../config/db');
const { DataTypes, Model } = require('sequelize');

class ROLE extends Model {}
ROLE.init(
  {
    ROLEID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    ROLENAME: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: 'ROLE',
  }
);

module.exports = ROLE;
