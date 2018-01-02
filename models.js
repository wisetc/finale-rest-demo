require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.sync({
  force: false
});

let models = {}

models.User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

models.Inspecting = sequelize.define('Inspecting', {
  inspecting_batch: Sequelize.STRING,
  material_id: Sequelize.INTEGER,
  auditing_man: Sequelize.STRING,
  auditing_date: Sequelize.DATE,
  status: Sequelize.ENUM('1', '2', '3', '-2', '-3'),
  remark: Sequelize.STRING,
  material_batch_no: Sequelize.STRING,
  approve_suggestion: Sequelize.STRING
});

module.exports = {
  sequelize,
  models
};
