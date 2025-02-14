import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

const Modal = ({ book }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
   


  const handleSubmit = (e) => {
    e.preventDefault();
    const image = book.image;
    const rating = book.rating;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const title = e.target.title.value;
    const authorName = e.target.authorName.value;
    const category = e.target.category.value;
    const Bdate = e.target.Bdate.value;
    const Rdate = e.target.Rdate.value;
    const applicationInfo = { image, rating, email, name, title, authorName, category, Bdate, Rdate };

    fetch(`https://server-pied-omega.vercel.app/borrowedBooks`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          const modal = document.getElementById("my_modal_5");
          if (modal) modal.close();
          Swal.fire({
            title: "Success!",
            text: "Book Borrowed",
            icon: "success",
            confirmButtonText: "Done",
          });

        }
        navigate('/BorrowedBooks')
      });
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box bg-blue-200">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Applicant Name:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Applicant Email:
              </span>
            </label>
            <label className="">
              <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Book Title:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                defaultValue={book?.name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Author Name:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="authorName"
                placeholder=" Author Name"
                defaultValue={book?.authorName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Category:
              </span>
            </label>
            <label className="">
              <input
                type="text"
                name="category"
                placeholder=" Category"
                defaultValue={book?.category}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Borrow Date:
              </span>
            </label>
            <label className="">
              <input
                type="date"
                name="Bdate"
                placeholder="Return Date"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Return Date: <br></br><span className="text-xs text-gray-500
                ">(The return date should be within 10 days from the date of borrowing. Otherwise, the authorities will take necessary action.)</span>
              </span>
            </label>
            <label className="">
              <input
                type="date"
                name="Rdate"
                placeholder=""
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <button
            className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white mt-4"
            type="submit"
          >
            Borrow
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
