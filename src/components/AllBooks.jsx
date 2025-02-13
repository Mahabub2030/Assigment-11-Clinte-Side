import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, } from "react-router-dom";
import BookCard from "./bookCard";



const AllBooks = () => {
  const allBooks = useLoaderData();
 
  // console.log(allBooks);
  return (
    <div>
      <Helmet>
        <title> Libry Chapter | All Books</title>
      </Helmet>
      <h2 className="text-center font-bold text-3xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent my-8">
        All Books
      </h2>
      <div className="lg:w-10/12  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 p-10">
        {allBooks.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
