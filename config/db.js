const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "adorminis",
  "admin",
  "adorminis",
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASS,
  {
    host: "adorminis.cp1aphjaifpb.ap-southeast-1.rds.amazonaws.com",
    dialect: "mariadb",
  }
);
sequelize.sync();
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
