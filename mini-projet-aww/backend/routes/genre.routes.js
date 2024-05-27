// routes/genreRoutes.js
import express from "express";
import {
  createGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
} from "../controllers/genre.controller.js";

const router = express.Router();

// Route to create a new genre
router.post("/create", createGenre);

// Route to get all genres
router.get("/genres", getAllGenres);

// Route to get a genre by ID
router.get("/genres/:id", getGenreById);

// Route to update a genre
router.put("/update/:id", updateGenre);

// Route to delete a genre
router.delete("/delete/:id", deleteGenre);

export default router;
