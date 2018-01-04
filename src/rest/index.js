require('dotenv').config({path: './src/.env'});
const finale = require('finale-rest');
const kebabCase = require('lodash').kebabCase;

const passport = require('../provider').passport;
const models = require('../models').models;

const authMiddleware = {
  all: {
    auth: function (req, res, context) {
      passport.authenticate('jwt', { session: false })(req, res, context.continue);
    }
  }
}

let rest = {}

rest.bootstrap = function (app, sequelize) {
  finale.initialize({
    app,
    sequelize
  });

  rest.finale = finale;

  for (let k in models) {
    let prefix = '/';
    modelName = k.endsWith('s') ? kebabCase(k) : kebabCase(k) + 's';
    finale.resource({
      model: models[k],
      endpoints: [prefix + modelName, prefix + modelName + '/:id']
    }).use(authMiddleware);
  }

  return finale;
}

module.exports = rest;
