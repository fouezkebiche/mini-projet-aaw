import React from "react";
import Books from "./components/Book";
import AddBook from "./components/AddBook ";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route to display all books */}
          <Route path="/" element={<Books />} />

          {/* Route to add a new book */}
          <Route path="/add-book" element={<AddBook />} />

          {/* Redirect to home if no route matches */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
