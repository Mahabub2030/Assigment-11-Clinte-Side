import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  console.log(book);
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
    email,
  } = book;

  const handleUpdateBooks = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const updatedBook = {
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
    console.log(updatedBook);

    // send data to the server
    fetch(`https://server-pied-omega.vercel.app/books/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book Updated Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        navigate("/AllBooks");
      });
  };

  return (
    <div className="bg-gray-200 w-10/12 mx-auto px-10 rounded-xl my-10">
      <Helmet>
        <title>Next Chapter | Update Books</title>
      </Helmet>
      <h2 className="text-center my-5 font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent p-2">
        Update Books:{name}
      </h2>
      <form onSubmit={handleUpdateBooks}>
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
                defaultValue={image}
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
                defaultValue={name}
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
                Category:
              </span>
            </label>
            <select
              className="border border-gray-300 rounded-lg w-full text-center py-3 px-3 "
              name="category"
              placeholder="Visa Type"
              defaultValue={category}
              required
            >
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
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
                defaultValue={authorName}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold text-lg">Rating:</span>
          </label>
          <label className="">
            <input
              type="number"
              name="rating"
              placeholder="Rating:"
              defaultValue={rating}
              className="input input-bordered w-full"
              required
            />
          </label>
        </div>

        <input
          type="submit"
          value="Submit"
          className="btn btn-block my-10 bg-gradient-to-r from-purple-700 to-blue-500 text-white "
        />
      </form>
    </div>
  );
};

export default UpdateBooks;
