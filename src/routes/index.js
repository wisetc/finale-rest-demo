const router = require('express').Router();
const jwt = require('jsonwebtoken');

const models = require('../models').models;
const passport = require('../provider').passport;

router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
  res.send({
    msg: 'server is running.',
    id: req.user.id
  })
});

router.post('/login', function (req, res) {
  let username = req.body.username,
    password = req.body.password;

  models.User.findOne({
    where: {
      username: username
    }
  }).then(function (user) {
    if (password === user.get('password')) {
      let token = jwt.sign({ id: user.get('id') }, process.env.JWT_SECRET_OR_KEY);
      res.send({ token });
    } else {
	  res.status(400).send({code: -1, msg: 'username or password didn\'t match.'});
	}
  }).catch(function (err) {
    res.status(400).send({ code: -1, msg: 'no such username' });
  })
});

module.exports = router;
