const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const passportJwt = require('passport-jwt');
const passport = require('passport');
let models = require('./models');

let jwtOptions = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'markdev'
}

let strategy = new passportJwt.Strategy(jwtOptions, function (payload, next) {
  models.User.findOne({where: {id: payload.id}}).then(function (user) {
    next(null, user.dataValues);
  }).catch(function (err) {
    next(err, null);
  })
});
passport.use(strategy);

let app = express();
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.send({
    msg: 'server is running.',
    id: req.user.id
  })
});

app.post('/login', function (req, res) {
  let username = req.body.username,
    password = req.body.password;

  models.User.findOne({
    where: {
      username: username
    }
  }).then(function (user) {
    if (password === user.dataValues.password) {
      let token = jwt.sign({ id: user.dataValues.id }, jwtOptions.secretOrKey);
      res.send({ token });
    }
  }).catch(function (err) {
    res.send(err);
  })
});

app.listen(3000, function () {
  console.log('server is running on port 3000.');
});