'use strict'

//import required packages

var config = require('./app/config')
const router = require('./app/router');

var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

//using body-parser to get POST request data from request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load all the routes for app
router(app);

//start the server
app.listen(config.app_port);
console.log('Started API server on port ' + config.app_port);
