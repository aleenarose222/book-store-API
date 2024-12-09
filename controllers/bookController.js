const Book = require('../models/Book');

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching books' });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: 'Invalid book ID' });
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, publishYear, price, genre } = req.body;
    if (!title || !author || publishYear == null || price == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newBook = new Book({ title, author, publishYear, price, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Error adding book' });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const updates = req.body;
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: 'Error updating book' });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting book' });
  }
};
