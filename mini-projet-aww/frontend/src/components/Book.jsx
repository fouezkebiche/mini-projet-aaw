import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/book");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <Link to="/add-book" className="text-blue-500 hover:underline">
        Add Book
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-red-600">All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id} className="mb-2 text-red-600">
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
