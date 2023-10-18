const express = require('express');
const router = express.Router();

// Require controller modules.
const item_controller = require('../controllers/itemController');
const category_controller = require('../controllers/categoryController');

/// CATEGORY ROUTES ///
router.get('/', category_controller.categories_list);

// GET item list for category.
router.get('/category/:id', item_controller.item_list);

/// ITEM ROUTES ///

// GET detail for one Item.
router.get('/item/:id', item_controller.item_detail);

module.exports = router;