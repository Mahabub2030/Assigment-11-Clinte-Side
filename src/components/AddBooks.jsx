import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../pages/LoadingSpinner ";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
   const {loading, setLoding} = useState()
   const navigate = useNavigate()
   
  const { user } = useContext(AuthContext);
  const handleAddBooks = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const bookContent = form.bookContent.value;
    const email = user?.email;

    const addBook = {
      image,
      name,
      quantity,
      authorName,
      category,
      shortDescription,
      rating,
      bookContent,
      email,
    };
    console.log(addBook);

    // send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        navigate('/AllBooks')
      });
  };
    if (loading) return <LoadingSpinner />
  return (
    <div className="bg-gray-200 w-10/12 mx-auto px-10 rounded-xl my-10 p-5">
      <Helmet>
        <title>Next Chapter | Add books</title>
      </Helmet>
      <h2 className="text-center my-5 font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent p-2">
        Add Books
      </h2>
      <form onSubmit={handleAddBooks}>
        {/* row */}
        <div className="md:flex gap-10">
          {/*Image */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Image:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="image"
                placeholder="Image"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Name:</span>
            </label>
            <label className="">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10">
          {/*Quantity */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Quantity:
              </span>
            </label>
            <label className="">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/*Author Name*/}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Author Name:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="authorName"
                placeholder="Author Name:"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        {/* row */}
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Category:
              </span>
            </label>
            <select
              className="border border-gray-300 rounded-lg w-full text-center py-3 px-3 "
              name="category"
              placeholder="Visa Type"
              required
            >
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          {/*Country Name */}
          {/* Description */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Short Description:
              </span>
            </label>
            <textarea
              className="border border-gray-300 rounded-lg text-center w-full "
              name="shortDescription"
              placeholder="Short Description"
              required
            ></textarea>
          </div>
        </div>
        {/* row */}
        <div className="md:flex gap-10">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">Rating:</span>
            </label>
            <label className="">
              <input
                type="number"
                name="rating"
                placeholder="Rating:"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/*Country Name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                BookContent:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="bookContent"
                placeholder=" information about the book"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* require documents */}

        <input
          type="submit"
          value="Add Book"
          className="btn btn-block my-10 bg-gradient-to-r from-purple-700 to-blue-500 text-white "
        />
      </form>
    </div>
  );
};

export default AddBooks;
