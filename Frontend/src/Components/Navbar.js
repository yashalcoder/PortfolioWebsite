import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Darkmode from "./Darkmode";
import {
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigUpDashIcon,
  BookAIcon,
  ContactIcon,
  HomeIcon,
  LucideHome,
  Menu,
  MessageSquareIcon,
  MoonIcon,
  PencilIcon,
  StarIcon,
  SunIcon,
  SunriseIcon,
  Sunset,
  WormIcon,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isactive,setIsActive]=useState();
  const [isOpen,setIsOpen]=useState(false);
  const menulist=[
    {id:0,mname:"Home",img:LucideHome,link:"/"},
    {id:1,mname:"About",img:ContactIcon,link:"/About"},
    {id:2,mname:"Services",img:StarIcon,link:"/servicespage"},
    {id:3,mname:"Works",img:WormIcon,link:"/work"},
    {id:4,mname:"Contact us",img: MessageSquareIcon,link:"/contact"},
  ]
  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }
  useEffect(()=>{
    const handleScreen=()=>{
      if(window.innerWidth>=1024)
        {
          setIsOpen(false);
        }
      };
        window.addEventListener("resize",handleScreen);
        return ()=>{
            window.removeEventListener("resize",handleScreen);
        };
  },[]);

  return (
    <>
      <div className="mx-4 sm:mx-[100px] my-5 flex justify-between bg-white dark:bg-black rounded-xl font-bold text-white font-poppins shadow-lg p-2">
        {/* logo header */}
        <div className="p-2 font-poppins">
          <h1 className="text-2xl text-black dark:text-white">
            Yashal
            <span className="text-blue-700 font-bold ">Folio</span>
          </h1>
        </div>
        {/* menu bar tabs */}
        
        
         <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className=" hidden lg:flex gap-2"
          >
            {menulist.map((data, index) => (
              <NavLink
                key={data.id}
                to={data.link}
                className={`${isactive === data.id ? "bg-gray-200 text-black dark dark:hover:bg-gray-900 dark:hover:text-white" : ""} flex gap-1 transition duration-200 text-gray-500 p-2 font-poppins py-1 hover:bg-gray-200 hover:text-black my-2 rounded-lg dark:hover:bg-gray-900 dark:hover:text-white text-md`}
                onClick={() => setIsActive(data.id)}
              >
                <data.img />
                {data.mname}
              </NavLink>
            ))}
          </motion.nav>

          
        
       <div className="hidden lg:flex m-3">
       <Darkmode/>
       </div>
       <button onClick={toggleNavbar} className="text-black dark:text-white lg:hidden flex p-3">
        {isOpen? <X/>:<Menu/>}
       </button>
        <div className="hidden lg:flex gap-3 ">
          <NavLink 
  to="/contact" 
  className="text-lg flex items-center gap-2 px-6 py-2 text-white bg-gray-900 hover:bg-blue-700 transition-all duration-300 rounded-lg hover:scale-105"
>
  Let's Talk
  <ArrowBigUpDashIcon />
</NavLink>

        </div>
      </div>
      {isOpen &&(
      <div className="bg-white shadow-lg shadow-black dark:shadow-gray-700 text-gray-700 absolute flex flex-col rounded-lg  p-7 justify-center dark:text-white font-bold dark:bg-black top-0 m-0 w-100 h-100">
          <div className="p-2 font-poppins">
           <h1 className="text-2xl text-black pb-5 dark:text-white">
            Yashal
            <span className="text-blue-700 font-bold ">Folio</span>
          </h1>
          </div>
          {/* menulist.forEach(element => {//we cant use it bcz JSX expects a value it can render. 
          // When you use forEach, it does not return a value to be rendered.
          }); */}
          {menulist.map((data,index)=>(
            <NavLink to={data.link} className="gap-2 pr-16 font-poppins text-gray-500 p-1 flex  m-2 hover:bg-gray-200 hover:text-black  dark:hover:bg-gray-900 rounded-lg dark:hover:text-white text-md"
            key={index}
            >
              <data.img className="p-1 mt-0.5 "/>
              {data.mname}
            </NavLink>
          ))}
          <div className="flex p-2 m-3 gap-3">
          <Darkmode/>
          <h1 className="text-black text-sm dark:text-gray-700 p-1 ">Chnage Theme</h1>
          </div>
          
         <div className="flex gap-6 p-4">
          <NavLink 
            to="/contact" 
            className="text-lg flex items-center gap-2 px-2 py-2 text-white bg-gray-900 hover:bg-blue-700 transition duration-300 rounded-lg hover:scale-105"
          >
            Let's Talk
            <ArrowBigUpDashIcon />
          </NavLink>

          </div>
       </div>
      )}
    </>
  );
}
