const express = require('express');
const Product = require('../schema/product.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const product = await Product.findAll();

    res.json(product);

})

router.post('/', async (req, res) => {

    const product = await Product.create(req.body);

    res.json(product);

})

router.get('/banner', async (req, res) => {

    // let limit = 10;
    // let offset = 0 + (req.body.page - 1) * limit;

    const product = await Product.findAll({
        offset: 0,
        limit: 4
    });

    return res.status(200).json(product);

})

router.get('/category', async (req, res) => {

    const { category } = req.query;

    return res.status(200).json(category);

})

router.get('/:id', async (req, res) => {
    
    const { id } = req.params

    const product = await Product.findOne({
        where: { id }
    });

    return res.status(200).json(product);

})

module.exports = router;