const express = require('express');
const Sequelize = require('sequelize');
const ProductCategory = require('../schema/product-category.model');
const Product = require('../schema/product.model');
const db = require('../config/database');

const router = express.Router();

router.get('/', async (req, res) => {

    const product = await Product.findAll({
        include: [{
            model: ProductCategory
        }]
    });

    res.json(product);

})

router.post('/', async (req, res) => {

    const product = await Product.create(req.body);

    res.json(product);

})

router.get('/banner', async (req, res) => {

    // let limit = 10;
    // let offset = 0 + (req.body.page - 1) * limit;

    const product = await Product.findAll({
        offset: 0,
        limit: 4,
        include: [{
            model: ProductCategory
        }]
    });

    return res.status(200).json(product);

})

router.get('/category', async (req, res) => {

    const { category } = req.query;

    const product = await Product.findAll({
        where: { productCategoryId: category }
    });

    return res.status(200).json(product);

})

// count group by
router.get('/category/count', async (req, res) => {

    const countProduct = await db.query(
        'SELECT "product-category"."id" AS "id", "product-category"."name" AS "name", COUNT("product-category"."id") AS "countProduct" FROM "products" AS "product" LEFT OUTER JOIN "product-categories" AS "product-category" ON "product"."productCategoryId" = "product-category"."id" GROUP BY "product-category"."id"',
        { type: Sequelize.QueryTypes.SELECT });

    return res.status(200).json(countProduct);

    // Product.findAll({
    //     group: ['productCategoryId],
    //     attributes: ['productCategoryId', [Sequelize.fn('COUNT', Sequelize.col('"product-category"."id"')), 'countProduct']],
    //     include: [
    //         { 
    //             attributes: [], 
    //             model: ProductCategory 
    //         }
    //     ],
    // }).then(function (tags) {
    //     return res.status(200).json(tags);
    // });
})

router.get('/search', async (req, res) => {

    const { keyword } = req.query;

    const product = await Product.findAll({
        where: {
            name: {
                $like: `%${keyword}%`
            }
        },
        include: [{ 
            model: ProductCategory 
        }]
    })
    return res.status(200).json(product);
})

router.get('/:id', async (req, res) => {

    const { id } = req.params

    const product = await Product.findOne({
        where: { id },
        include: [{
            model: ProductCategory
        }]
    });

    return res.status(200).json(product);

})

module.exports = router;