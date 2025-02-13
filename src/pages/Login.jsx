import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json";
import AuthContext from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";
import LoadingSpinner from "./LoadingSpinner ";
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  const { loading, setLoding } = useState();
  const { loginUser, SignInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  if (loading) return <LoadingSpinner />;
  const handleLogin = (e) => {
    e.preventDefault();
    // setError('')
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast("login done");
        navigate(from);
      })
      .catch((err) => console.log(err));
  };
  const googleLoginHandler = () => {
    SignInWithGoogle().then((res) => {
      navigate(from);
      toast("login done");
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200  gap-">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className=" rounded-xl card bg-base-100 w-[500px]  shrink-0  p-10">
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
              className="bg-lime-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control">
            <div
              onClick={googleLoginHandler}
              className="flex justify-center items-center  space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
            >
              <FcGoogle   size={32} />

              <p>Continue with Google</p>
            </div>
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
