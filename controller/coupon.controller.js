const express = require('express');
const Coupon = require('../schema/coupon.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const coupon = await Coupon.findAll();

    res.json(coupon);

})

router.post('/', async (req, res) => {

    const coupon = await Coupon.create(req.body);

    res.json(coupon);

})

module.exports = router;