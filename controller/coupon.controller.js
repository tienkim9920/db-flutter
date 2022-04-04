const express = require('express');
const Coupon = require('../schema/coupon.model');
const User = require('../schema/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', async (req, res) => {

    const coupon = await Coupon.findAll();

    res.json(coupon);

})

router.post('/', async (req, res) => {

    const { userId } = req.body;

    const coupon = await Coupon.create(req.body);

    const user = await User.findOne({
        where: { id: userId }
    });

    user.score = parseInt(user.score) - 500;

    await user.save();

    var token = jwt.sign({ user: user }, 'hackermantuoicailollunnhahaga');

    return res.status(200).send({
        coupon,
        token
    });

})

module.exports = router;