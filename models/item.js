const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 100 },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
})

// Virtual for Item url
ItemSchema.virtual('url').get(function () {
  return `/items/${this._id}`
})

// Export model
module.exports = mongoose.model('Item', ItemSchema);