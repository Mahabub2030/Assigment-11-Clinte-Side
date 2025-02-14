
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { _id, image, name, authorName, category, rating } = book;

  return (
    <div className="bg-[#0F172A] text-white rounded-lg shadow-lg p-5 w-80 mx-auto">
      <figure className="w-full h-60 overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </figure>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-400 text-sm">Author: {authorName}</p>
        <p className="text-gray-400 text-sm">Category: {category}</p>

        <div className="flex justify-center items-center gap-2 mt-2">
          <ReactStars
            count={5}
            value={rating}
            size={20}
            isHalf={true}
            activeColor="#ffd700"
          />
          <span className="text-lg font-semibold">({rating}/5)</span>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <Link to={`/book/${_id}`}>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View
            </button> */}
          </Link>
          <Link to={`/updateBooks/${_id}`}>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Edit
            </button>
          </Link>
          {/* <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BookCard;

