const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ books });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error fetching books" });
  }
};


const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  try {
    const { name, author, description, price, available, image } = req.body;
    const book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
    return res.status(201).json({ book });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error adding book" });
  }
};

const updateBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error updating book" });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndRemove(id);
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error deleting book" });
  }
};


exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
