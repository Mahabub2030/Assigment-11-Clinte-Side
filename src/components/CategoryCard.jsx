import React from "react";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryCard = ({ book }) => {
  const { _id, image, name, quantity, authorName, category, rating } = book;

  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-4 w-80 mx-auto">
      {/* Image */}
      <figure className="w-full h-40 flex justify-center items-center">
        <img className="h-full object-contain" src={image} alt={name} />
      </figure>

      {/* Card Content */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">Category: {category}</p>
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 mt-2">
          <ReactStars
            count={5}
            value={rating}
            size={20}
            isHalf={true}
            activeColor="#ffd700"
          />
          <span className="text-sm font-semibold text-gray-700">
            ({rating}/5)
          </span>
        </div>

        {/* Button */}
        <div className="mt-4">
          <NavLink to={`/details/${_id}`}>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
