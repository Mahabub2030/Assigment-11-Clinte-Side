import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/kids.gif";
import Swal from "sweetalert2";


const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {
         Swal.fire({
                    title: "LogOut Success!",
                    text: "Logout",
                    icon: "success",
                    confirmButtonText: "Done",
                  });
      })
      .catch((err) => console.log("Logiun Failed"));
  };
  return (
    <div className="navbar bg-gray-200 mb-4 rounded-xl mt-1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/All Books">All Books</NavLink>
            </li>
            <li>
              <NavLink to="/Add Books">Add Books</NavLink>
            </li>
            <li>
              <NavLink to="/Borrowed Books">Borrowed Books</NavLink>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h2 className="font-bold bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">Next Chapter</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/All Books">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/Add Books">Add Books</NavLink>
          </li>
          <li>
            <NavLink to="/Borrowed Books">Borrowed Books</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user?.photoURl}
              alt=""
            />
            <button onClick={handleLogout} className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white">
              Logout
            </button>
          </div>
        ) : (
          <>
            <button className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white">
              <Link to="/register">Register</Link>
            </button>
            <button className="btn ml-4 bg-gradient-to-r from-purple-700 to-blue-500 text-white">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

