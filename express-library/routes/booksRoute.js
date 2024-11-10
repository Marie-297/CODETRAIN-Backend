const express = require('express');
const { getAllBooks, getBookById, deleteBook, updateBook, addBook } = require('../controller/booksController');

const router = express.Router();

router.route('/').get(getAllBooks).post(addBook)
router.route('/:id').get(getBookById).delete(deleteBook).patch(updateBook);

module.exports = router;