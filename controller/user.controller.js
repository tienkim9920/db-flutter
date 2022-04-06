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

router.post('/edit', async (req, res) => {

    const { userId, fullname, email, address, phone, image } = req.body;

    const user = await User.findOne({
        where: { id: userId }
    });

    user.fullname = fullname;
    user.email = email;
    user.address = address;
    user.phone = phone;
    user.image = image;

    await user.save();

    var token = jwt.sign({ user: user }, 'hackermantuoicailollunnhahaga');
            
    return res.status(200).json(token);
})

// SignUp
router.post('/', async (req, res) => {

    const { email, username } = req.body;

    const checkingEmail = await User.findOne({
        where: { email } 
    });

    if (checkingEmail){
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

router.post('/signin', async (req, res) => {

    const { username, password } = req.body;
    
    const user = await User.findOne({
        where: { username }
    });

    if (!user){
        return res.status(400).send('Username is invalid');
    }else {
        const auth = await bcrypt.compare(password, user.password);

        if (!auth){
            return res.status(400).send('Password is invalid');
        }else {
            var token = jwt.sign({ user: user }, 'hackermantuoicailollunnhahaga');
            
            return res.status(200).json(token);
        }
    }
})

router.post('/password', async (req, res) => {
    const { userId, password, newPassword } = req.body;

    const user = await User.findOne({
        where: { id: userId }
    });

    const auth = await bcrypt.compare(password, user.password);

    if (!auth){
        return res.status(400).send('Password is invalid');
    }else {

        const passwordHash = await bcrypt.hash(newPassword, 10);
        user.password = passwordHash;
        await user.save();

        var token = jwt.sign({ user: user }, 'hackermantuoicailollunnhahaga');
        
        return res.status(200).json(token);
    }
})

module.exports = router;