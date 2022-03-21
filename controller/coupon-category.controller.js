const express = require('express');
const CouponCategory = require('../schema/coupon-category.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const couponCategory = await CouponCategory.findAll();

    res.json(couponCategory);

})

router.post('/', async (req, res) => {

    const couponCategory = await CouponCategory.create(req.body);

    res.json(couponCategory);

})

module.exports = router;