import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";


const Details = () => {
  const book = useLoaderData();

  const [currentQuantity, setCurrentQuantity] = useState(book.quantity);

  const {
    _id,
    image,
    name,
    quantity,
    authorName,
    category,
    shortDescription,
    rating,
    bookContent,
  } = book;

  const handleBorrow = async () => {
    if (currentQuantity <= 0) {
      alert("No copies left to borrow.");
      return;
    }

  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Helmet>
        <title>Next Chapter | Details of {name} </title>
      </Helmet>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Title: {name}</h1>
          <p>Author Name: {authorName}</p>
          <p>Category: {category}</p>
          <p>Quantity: {quantity}</p>
          <p>Rating: {rating}</p>
          <p>Book Content: {bookContent}</p>
          <p>Short Description: {shortDescription}</p>
          <button
            onClick={() => {document.getElementById("my_modal_5").showModal(); handleBorrow()}}
            disabled={currentQuantity <= 0}
            className="btn btn-primary"
          >
            Borrow
          </button>
        </div>
      </div>
      <Modal book={book}></Modal>
    </div>
  );
};

export default Details;
