const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const passport = require('./provider').passport;

const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);

module.exports = app;
