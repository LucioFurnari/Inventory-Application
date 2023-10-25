const Category = require('../models/category');
const Item = require('../models/item');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

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

// Display list of all Items for category.
exports.item_list = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({ category: req.params.id}).exec();

  res.render('category_detail', { title: 'Item list', items_list: allItems })
});

// Display Category create form on GET
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.render('category_form', {})
});

// Handle Category create on POST
exports.category_create_post = [
  body('category_name', 'Empty name').trim().isLength({ min: 1}).escape(),
  body('category_description', 'The description should not be empty').trim().isLength({ min: 1}).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const category = new Category({
      name: req.body.category_name,
      description: req.body.category_description,
    })

    if (!errors.isEmpty()) {
      res.render('category_form', {errors: errors.array()})
      return;
    } else {
      // Data from form is valid.
      await category.save();
      res.redirect(category.url)
    }
  }),
]

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