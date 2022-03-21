const express = require('express');
const Order = require('../schema/order.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const order = await Order.findAll();

    res.json(order);

})

router.post('/', async (req, res) => {

    const order = await Order.create(req.body);

    res.json(order);

})

module.exports = router;