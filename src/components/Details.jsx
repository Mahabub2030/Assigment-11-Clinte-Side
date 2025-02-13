// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Modal from "./Modal";
// import { Helmet } from "react-helmet-async";


// const Details = () => {
//   const book = useLoaderData();

//   const [currentQuantity, setCurrentQuantity] = useState(book.quantity);

//   const {
//     _id,
//     image,
//     name,
//     quantity,
//     authorName,
//     category,
//     shortDescription,
//     rating,
//     bookContent,
//   } = book;

//   const handleBorrow = async () => {
//     if (currentQuantity <= 0) {
//       alert("No copies left to borrow.");
//       return;
//     }

//   };

//   return (
//     <div
//       className="hero min-h-screen"
//       style={{
//         backgroundImage: `url(${image})`,
//       }}
//     >
//       <Helmet>
//         <title>Next Chapter | Details of {name} </title>
//       </Helmet>
//       <div className="hero-overlay bg-opacity-60 "></div>
//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-md border shadow-xl max-w-sm border shadow-lg rounded-lg overflow-hidden bg-white p-10 text-black">
//           <h1 className="mb-5 text-4xl font-bold ">Title: {name}</h1>
//           <p className="text-lg font-semibold">Author Name: {authorName}</p>
//           <p className="text-lg font-semibold">Category: {category}</p>
//           <p className="text-lg font-semibold">Quantity: {quantity}</p>
//           <p className="text-lg font-semibold">Rating: {rating}</p>
//           <p className="text-sm font-semibold">Book Content: {bookContent}</p>
//           <p className="text-sm font-semibold">Short Description: {shortDescription}</p>
//           <button
//             onClick={() => {document.getElementById("my_modal_5").showModal(); handleBorrow()}}
//             disabled={currentQuantity <= 0}
//           className="w-full bg-sky-600 text-black text-lg font-semibold py-2 rounded-lg hover:bg-red-700 transition"
//           >
//             Borrow
//           </button>
//         </div>
//       </div>
//       <Modal book={book}></Modal>
//     </div>
//   );
// };

// export default Details;


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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Helmet>
        <title>Next Chapter | Details of {name}</title>
      </Helmet>

      {/* Card Container */}
      <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 w-96">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img className="h-40 object-contain" src={image} alt={name} />
        </div>

        {/* Content */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800">{name}</h1>
          <p className="text-sm text-gray-600 mt-1">Author: {authorName}</p>
          <p className="text-sm text-gray-600">Category: {category}</p>
          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
          <p className="text-sm text-gray-600">Rating: {rating}</p>
          <p className="text-sm text-gray-600 mt-2">{shortDescription}</p>

          {/* Borrow Button */}
          <button
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
              handleBorrow();
            }}
            disabled={currentQuantity <= 0}
            className="w-full bg-red-600 text-white text-lg font-semibold py-2 rounded-lg mt-4 hover:bg-red-700 transition"
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




