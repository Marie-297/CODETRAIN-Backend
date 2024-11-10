const bookList = require("../models/bookListModels");


exports.getAllBooks = async(req,res) => {
  try {
    const allBooks = await bookList.find();
    res.status(200).json({
      status: 'success',
      data: allBooks
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    })
  }
};

exports.getBookById = async(req,res) => {
 try {
  const book = await bookList.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: book
  })
 } catch (error) {
  res.status(400).json({
    status: 'fail',
    message: error.message,
  })
 }
};

exports.addBook = async(req,res) => {
  try {
    const newBook = await bookList.create(req.body);
    res.status(200).json({
      status:'success',
      data: newBook
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    })
  }
};

exports.updateBook = (req,res) => {
  const book = bookLists.find(bookItem => bookItem.id == req.params.id);
  res.json(book);
};

exports.deleteBook = (req,res) => {
  const book = bookLists.find(bookItem => bookItem.id == req.params.id);
  res.json(book);
};