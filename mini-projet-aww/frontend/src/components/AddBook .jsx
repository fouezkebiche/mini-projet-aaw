import React, { useState } from "react";

const AddBook = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/book/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          isbn,
          publicationDate,
          genre,
          price,
          stockQuantity,
        }),
      });
      const data = await response.json();
      onAdd(data); // Assuming the API returns the added book data
      // Clear form fields after adding the book
      setTitle("");
      setAuthor("");
      setIsbn("");
      setPublicationDate("");
      setGenre("");
      setPrice("");
      setStockQuantity("");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Publication Date"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="number"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          placeholder="Stock Quantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;
