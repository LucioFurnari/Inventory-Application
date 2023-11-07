#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://luciofurnari99:oTKnMyIEDWybrs7Y@cluster0.g8fy0b4.mongodb.net/inventory_app?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Item = require('./models/item');
const Category = require('./models/category');
let categoryForITem = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories(); 
  await createItems()
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function createCategory (index, categoryName, categoryDescription) {
  const category = new Category({
    name: categoryName,
    description: categoryDescription
  })
  categoryForITem[index] = category;
  await category.save();
  console.log('Category created');
}

async function createItem (itemName, itemDescription, itemPrice, itemStock) {
  const item = new Item({
    name: itemName,
    description: itemDescription,
    category: categoryForITem[0],
    price: itemPrice,
    stock: itemStock
  })
  await item.save();
  console.log('Item created');
}

async function createCategories () {
  await Promise.all([
    createCategory(0,'Cakes', 'Category for cakes'),
    createCategory(1,'IceCreams', 'Category for Ice creams'),
    createCategory(2,'Chocolates', 'Category for chocolates'),
  ])
}

async function createItems () {
  await Promise.all([
    createItem('Chocolate cake', 'A delicious chocolate cake', 120, 20),
    createItem('Strawberry cake', 'A pink strawberry cake with extra strawberries', 75, 10),
    createItem('Lemon pie', 'A delicious lemon pie', 75, 10),
  ])
}