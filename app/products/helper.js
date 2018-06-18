'use strict'

var products = require('./model');

/**
 * Function to save new record
 * @param req
 * @param res
 */
function saveNew(req, res) {
  var productsObj = new products();
  productsObj.name = req.body.name;

  productsObj.save((err) => {
    if (err)
      res.send(err);

    res.json({ message: 'Product ' + productsObj.name + ' created!' });
  });
};

/**
 * Function to get all records
 * @param req
 * @param res
 */
function getAll(req, res) {
  products.find((err, products) => {
    if (err)
      res.send(err);

    res.json(products);
  });
};

/**
 * Function to get a record by id
 * @param req
 * @param res
 */
function getById(req, res) {
  products.findById(req.params.id, (err, product) => {
    if(err)
      res.send(err);

    res.json(product);
  });
};

/**
 * Function to update a record by id
 * @param req
 * @param res
 */
function updateById(req, res) {
  products.findById(req.params.id, (err, product) => {
    if(err)
      res.send(err);

    product.name = req.body.name;

    product.save((err) => {
      if(err)
        res.send(err);

      res.json({ message: 'Product ' + req.params.id + ' updated to ' + product.name + '!'});
    });
  })
}

/**
 * Function to delete a record by id
 * @param req
 * @param res
 */
function deleteById(req, res) {
  products.remove({
    _id: req.params.id
  }, (err, product) => {
    if(err)
      res.send(err);

    res.json({ message: req.params.id + ' deleted successfully!' })
  });
}

module.exports = {
  saveNew: saveNew,
  getAll: getAll,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById
};
