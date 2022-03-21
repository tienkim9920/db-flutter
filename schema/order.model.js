const Sequelize = require('sequelize')
const db = require('../config/database');
const Coupon = require('./coupon.model');
const Payment = require('./payment.model');
const User = require('./user.model');

const Order = db.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    address: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    total: {
        type: Sequelize.STRING
    },
    delivery: {
        type: Sequelize.STRING
    },
    pay: {
        type: Sequelize.BOOLEAN
    },
    note: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER
    },
    paymentId: {
        type: Sequelize.INTEGER
    },
    couponId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

User.hasMany(Order, { foreignKey: 'userId' } );
Order.belongsTo(User);

Payment.hasMany(Order, { foreignKey: 'paymentId' });
Order.belongsTo(Payment);

Coupon.hasOne(Order, { foreignKey: 'couponId' });
Order.belongsTo(Coupon);

// Order.sync().then(() => {
//     console.log('table created');
// });

module.exports = Order;

