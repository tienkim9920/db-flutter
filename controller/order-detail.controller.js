const express = require('express');
const OrderDetail = require('../schema/order-detail.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const orderDetail = await OrderDetail.findAll();

    res.json(orderDetail);

})

router.post('/', async (req, res) => {

    const orderDetail = await OrderDetail.create(req.body);

    res.json(orderDetail);

})

module.exports = router;