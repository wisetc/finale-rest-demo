const passportJwt = require('passport-jwt');
const passport = require('passport');

const models = require('./models').models;

let jwtOptions = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_OR_KEY
}

let strategy = new passportJwt.Strategy(jwtOptions, function (payload, done) {
  models.User.findOne({where: {id: payload.id}}).then(function (user) {
    if (user) {
      done(null, user.dataValues);
    } else {
      done('invalid token', null);
    }
  });
});
passport.use(strategy);

module.exports = {
  passport
}
