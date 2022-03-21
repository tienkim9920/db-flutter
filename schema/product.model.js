const Sequelize = require('sequelize')
const db = require('../config/database')
const ProductCategory = require('./product-category.model')

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    describe: {
        type: Sequelize.STRING
    },
    productCategoryId: {
        type: Sequelize.INTEGER
    },
})

ProductCategory.hasMany(Product, { foreignKey: 'productCategoryId' })
Product.belongsTo(ProductCategory);

// Product.sync().then(() => {
//     console.log('table created');
// });

module.exports = Product;

