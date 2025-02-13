import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BorrowedBooksCard from "./BorrowedBooksCard";
import { Helmet } from "react-helmet-async";
import AuthContext from "../context/AuthContext";

const BorrowedBooks = () => {
  const {user}=useContext(AuthContext)
  const loadedBorrowedBooks = useLoaderData();
  // console.log(loadedBorrowedBooks);
  const presonalBorrowedBooks = loadedBorrowedBooks.filter(book=>book.email==user?.email)
  const [borrowedBooks, setBorrowedBooks] = useState(presonalBorrowedBooks);
  console.log(borrowedBooks);
  return (
    <div>
      <Helmet>
        <title>Next Chapter | Borrowed Books</title>
      </Helmet>
      <h2 className="text-center font-bold text-2xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent my-8">
         Book Borrowed By - {user?.displayName}
      </h2>
      <div className="lg:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-10">
        {borrowedBooks.map((borrowedBook) => (
          <BorrowedBooksCard
            key={borrowedBook._id}
            borrowedBooks={borrowedBooks}
            setBorrowedBooks={setBorrowedBooks}
            borrowedBook={borrowedBook}
          ></BorrowedBooksCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
