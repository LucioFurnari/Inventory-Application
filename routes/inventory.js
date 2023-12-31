const express = require('express');
const router = express.Router();

// Require controller modules.
const item_controller = require('../controllers/itemController');
const category_controller = require('../controllers/categoryController');

/// CATEGORY ROUTES ///
router.get('/', category_controller.index);

// Get category list
router.get('/categories', category_controller.categories_list);

// GET category form.
router.get('/category/create', category_controller.category_create_get);

// POST category form.
router.post('/category/create', category_controller.category_create_post);

// GET item list for Category.
router.get('/category/:id', category_controller.item_list);

// GET update form for Category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST update Category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET delete form for Category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST delete Category.
router.post('/category/:id/delete', category_controller.category_delete_post);

/// ITEM ROUTES ///

// Get all Products.
router.get('/products', item_controller.products_list)

// GET item form.
router.get('/item/create', item_controller.item_create_get);

// POST item create
router.post('/item/create', item_controller.item_create_post);

// GET detail for one Item.
router.get('/item/:id', item_controller.item_detail);

// GET update form for Item.
router.get('/item/:id/update', item_controller.item_update_get);

// POST update form for Item.
router.post('/item/:id/update', item_controller.item_update_post);

// GET delete form for Item.
router.get('/item/:id/delete', item_controller.item_delete_get);

// POST delete Item.
router.post('/item/:id/delete', item_controller.item_delete_post);

module.exports = router;