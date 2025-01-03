import React from "react";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryCard = ({ book }) => {
    const {_id,
        image,
        name,
        quantity,
        authorName,
        category,
        shortDescription,
        rating,
        bookContent,
        email
    }=book
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {name}</h2>
        <p>Author Name: {authorName}</p>
        <p>Category: {category}</p>
        <p>Quantity: {quantity}</p>
        <p className="flex items-center gap-1">
                  
                  Rating:
                  <ReactStars
                    count={5}
                    value={book.rating}
                    size={24}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                  <span>({book.rating}/5)</span>
                </p>
        <div className="card-actions ">
          <NavLink to={`/details/${_id}`}><button  className="btn  bg-gradient-to-r from-purple-700 to-blue-500 text-white">Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
