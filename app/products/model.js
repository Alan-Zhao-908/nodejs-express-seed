'use strict'

const mongodb = require('../helpers/mongodb');
const globals = require('../globals');

var schema = globals.mongoose.Schema;

var productsSchema = new schema({
  name: String,
});

module.exports = globals.mongoose.model('products', productsSchema);
