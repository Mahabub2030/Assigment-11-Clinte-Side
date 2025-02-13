import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, SignInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must contain at least six characters");
      return;
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      setError("Password must have uppercase and lowercase letters");
      return;
    }

    createUser(email, password)
      .then(() => {
        navigate("/");
        toast.success("Registration Successful");
      })
      .catch((err) => console.log(err));
  };

  const googleLoginHandler = () => {
    SignInWithGoogle().then(() => {
      navigate("/");
      toast.success("Login Successful");
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="bg-white text-white rounded-lg p-10 w-full border max-w-sm">
        <h2 className="text-2xl font-semibold text-center">Create an account</h2>
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <NavLink className="text-purple-400 hover:underline" to="/login">
            Log in
          </NavLink>
        </p>

        <form onSubmit={handleRegister} className="space-y-4 mt-5">
          <div className="flex space-x-3">
            <input
              name="name"
              type="text"
              placeholder="First name"
              className="input w-full bg-gray-300 text-white rounded p-3"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="input w-full bg-gray-300 text-white rounded-lg p-3"
              required
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input w-full bg-gray-300 text-white rounded-lg p-3"
            required
          />
          <div className="relative">
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input w-full bg-gray-300 text-white rounded-lg p-3"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" required />
            <span className="text-sm">
              I agree to the{" "}
              <NavLink className="text-purple-400 hover:underline" to="#">
                Terms & Conditions
              </NavLink>
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-lg p-3 text-white font-semibold"
          >
            Create account
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-gray-400">Or register with</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={googleLoginHandler}
            className="flex-1 flex items-center justify-center space-x-2 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
          >
            <FcGoogle size={20} />
            <span>Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition">
            <FaApple size={20} />
            <span>Apple</span>
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
