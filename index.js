const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require('./config/database');

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(cors());

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userAPI = require('./controller/user.controller');
const permissionAPI = require('./controller/permission.controller');
const productCategoryAPI = require('./controller/product-category.controller');
const productAPI = require('./controller/product.controller');
const orderAPI = require('./controller/order.controller');
const paymentAPI = require('./controller/payment.controller');
const couponAPI = require('./controller/coupon.controller');
const couponCategoryAPI = require('./controller/coupon-category.controller');
const orderDetailAPI = require('./controller/order-detail.controller');
const feedbackAPI = require('./controller/feedback.controller');

app.use('/api/user', userAPI);
app.use('/api/permission', permissionAPI);
app.use('/api/product-category', productCategoryAPI);
app.use('/api/product', productAPI);
app.use('/api/order', orderAPI);
app.use('/api/payment', paymentAPI);
app.use('/api/coupon', couponAPI);
app.use('/api/coupon-category', couponCategoryAPI);
app.use('/api/order-detail', orderDetailAPI);
app.use('/api/feedback', feedbackAPI);

app.listen(PORT, () => {
    console.log(`Listen server is port ${PORT}`);
})

