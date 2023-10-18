const Category = require('../models/category');
const Item = require('../models/item');
const asyncHandler = require('express-async-handler');

// Display Inventory info
exports.index = asyncHandler(async (req, res, next) => {
  const [numCategories, numItems] = await Promise.all([
    await Category.countDocuments({}).exec(),
    await Item.countDocuments({}).exec(),
  ]);

  res.render('index', { title: 'Inventory', numCategories, numItems })
});

// Display list of all Categories
exports.categories_list = asyncHandler(async (req, res, next) => {
  const allCategories = await Category.find().exec();

  res.render('categories_list', { title: 'Categories list', categories_list: allCategories })
});

// Display Category create form on GET
exports.category_create_get = asyncHandler(async (req, res, next) => {

});

// Handle Category create on POST
exports.category_create_post = asyncHandler(async (req, res, next) => {

});

// Display Category update form on GET
exports.category_update_get = asyncHandler(async (req, res, next) => {

});

// Handle Category update on POST
exports.category_update_post = asyncHandler(async (req, res, next) => {

});

// Display Category delete form on GET
exports.category_delete_get = asyncHandler(async (req, res, next) => {

});

// Handle Category delete on POST
exports.category_delete_post = asyncHandler(async (req, res, next) => {

});