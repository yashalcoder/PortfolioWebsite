import React from 'react'
import { useState } from 'react';
import Yash from "../images/yash2.png";
import { animate, motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight, Copy, Github, Linkedin, PhoneCall, Youtube } from "lucide-react";
function Info() {
  const [textToCopy,setTextToCopy]=useState("yashalrafique2@gmail.com");
  const copytoclipboard=async()=>{
    try{
      await navigator.clipboard.writeText(textToCopy);
      alert("Copied  successfully")
    }
    catch{
      alert("Copied error")
    }
  }
  return (
    <div >
       <div>
        <div className="bg-gray-200 dark:bg-gray-900 px-10 m-6  rounded-xl">
          <img className="justify-center" src={Yash} />
        </div>
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
        <h1 className="font-bold font-poppins text-xl p-6 py-2">
          Yashal Rafique<span class="text-red-500">😊</span>{" "}
        </h1>
        <p className="px-6 font-poppins text-lg font-semibold">
          I am passionate{" "}
          <span className="text-blue-700 font-bold">MERN stack developer</span>{" "}
          Having 1 year experience.Pursuing my degree in Computer Science from
          National University of Computer and Emerging sciences (FAST).
        </p>
        </motion.div>
        <div className="p-6 flex justify-between">
          <button className="bg-blue-600 text-white text-lg flex gap-2 font-poppins font-bold p-4 rounded-xl  transition-all duration-300 hover:scale-105">
            <PhoneCall className="pt-1" />
            Book a call
          </button>
          <button className="p-4 flex gap-2  rounded-xl border px-6 hover:text-white hover:bg-gray-900  transition-all duration-300 hover:scale-105"  onClick={copytoclipboard}> 
            <Copy />
            Copy Email
          </button>
        </div>
        <div className="px-6 flex gap-3 text-white">
          <Github className="bg-gray-900 rounded-full w-11 h-11 p-2" />
          <Linkedin className="bg-gray-900 rounded-full w-12 h-11 p-3" />
          <Youtube className="bg-gray-900 rounded-full w-11 h-11 p-2" />
          <PhoneCall className="bg-gray-900 rounded-full w-11 h-11 p-2" />
        </div>
      </div>
    </div>
  )
}

export default Info
