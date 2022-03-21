const express = require('express');
const Payment = require('../schema/payment.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const payment = await Payment.findAll();

    res.json(payment);

})

router.post('/', async (req, res) => {

    const payment = await Payment.create(req.body);

    res.json(payment);

})

module.exports = router;