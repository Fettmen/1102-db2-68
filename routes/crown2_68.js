var express = require('express');
var router = express.Router();

const Category_68 = require('../models/Category_68');
const Shop_68 = require('../models/Shop_68');

const crown2Controller_68 = require('../controllers/crown2Controller_68');

//CREATE
router.post('/product_68',crown2Controller_68.createProducts);

//READ
router.get('/', crown2Controller_68.getCategories);
router.get('/shop_68/:category',crown2Controller_68.getProductsByCategory);

module.exports = router;
