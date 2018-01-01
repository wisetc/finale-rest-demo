require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.sync({
  force: false
});

exports.User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});
