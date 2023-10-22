const Item = require('../models/item');
const Category = require('../models/category');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

// Display all products
exports.products_list = asyncHandler(async (req, res, next) => {
  const allProducts = await Item.find({});

  res.render('products_list', {products: allProducts})
})

// Display list of all Items for category.
exports.item_list = asyncHandler(async (req, res, next) => {
  const allItems = await Item.find({ category: req.params.id}).exec();

  res.render('items_list', { title: 'Item list', items_list: allItems })
});

// Display detail page for a specific Item
exports.item_detail = asyncHandler(async (req, res, next) => {
  const item = await Item.findOne({ _id: req.params.id })

  res.render('item_detail', { title: 'Item detail', itemDetail: item })
});

// Display Item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
  const categoriesList = await Category.find({}).exec();

  res.render('item_form', { categories: categoriesList })
});

// Handle Item create on POST.
exports.item_create_post = [
  body('item_name', 'Empty name').trim().isLength({ min: 1}).escape(),
  body('item_description', 'Dont leave the description empty').trim().isLength({ min: 1}).escape(),
  body('item_category', 'Select one category').trim().isLength({ min: 1}).escape(),
  body('item_price', 'Must be a integer number').trim().isInt().escape(),
  body('item_stock', 'Must be a integer number').trim().isInt().escape(),

  asyncHandler( async(req, res, next) => {
    const errors = validationResult(req);

    // Create a Item object with escaped and trimmed data.
    const item = new Item({
      name: req.body.item_name,
      description: req.body.item_description,
      category: req.body.item_category,
      price: req.body.item_price,
      stock: req.body.item_stock,
    })

    if (!errors.isEmpty()) {
      const categoriesList = await Category.find({}).exec();

      res.render('item_form', { errors: errors.array(), categories: categoriesList })
      return;
    } else {
      // Data from form is valid.
      await item.save();
      res.redirect(item.url)
    }
  }),
]
// Display Item delete form on GET.
exports.item_delete_get = asyncHandler(async (req, res, next) => {

});

// Handle Item delete on POST.
exports.item_delete_post = asyncHandler(async (req, res, next) => {

});

// Display Item update form on GET.
exports.item_update_get = asyncHandler(async (req, res, next) => {

});

// Handle Item update on POST.
exports.item_update_post = asyncHandler (async (req, res, next) => {

});

