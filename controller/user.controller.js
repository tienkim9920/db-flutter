const express = require('express');
const Permission = require('../schema/permission.model');
const User = require('../schema/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    const { email, username } = req.body;

    const checkingEmail = await User.findOne({
        where: { email } 
    });

    if (checkingEmail){
        console.log("123");
        return res.status(400).send('Email has already been used');
    }else {
        const checkingUsername = await User.findOne({
            where: { username }
        });

        if (checkingUsername){
            return res.status(400).send('Username has already been used');
        }else{
            const passwordHash = await bcrypt.hash(req.body.password, 10);
            req.body.password = passwordHash;

            await User.create(req.body)

            return res.status(200).send('Register successfully');
        }
    }

})

module.exports = router;