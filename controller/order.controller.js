const express = require('express');
const PatternOrderDetail = require('../pattern/order-detail.pattern');
const PatternOrder = require('../pattern/order.pattern');
const OrderDetail = require('../schema/order-detail.model');
const Order = require('../schema/order.model');
const Payment = require('../schema/payment.model');
const User = require('../schema/user.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const order = await Order.findAll();

    res.json(order);

})

router.post('/', async (req, res) => {

    const { address, phone, total, delivery, 
        pay, note, userId, paymentId, couponId, products } = req.body

    const patternOrder = new PatternOrder(address, phone, total, delivery, 
        pay, note, userId, paymentId, couponId);

    
    const order = await Order.create(patternOrder.toJson());

    products.forEach(async (element) => {
        const patternOrderDetail = new PatternOrderDetail(element.count, element.size, element.productId, order.id);
        orderDetail = await OrderDetail.create(patternOrderDetail.toJson());
    })

    const user = await User.findOne({
        where: { id: userId }
    });

    user.score = parseInt(user.score) + 500;

    await user.save();

    return res.status(200).send('Order successfully');
})

router.get('/:id', async (req, res) => {
    const order = await Order.findOne({
        where: { id: req.params.id },
        include: [{
            model: Payment
        }]
    });

    res.json(order);
})

router.get('/user/:id', async (req, res) => {
    const order = await Order.findAll({
        where: { userId: req.params.id },
        include: [{
            model: Payment
        }]
    });

    res.json(order);
})

module.exports = router;