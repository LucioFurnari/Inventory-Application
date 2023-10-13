const express = require('express');
const router = express.Router();

// Require controller modules.
const item_controller = require('../controllers/itemController');


/// ITEM ROUTES ///

// GET item list for category.
router.get('/category/:id/items', item_controller.item_list);

// GET detail for one Item.
router.get('/category/:id/item/:id', item_controller.item_detail);