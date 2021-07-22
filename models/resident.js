const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class RESIDENT extends Model {}

RESIDENT.init(
  {
    RESIDENTID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    FNAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LNAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TELNO: {
      type: DataTypes.STRING,
    },
    GENDER: {
      type: DataTypes.STRING,
    },
    EMAIL: {
      type: DataTypes.STRING,
    },
    PASSWORD: {
      type: DataTypes.STRING,
    },
    PERSONALCODE: {
      type: DataTypes.STRING,
    },
    IDCARDNO: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    sequelize,
    modelName: "RESIDENT",
  }
);

module.exports = RESIDENT;

// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");

// const RESIDENT = sequelize.define("RESIDENT", {
//   RESIDENTID: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//   },
//   FNAME: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   LNAME: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   TELNO: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   GENDER: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   EMAIL: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   PASSWORD: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   PERSONALCODE: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   IDCARDNO: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// module.exports = RESIDENT;
