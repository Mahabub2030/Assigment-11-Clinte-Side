import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowedBooksCard = ({ borrowedBook }) => {
  const navigate = useNavigate();
  const { _id, image, title, authorName, category, rating, Bdate, Rdate } =
    borrowedBook;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-pied-omega.vercel.app/borrowedBooks/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Returned!",
                text: "Book Returned Successfully.",
                icon: "success",
              });
            }
            navigate("/");
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-pink-500 to-red-400 p-4 rounded-2xl shadow-lg text-white  mx-auto">
      <figure className="w-full h-40 overflow-hidden rounded-lg  ">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </figure>
      <div className="p-4 text-center  gap-10">
        <h2 className="text-lg font-bold"> Name: {title}</h2>
        <span className="bg-white text-gray-700 px-2 py-1 rounded-md text-sm font-semibold inline-block mt-2">
           Category: {category}
        </span>
        <p className="text-sm mt-3">{authorName}</p>
        <p className="text-xs text-gray-200 mt-2">Borrowed Date: {Bdate}</p>
        <p className="text-xs text-gray-200">Return Date: {Rdate}</p>
        <div className="flex justify-center items-center gap-2 mt-3">
          <ReactStars
            count={5}
            value={rating}
            size={20}
            isHalf={true}
            activeColor="#ffd700"
          />
          <span className="text-lg font-semibold">{rating}</span>
        </div>
        <p className="text-xl font-bold mt-2">$4500</p>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-white text-gray-700 px-4 py-2 rounded-full mt-3 hover:bg-gray-300"
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default BorrowedBooksCard;
