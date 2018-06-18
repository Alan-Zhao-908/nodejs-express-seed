'use strict'

var express = require('express');

var products = require('./model');
const helper = require('./helper');

//setup router for API
var router = express.Router();

//Define route name
const ROUTE_NAME = '/products';

//configure products route
router.route(ROUTE_NAME)
  //Post route to add new record
  .post((req, res) => {
    helper.saveNew(req, res);
  })

  //Get route to get all records
  .get((req, res) => {
    helper.getAll(req, res);
  });

router.route(ROUTE_NAME + '/:id')
  //Get route to get one item by id
  .get((req, res) => {
    helper.getById(req, res);
  })

  //PUT route to update a record by id
  .put((req, res) => {
    helper.updateById(req, res);
  })

  //DELETE route to delete record by id
  .delete((req, res) => {
    helper.deleteById(req, res);
  });

module.exports = router;
