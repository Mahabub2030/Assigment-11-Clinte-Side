

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BookCard from "./bookCard";

const AllBooks = () => {
  // const[allBooks, setAllBooks] = useState()
  const allBooks = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBooks, setSortedBooks] = useState("");

  useEffect(() => {
    setSortedBooks(allBooks);
  }, [allBooks]); // Ensure sortedBooks updates when allBooks changes
  console.log(allBooks);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSortBy = (e) => {
    sortedBooks(e.target.value);
    console.log('btn ')
  }
  return (
    <div>
      <Helmet>
        <title> Libry Chapter | All Books</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent my-8">
        All Books
      </h2>
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by author name..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded-lg w-1/3"
        />
        <button
          onClick={ handleSortBy}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Sortby Rating
        </button>
      </div>
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;



