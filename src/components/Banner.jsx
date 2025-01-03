import React from "react";
import { motion } from "framer-motion";
import b1 from "../assets/b1.webp"
import b2 from "../assets/b2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={b1}
            animate={{y:[50,100,50]}}
            transition={{duration:10, repeat:Infinity}}
            className="max-w-sm rounded-xl shadow-2xl size-60 "
          />
          <motion.img
            src={b2}
            animate={{x:[250,300,250]}}
            transition={{duration:10, repeat:Infinity}}
            className="max-w-sm rounded-xl shadow-2xl size-60"   
          />
        </div>
        <div className="flex-1">
          <motion.h1 animate={{x:[0,50,0]}}  transition={{ duration: 4, delay: 1, ease: "linear",repeat:Infinity }} className="text-5xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent font-bold">Find Your Desired Book Here.</motion.h1>
          <p className="py-6 font-semibold text-gray-500 text-justify">
          Books are the quietest and most constant of friends, offering wisdom without 
          judgment and solace without expectation. They are doorways to countless worlds, 
          allowing us to live a thousand lives within their pages.A book is like a conversation 
          with its author, igniting imagination, illuminating the mind, and inspiring the heart. 
          Every book is a treasure chest of knowledge and wonder, reflecting who we are and who we aspire to be. 
          In their company, we are never alone; they comfort, guide, and teach us something new with every read.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
