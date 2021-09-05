const { DataTypes } = require("Sequelize");

const db = require('../config/db');

const RESIDENT_INFO = async (roomID) => {
  const residentInfo = await db.query(
    `SELECT u.USERID , u.FNAME , u.LNAME , u.TELNO , u.GENDER , u.IDCARDNO , u.EMAIL , u.PERSONALCODE ,
            r.RENTID , r.CHECKINDATE , r.CHECKOUTDATE , r.CONTRACTOFRENTID ,
            r2.ROOMID , r2.ROOMNO ,r2.FLOOR , r2.BUILDINGID , r2.ROOMTYPEID , r2.STATUS 
    FROM USER u JOIN RENT r 
    ON u.USERID = r.USERID
    JOIN ROOM r2
    ON r.ROOMID = r2.ROOMID
    WHERE r.ROOMID = ?
    AND r.CHECKOUTDATE IS NULL`,
    {
      replacements: [roomID],
      type: db.QueryTypes.SELECT
    }
  )
  // console.log(residentInfo, "<<<residentInfo")
  return residentInfo
}


// const User = require('../models/user');
// const Rent = require('../models/rent')

// User.hasMany(Rent, {
//   foreignKey: 'USERID',
//   as: "RENT"
// })

// const RESIDENT_INFO = async (roomID) => {
//   const data = await User.findAll({
//     include: [{
//       model: Rent,
//       attributes: ['CHECKINDATE', 'CHECKOUTDATE', 'CONTRACTOFRENTID', 'ROOMID'],
//       as: "RENT",
//       where: {
//         ROOMID: roomID,
//         CHECKOUTDATE: null
//       }
//     }]
//   });
//   // console.log(data, "controller")
//   return data;
// }

module.exports = { RESIDENT_INFO }