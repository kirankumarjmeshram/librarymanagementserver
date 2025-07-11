const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};
