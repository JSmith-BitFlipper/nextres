var util = require('./util');
var Model = require('../models/model');
var model = new Model();

exports.index = function(req, res) {
  util.registerContent('home');
  res.render('base.html', {'user': req.user, 'permissions': req.permissions});
}

exports.home = function(req, res) {
  util.registerContent('home');
  res.render('base.html', {'user': req.user, 'permissions': req.permissions});
}
