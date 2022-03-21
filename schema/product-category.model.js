const Sequelize = require('sequelize')
const db = require('../config/database')

const ProductCategory = db.define('product-category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
})

// ProductCategory.sync().then(() => {
//     console.log('table created');
// });

module.exports = ProductCategory;