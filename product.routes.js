const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();
router.get('/products', (request, response) => {
   return response.json(products);
});

router.get('/products/:brand', blockSpecialBrand, (request, response) => {
   const { brand } = request.params;

   const filteredProducts = products.filter(product => product.brand === brand);

   response.json(filteredProducts);
});

router.get('/products/id/:id', blockSpecialBrand, (request, response) => {
   let id = request?.params?.id;

   const filteredProducts = products.filter(product => product.id == id);

   response.json(filteredProducts);
});

router.get('/productswitherror', (request, response) => {
   let err = new Error("processing error ")
   err.statusCode = 400
   throw err
});

module.exports = router;