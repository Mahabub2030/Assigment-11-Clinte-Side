import Lottie from "lottie-react";
import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json";
import AuthContext from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import {toast } from 'react-toastify';

const Login = () => {
  const { loginUser, SignInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  const handleLogin = (e) => {
    e.preventDefault();
    // setError('')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    loginUser(email, password)
      .then((res) => {
        console.log(res.user)
        toast("login done")
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  const googleLoginHandler=()=>{
    SignInWithGoogle()
    .then(res=>{
        navigate(from)
        toast("login done")
    })
  }
  return (
    
    <div className="min-h-screen flex justify-center items-center bg-gray-200  gap-">
      <Helmet>
      <title>Login</title>
    </Helmet>
      <div className=" rounded-xl card bg-base-100 w-full max-w-sm shrink-0  p-10">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              //   type={show ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              //   onClick={() => setShow(!show)}
              className="absolute right-2 top-14"
            >
              {/* {
                  show ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                } */}
            </button>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white"
            >
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control">
            <button
              onClick={googleLoginHandler}
              className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white "
            >
              Login With Google
            </button>
          </div>
        </form>
        {/* {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
          )} */}
        <p className="text-center font-semibold">
          Don't Have Any account?
          <NavLink className="text-red-500" to="/register">
            Register
          </NavLink>
        </p>
      </div>
      <div>
        <Lottie animationData={loginAnimation}></Lottie>
      </div>
    </div>
  );
};

export default Login;
