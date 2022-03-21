const express = require('express');
const Permission = require('../schema/permission.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const permission = await Permission.findAll();

    res.json(permission);

})

router.post('/', async (req, res) => {

    const permission = await Permission.create(req.body);

    res.json(permission);

})

module.exports = router;