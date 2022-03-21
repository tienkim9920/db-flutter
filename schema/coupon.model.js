const Sequelize = require('sequelize')
const db = require('../config/database');
const CouponCategory = require('./coupon-category.model');
const User = require('./user.model');

const Coupon = db.define('coupon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    },
    promotion: {
        type: Sequelize.STRING
    },
    describe: {
        type: Sequelize.STRING
    },
    couponCategoryId: {
        type: Sequelize.INTEGER
    },
    userId: {
        type: Sequelize.INTEGER
    }
})

CouponCategory.hasMany(Coupon, { foreignKey: 'couponCategoryId' });
Coupon.belongsTo(CouponCategory);

User.hasMany(Coupon, { foreignKey: 'userId' });
Coupon.belongsTo(User);

// Coupon.sync().then(() => {
//     console.log('table created');
// });

module.exports = Coupon;