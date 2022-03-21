const express = require('express');
const Feedback = require('../schema/feedback.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const feedback = await Feedback.findAll();

    res.json(feedback);

})

router.post('/', async (req, res) => {

    const feedback = await Feedback.create(req.body);

    res.json(feedback);

})

module.exports = router;