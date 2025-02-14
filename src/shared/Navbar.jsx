
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../assets/kids.gif";
import Swal from "sweetalert2";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setIsDarkMode(savedMode === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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
      .catch((err) => console.log("Login Failed"));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="navbar bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 rounded w-full p-4">
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
            className="menu menu-sm dropdown-content bg-base-100 shadow-xl mt-3 w-52 p-2 z-10"
          >
            <li>
              <NavLink to="/" className="text-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/AllBooks" className="text-lg">
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/AddBooks" className="text-lg">
                Add Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/BorrowedBooks" className="text-lg">
                Borrowed Books
              </NavLink>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
          <h2 className="font-bold text-transparent bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text">
            Next Chapter
          </h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="text-lg text-white hover:text-blue-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AllBooks"
              className="text-lg text-white hover:text-blue-300"
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AddBooks"
              className="text-lg text-white hover:text-blue-300"
            >
              Add Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/BorrowedBooks"
              className="text-lg text-white hover:text-blue-300"
            >
              Borrowed Books
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="ml-4 btn text-2xl "
      >
        {isDarkMode ? <CiDark /> : <MdDarkMode />}
      </button>
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
            <img
              src={user?.photoURl}
              alt="User"
              className="rounded-full w-10 h-10"
            />
            <button
              onClick={handleLogout}
              className="btn bg-gradient-to-r from-purple-700 to-blue-500 text-white"
            >
              Logout
            </button>
          </>
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


