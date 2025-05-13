const express = require("express");
const router = express.Router();
const {
  getMyBooks,
  addToMyBooks,
  updateStatus,
  updateRating,
} = require("../controllers/bookController");
const protect = require("../middleware/authMiddleware");

router.use(protect);
router.get("/", getMyBooks);
router.post("/:bookId", addToMyBooks);
router.patch("/:bookId/status", updateStatus);
router.patch("/:bookId/rating", updateRating);

module.exports = router;