require('dotenv').config({path: './src/.env'});
const chalk = require('chalk');

const app = require('./app');
const sequelize = require('./models').sequelize;
const rest = require('./rest');

rest.bootstrap(app, sequelize);

app.listen(3000, function () {
  console.log(chalk.green('Server is running on port 3000\n\n'));
});
