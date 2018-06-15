'use strict'
//import required packages

var config = require('./app/config')
var productsCtrl = require('./app/products/controller');


var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

var router = express.Router();

//using body-parser to get POST request data from request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//middleware to use for all requests
router.use((req, res, next) => {
    console.log('Running middleware code');
    next();
});


router.get('/', (req, res) => {
  res.json({ message: 'Root route doesn\'t exists!!!' });
});
router.get(config.app_route, (req, res) => {
  res.json({ message: 'API route doesn\'t exists!!!' });
});
app.use('/', router);

app.use(config.app_route, productsCtrl);


//start the server
app.listen(config.app_port);
console.log('Started API server on port ' + config.app_port);
