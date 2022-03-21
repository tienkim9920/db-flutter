const express = require('express');
const ProductCategory = require('../schema/product-category.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const productCategory = await ProductCategory.findAll();

    res.json(productCategory);

})

router.post('/', async (req, res) => {

    const productCategory = await ProductCategory.create(req.body);

    res.json(productCategory);

})

module.exports = router;