const express = require('express');
const {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

const router = express.Router();

// Define routes
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.post('/add', addBook);
router.put('/books/:id/update', updateBook);
router.delete('/books/:id/delete', deleteBook);

module.exports = router;
