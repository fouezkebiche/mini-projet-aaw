import Book from "../models/book.model.js";

// Create a new book
export const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      isbn,
      publicationDate,
      genre,
      price,
      stockQuantity,
    } = req.body;

    // Create new book instance
    const newBook = new Book({
      title,
      author,
      isbn,
      publicationDate,
      genre,
      price,
      stockQuantity,
    });

    // Save the book to the database
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

// Retrieve specific books based on criteria
// Example route: GET /api/books?title=Some%20Title&author=Author%20Name&genre=Genre
export const getBooksByCriteria = async (req, res) => {
  try {
    const query = req.query;
    const books = await Book.find(query);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    // Find the book by ID and update its fields
    const updatedBook = await Book.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the book by ID and delete it
    await Book.findByIdAndDelete(id);

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search and filter books
export const searchBooks = async (req, res) => {
  try {
    const { title, author, genre, publicationDate } = req.query;

    // Build the query based on provided criteria
    const query = {};
    if (title) query.title = title;
    if (author) query.author = author;
    if (genre) query.genre = genre;
    if (publicationDate) query.publicationDate = publicationDate;

    // Find books matching the query
    const books = await Book.find(query);

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update stock quantity of a book
export const updateStockQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    // Find the book by ID
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Update stock quantity
    const updatedStockQuantity = book.stockQuantity - quantity;

    if (updatedStockQuantity < 0) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    // Update the book with the new stock quantity
    book.stockQuantity = updatedStockQuantity;
    const updatedBook = await book.save();

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
