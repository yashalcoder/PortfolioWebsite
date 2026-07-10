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
import { motion, AnimatePresence } from "framer-motion";
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
      <div className="mx-4 md:mx-12 lg:mx-12 xl:mx-24 my-5 flex justify-between bg-white dark:bg-black rounded-xl font-bold text-white font-poppins shadow-lg p-2 items-center">
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
            className="hidden lg:flex lg:gap-1 xl:gap-2"
          >
            {menulist.map((data) => (
              <NavLink
                key={data.id}
                to={data.link}
                className={`${isactive === data.id ? "bg-gray-200 text-black dark:bg-gray-900 dark:text-white" : ""} flex gap-1 transition duration-200 text-gray-500 p-2 lg:p-1.5 xl:p-2 font-poppins py-1 hover:bg-gray-200 hover:text-black my-2 rounded-lg dark:hover:bg-gray-900 dark:hover:text-white lg:text-sm xl:text-base`}
                onClick={() => setIsActive(data.id)}
              >
                <data.img className="mt-0.5" size={18} />
                {data.mname}
              </NavLink>
            ))}
          </motion.nav>

       <button onClick={toggleNavbar} className="text-black dark:text-white lg:hidden flex p-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
         {isOpen ? <X size={24} /> : <Menu size={24} />}
       </button>
       <div className="hidden lg:flex items-center gap-2 xl:gap-4">
         <Darkmode/>
         <NavLink 
           to="/contact" 
           className="lg:text-sm xl:text-lg flex items-center gap-2 lg:px-4 lg:py-1.5 xl:px-6 xl:py-2 text-white bg-gray-900 hover:bg-blue-700 transition-all duration-300 rounded-lg hover:scale-105"
         >
           Let's Talk
           <ArrowBigUpDashIcon size={20} />
         </NavLink>
       </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[350px] bg-white dark:bg-black z-50 p-6 shadow-2xl flex flex-col justify-between lg:hidden text-gray-700 dark:text-white"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-2xl text-black dark:text-white font-poppins font-bold">
                    Yashal
                    <span className="text-blue-700">Folio</span>
                  </h1>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-black dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {menulist.map((data) => (
                    <NavLink
                      key={data.id}
                      to={data.link}
                      className={`${isactive === data.id ? "bg-gray-200 text-black dark:bg-gray-900 dark:text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-900 dark:hover:text-white"} flex gap-2 items-center font-poppins p-3 rounded-lg text-md font-semibold transition-all duration-200`}
                      onClick={() => {
                        setIsActive(data.id);
                        setIsOpen(false);
                      }}
                    >
                      <data.img size={20} />
                      {data.mname}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-zinc-900">
                  <Darkmode />
                  <span className="text-black dark:text-white text-sm font-semibold">Change Theme</span>
                </div>

                <NavLink
                  to="/contact"
                  className="text-lg flex items-center justify-center gap-2 px-6 py-3 text-white bg-gray-900 hover:bg-blue-700 transition-all duration-300 rounded-lg hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                  <ArrowBigUpDashIcon size={20} />
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
