'use strict'
//import required packages

var products = require('./app/products/model');
var config = require('./app/config')


var express = require('express');
var bodyParser = require('body-parser');

var app = new express();

var router = express.Router();

//using body-parser to get POST request data from request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

//middleware to use for all requests
router.use((req, res, next) => {
    console.log('Running middleware code');
    next();
});

router.get('/', (req, res) => {
  res.json({ message: 'This route doesn\'t exists!!!' });
});

app.use(config.app_route, router);



//start the server
app.listen(config.app_port);
console.log('Started API server on port ' + config.app_port);