const bookLists = require('../public/bookList');

exports.getAllBooks = (req,res) => {
  res.json(bookLists)
};

exports.getBookById = (req,res) => {
  const book = bookLists.find(bookItem => bookItem.id == req.params.id);
  res.json(book);
};

exports.addBook = (req,res) => {
  res.json(`New Book Added: (${JSON.stringify(req.body)})`)
};

exports.updateBook = (req,res) => {
  const book = bookLists.find(bookItem => bookItem.id == req.params.id);
  res.json(book);
};

exports.deleteBook = (req,res) => {
  const book = bookLists.find(bookItem => bookItem.id == req.params.id);
  res.json(book);
};