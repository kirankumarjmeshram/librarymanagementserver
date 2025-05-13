const Book = require("../models/Book");
const MyBook = require("../models/MyBook");

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.getMyBooks = async (req, res) => {
  const books = await MyBook.find({ userId: req.user.id }).populate("bookId");
  res.json(books);
};

exports.addToMyBooks = async (req, res) => {
  const { bookId } = req.params;
  const existing = await MyBook.findOne({ userId: req.user.id, bookId });
  if (existing) return res.status(400).json({ message: "Already added" });
  const entry = await MyBook.create({ userId: req.user.id, bookId });
  res.status(201).json(entry);
};

exports.updateStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  const updated = await MyBook.findOneAndUpdate(
    { userId: req.user.id, bookId },
    { status },
    { new: true }
  );
  res.json(updated);
};

exports.updateRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;
  const updated = await MyBook.findOneAndUpdate(
    { userId: req.user.id, bookId },
    { rating },
    { new: true }
  );
  res.json(updated);
};