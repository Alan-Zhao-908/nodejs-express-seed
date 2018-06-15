'use strict'

var config = require('./config')

var productsCtrl = require('./products/controller');
var defaultController = require('./default-controller');

//setup router for API
module.exports = function(app) {
  //Configure the root route
  app.use('/', defaultController);
  //Adding products route
  app.use(config.app_route, productsCtrl);
};
