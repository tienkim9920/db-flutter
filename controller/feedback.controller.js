const express = require('express');
const Feedback = require('../schema/feedback.model');
const User = require('../schema/user.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const feedback = await Feedback.findAll();

    res.json(feedback);

})

router.post('/', async (req, res) => {

    const feedback = await Feedback.create(req.body);

    res.json(feedback);

})

router.get('/:id', async (req, res) => {

    const feedback = await Feedback.findAll({
        where: { productId: req.params.id },
        include: [
            { model: User }
        ]
    });

    res.json(feedback);

})

module.exports = router;