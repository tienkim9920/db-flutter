const Sequelize = require('sequelize')
const db = require('../config/database');
const Product = require('./product.model');
const User = require('./user.model');

const Feedback = db.define('feedback', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: Sequelize.STRING
    },
    star: {
        type: Sequelize.STRING
    },
    productId: {
        type: Sequelize.INTEGER
    },
    userId: {
        type: Sequelize.INTEGER
    },
})

Product.hasMany(Feedback, { foreignKey: 'productId' });
Feedback.belongsTo(Product);

User.hasMany(Feedback, { foreignKey: 'userId' });
Feedback.belongsTo(User);

// Feedback.sync().then(() => {
//     console.log('table created');
// });

module.exports = Feedback;
