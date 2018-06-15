var express = require('express');

var products = require('./model');

//setup router for API
var router = express.Router();

//configure products route
router.route('/products')
  .post((req, res) => {
    var productsObj = new products();
    productsObj.name = req.body.name;

    productsObj.save((err) => {
      if (err)
        res.send(err);

      res.json({ message: 'Product ' + productsObj.name + ' created!' });
    });
  })

  .get((req, res) => {
    products.find((err, products) => {
      if (err)
        res.send(err);

      res.json(products);
    })
  });

router.route('/products/:productid')
  .get((req, res) => {
    products.findById(req.params.productid, (err, product) => {
      if(err)
        res.send(err);

      res.json(product);
    });
  })

  .put((req, res) => {
    products.findById(req.params.productid, (err, product) => {
      if(err)
        res.send(err);

      product.name = req.body.name;

      product.save((err) => {
        if(err)
          res.send(err);

        res.json({ message: 'Product ' + req.params.productid + ' updated to ' + product.name + '!'});
      });
    })
  })

  .delete((req, res) => {
    products.remove({
      _id: req.params.productid
    }, (err, product) => {
      if(err)
        res.send(err);

      res.json({ message: req.params.productid + ' deleted successfully!' })
    });
  });

module.exports = router;
