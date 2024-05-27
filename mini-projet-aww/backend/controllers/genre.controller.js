// controllers/genreController.js
import Genre from "../models/genre.model.js";

// Create a new genre
export const createGenre = async (req, res) => {
  try {
    const { name } = req.body;

    // Create new genre instance
    const newGenre = new Genre({ name });

    // Save the genre to the database
    const savedGenre = await newGenre.save();

    res.status(201).json(savedGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all genres
export const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve a genre by ID
export const getGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findById(id);
    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }
    res.json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing genre
export const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Find the genre by ID and update its name
    const updatedGenre = await Genre.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    res.json(updatedGenre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a genre by ID
export const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the genre
    await Genre.findByIdAndDelete(id);

    res.json({ message: "Genre deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
