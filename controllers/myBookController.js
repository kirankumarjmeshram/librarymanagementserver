const MyBook = require('../models/MyBook');

exports.getMyBooks = async (req, res) => {
  const myBooks = await MyBook.find({ userId: req.userId }).populate('bookId');
  res.json(myBooks);
};

exports.addBook = async (req, res) => {
  const { bookId } = req.params;
  const exists = await MyBook.findOne({ userId: req.userId, bookId });
  if (exists) return res.status(400).json({ message: 'Book already added' });

  const myBook = await MyBook.create({ userId: req.userId, bookId });
  res.status(201).json(myBook);
};

exports.updateStatus = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  const updated = await MyBook.findOneAndUpdate(
    { userId: req.userId, bookId },
    { status },
    { new: true }
  );
  res.json(updated);
};

exports.updateRating = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;
  const updated = await MyBook.findOneAndUpdate(
    { userId: req.userId, bookId },
    { rating },
    { new: true }
  );
  res.json(updated);
};
