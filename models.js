const Sequelize = require('sequelize');

let sequelize = new Sequelize('sequelize-lab', 'root', '`1234567890-=', {
  host: '192.168.2.102',
  dialect: 'mysql'
});

exports.User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});
