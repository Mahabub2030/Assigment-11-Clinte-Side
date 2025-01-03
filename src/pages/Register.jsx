import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { NavLink, useNavigate } from "react-router-dom";
import registerAnimation from "../assets/register.json";
import AuthContext from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Register = () => {
    const [error, setError] = useState("");
    const {createUser,SignInWithGoogle}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (e)=>{
        e.preventDefault()
        setError('')
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value; 
        const password = form.password.value;
        console.log(name,image,email,password);
        if(password.length <6){
            setError("Password Must contain Atleast six characters")
            return;
          }
      
          if(!/[a-z]/.test(password)){
              setError("Password must contain at least one lowercase letter")
              return;
          }
          if(!/[A-Z]/.test(password)){
              setError("Password must contain at least one Uppercase letter")
              return;
          }
          createUser(email,password)
          .then(res=>{
            // console.log(res)
           
            
              navigate("/")
            toast("Registration Successfull")
          })
          .catch(err=> console.log(err) )     
    }
    const googleLoginHandler=()=>{
      SignInWithGoogle()
      .then(res=>{
          navigate("/")
          toast("Login Successfull")
      })
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200  gap-20">
      <Helmet>
      <title>Register</title>
    </Helmet>
      <div className=" rounded-xl card bg-base-100 w-full max-w-sm shrink-0  p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="image"
              type="text"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
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
              Register
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control ">
            <button onClick={googleLoginHandler} className="btn bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white ">
              Login With Google
            </button>
          </div>
        </form>
        {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
          )}
        <p className="text-center font-semibold">
          Already Have An account?
          <NavLink className="text-red-500" to="/login">
            Login
          </NavLink>
        </p>
      </div>
          <div>
              <Lottie animationData={registerAnimation}></Lottie>
          </div>
    </div>
  );
};

export default Register;
