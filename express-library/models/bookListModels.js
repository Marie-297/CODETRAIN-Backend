const mongoose = require('mongoose');

const bookListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  }
},
{
  timestamps: true,
}
);

const bookList = mongoose.model('bookList', bookListSchema);

module.exports = bookList;