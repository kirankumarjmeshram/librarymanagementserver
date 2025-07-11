const express = require('express');
const router = express.Router();
const {
  getMyBooks,
  addBook,
  updateStatus,
  updateRating
} = require('../controllers/myBookController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getMyBooks);
router.post('/:bookId', auth, addBook);
router.patch('/:bookId/status', auth, updateStatus);
router.patch('/:bookId/rating', auth, updateRating);

module.exports = router;
