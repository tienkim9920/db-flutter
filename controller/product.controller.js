const express = require('express');
const Product = require('../schema/product.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const productCategory = await Product.findAll();

    res.json(productCategory);

})

router.post('/', async (req, res) => {

    const productCategory = await Product.create(req.body);

    res.json(productCategory);

})

module.exports = router;