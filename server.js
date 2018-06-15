'use strict'

//import required packages

var config = require('./app/config')
var productsCtrl = require('./app/products/controller');
var defaultController = require('./app/default-controller');

var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

var router = express.Router();

//using body-parser to get POST request data from request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Configure the root route
app.use('/', defaultController);
//Adding products route
app.use(config.app_route, productsCtrl);


//start the server
app.listen(config.app_port);
console.log('Started API server on port ' + config.app_port);
