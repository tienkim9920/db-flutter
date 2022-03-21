const Sequelize = require('sequelize')
const db = require('../config/database');
const Order = require('./order.model');
const Product = require('./product.model');

const OrderDetail = db.define('order-detail', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    count: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.STRING
    },
    orderId: {
        type: Sequelize.INTEGER
    },
    productId: {
        type: Sequelize.INTEGER
    },
})

Order.hasMany(OrderDetail, { foreignKey: 'orderId' });
OrderDetail.belongsTo(Order);

Product.hasMany(OrderDetail, { foreignKey: 'productId' });
OrderDetail.belongsTo(Product);

// OrderDetail.sync().then(() => {
//     console.log('table created');
// });

module.exports = OrderDetail;