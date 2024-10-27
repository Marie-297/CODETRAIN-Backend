const express = require('express');
const { getAllBooks, getBookById, deleteBook, updateBook, addBook } = require('../controller/booksController');

const router = express.Router();

router.route('/books').get(getAllBooks).post(addBook)
router.route('/books/:id').get(getBookById).delete(deleteBook).patch(updateBook);

module.exports = router;