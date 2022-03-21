const express = require('express');
const Permission = require('../schema/permission.model');
const User = require('../schema/user.model');

const router = express.Router();

router.get('/', async (req, res) => {

    const users = await User.findAll({
        include: [
            {
                model: Permission
            }
        ]
    });

    res.json(users);

})

router.post('/', async (req, res) => {

    const user = await User.create(req.body);

    res.json(user);

})

module.exports = router;