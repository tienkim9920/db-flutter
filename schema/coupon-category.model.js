const Sequelize = require('sequelize')
const db = require('../config/database')

const CouponCategory = db.define('coupon-category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
})

// CouponCategory.sync().then(() => {
//     console.log('table created');
// });

module.exports = CouponCategory;