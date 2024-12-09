const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publishYear: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive'],
  },
  genre: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema, 'books'); // Explicitly specify the collection as 'books'
