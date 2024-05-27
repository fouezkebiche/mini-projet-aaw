import express from "express";
import {
  createBook,
  getAllBooks,
  getBooksByCriteria,
  updateBook,
  deleteBook,
  searchBooks,
  updateStockQuantity,
} from "../controllers/book.controller.js";

const router = express.Router();

// Route to create a new book
router.post("/create", createBook);

// Route to get all books
router.get("/", getAllBooks);

// Route to get books by criteria
router.get("/books/search", getBooksByCriteria);

// Route to update a book
router.put("/update/:id", updateBook);

// Route to delete a book
router.delete("/delete/:id", deleteBook);

// // Route to search and filter books
// router.get("/books/search", searchBooks);

// Route to update stock quantity of a book
router.patch("/updatestock/:id/", updateStockQuantity);

export default router;
