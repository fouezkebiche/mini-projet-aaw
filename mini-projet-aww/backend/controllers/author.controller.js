// controllers/authorController.js
import Author from "../models/author.model.js";

// Create a new author
export const createAuthor = async (req, res) => {
  try {
    const { name, biography } = req.body;

    // Create new author instance
    const newAuthor = new Author({
      name,
      biography,
    });

    // Save the author to the database
    const savedAuthor = await newAuthor.save();

    res.status(201).json(savedAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all authors
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve an author by ID
export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing author
export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedFields = req.body;

    // Find the author by ID and update its fields
    const updatedAuthor = await Author.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    res.json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete an author by ID
export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the author
    await Author.findByIdAndDelete(id);

    res.json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
