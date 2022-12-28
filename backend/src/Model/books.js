const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({

  title: String,
  description: String,
  author: String,
  date: String,
  time: String,
 
});

module.exports = mongoose.model("Books", BooksSchema);