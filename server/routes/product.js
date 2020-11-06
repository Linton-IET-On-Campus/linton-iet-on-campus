const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const imgOne = req.body.imgOne;
  const imgTwo = req.body.imgTwo;
  const label = req.body.label;
  const discount = req.body.discount;
  const title = req.body.title;
  const discountPrice = req.body.discountPrice;
  const originalPrice = req.body.originalPrice;
  const details = req.body.details;
  const description = req.body.description;
  const stock = req.body.stock;
  const seller = req.body.seller;
  const whatsapp = req.body.whatsapp;

  const newProduct = new Product({
    
    imgOne,
    imgTwo,
    label,
    discount,
    title,
    discountPrice,
    originalPrice,
    details,
    description,
    stock,
    seller,
    whatsapp
   
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        product.imgOne = req.body.imgOne;
        product.imgTwo = req.body.imgTwo;
        product.label = req.body.label;
        product.discount = req.body.discount;
        product.title = req.body.title;
        product.discountPrice = req.body.discountPrice;
        product.originalPrice = req.body.originalPrice;
        product.details = req.body.details;
        product.description = req.body.description;
        product.stock = req.body.stock;
        product.seller = req.body.seller;
        product.whatsapp = req.body.whatsapp;

        product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;