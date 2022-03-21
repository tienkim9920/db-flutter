const Sequelize = require('sequelize')
const db = require('../config/database')

const Payment = db.define('payment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
})

// Payment.sync().then(() => {
//     console.log('table created');
// });

module.exports = Payment;