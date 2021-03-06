const Sequelize = require('sequelize')
const db = require('../config/database')

const Permission = db.define('permission', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
})

// Permission.sync().then(() => {
//     console.log('table created');
// });

module.exports = Permission;