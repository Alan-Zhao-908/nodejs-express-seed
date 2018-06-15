'use strict'

var express = require('express');

var config = require('./config')

//setup router for API
var router = express.Router();

//middleware to use for all requests - this code will get executed for all routes
router.use((req, res, next) => {
  console.log('Running middleware code');
  next();
});

//Return Not Implemented (501) for root route (/)
router.route('/')
  .all((req, res) => {
    //res.json({ message: 'Root route doesn\'t exists!!!' });
    res.sendStatus(501);
  });

//Return Not Implemented (501) for default api route (/api)
router.route(config.app_route)
  .all((req, res) => {
    //res.json({ message: 'API route doesn\'t exists!!!' });
    res.sendStatus(501);
  });

module.exports = router;
