const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const PORT = process.env.PORT || 3000

const db = require('./config/database')

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userAPI = require('./controller/user.controller')
const permissionAPI = require('./controller/permission.controller')

app.use('/user', userAPI)
app.use('/permission', permissionAPI)

app.listen(PORT, () => {
    console.log(`Listen server is port ${PORT}`)
})

