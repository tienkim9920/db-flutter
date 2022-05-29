const express = require('express');
const OrderDetail = require('../schema/order-detail.model');
const Product = require('../schema/product.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const orderDetail = await OrderDetail.findAll();

    res.json(orderDetail);

})

router.post('/', async (req, res) => {

    const orderDetail = await OrderDetail.create(req.body);

    res.json(orderDetail);

})

router.get('/:orderId', async (req, res) => {
    const orderDetail = await OrderDetail.findAll({
        where: { orderId: req.params.orderId },
        include: [
            { model: Product }
        ]
    })

    try {
        res.json(orderDetail);
    }catch (err) {
        res.json(err)
    }
})

module.exports = router;