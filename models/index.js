require('dotenv').config();
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

let sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',

  define: {
    freezeTableName: true,
    underscored: true
  }
});

let models = {}

fs.readdirSync(__dirname)
  .filter(file => file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

sequelize.sync({
  force: false
});

module.exports = {
  sequelize,
  models
};
