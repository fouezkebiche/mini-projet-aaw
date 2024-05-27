// routes/authorRoutes.js
import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from "../controllers/author.controller.js";

const router = express.Router();

// Route to create a new author
router.post("/create", createAuthor);

// Route to get all authors
router.get("/authors", getAllAuthors);

// Route to get an author by ID
router.get("/authors/:id", getAuthorById);

// Route to update an author
router.put("/update/:id", updateAuthor);

// Route to delete an author
router.delete("/authors/:id", deleteAuthor);

export default router;
