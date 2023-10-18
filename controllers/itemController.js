const Item = require('../models/item');
const asyncHandler = require('express-async-handler');

// Display list of all Items.
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

});

// Handle Item create on POST.
exports.item_create_post = asyncHandler(async (req, res, next) => {

});

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

