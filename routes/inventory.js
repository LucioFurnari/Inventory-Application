const express = require('express');
const router = express.Router();

// Require controller modules.
const item_controller = require('../controllers/itemController');
const category_controller = require('../controllers/categoryController');

/// CATEGORY ROUTES ///
router.get('/', category_controller.index);

// Get category list
router.get('/categories', category_controller.categories_list);

// GET item list for category.
router.get('/category/:id', item_controller.item_list);

/// ITEM ROUTES ///

// Get all Products.
router.get('/products', item_controller.products_list)

// GET item form.
router.get('/item/create', item_controller.item_create_get);

// GET detail for one Item.
router.get('/item/:id', item_controller.item_detail);

module.exports = router;