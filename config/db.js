const Sequelize = require('sequelize');

const sequelize = new Sequelize('adorminis', 'admin', 'adorminis', {
    host: 'adorminis.cp1aphjaifpb.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mariadb'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
