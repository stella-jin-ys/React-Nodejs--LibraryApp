const router = require("express").Router();
const Book = require("../models/Book");
const Category = require("../models/Book");

// Create book
router.post("/", async (req, res) => {
  const newBook = await new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get books
router.get("/", async (req, res) => {
  const categoryName = req.query.category;
  const type = req.query.type;
  try {
    let books;
    if (categoryId) {
      books = await Book.find({ categoryId });
    } else if (type) {
      books = await Book.find({ type });
    } else {
      books = await Book.find();
    }
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
