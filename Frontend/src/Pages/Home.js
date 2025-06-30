import React from "react";
import Yash from "../images/yash2.png";
import { animate, motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight, Copy, Github, Linkedin, PhoneCall, Youtube } from "lucide-react";
import WorkExperience from "../Components/WorkExp";
import p from "../images/p.png";
import ExpertArea from "../Components/ExpertArea";
import Services from "../Components/Services";
import Info from "../Components/Info";
import pro from "../images/seo.mp4";
import pro2 from "../images/project2.mp4";
import pro3 from "../images/project4.mp4"
export default function Home() {
  return (
    <>
    <div className="grid grid-col-1 lg:grid-cols-3 grid-rows-3 gap-3 mb-10 mx-4 sm:mx-[100px]">
    <div className='col-span-1 row-span-2  rounded-xl bg-white text-black dark:bg-black  pb-4 dark:text-white '>
     <Info/>
     </div>
      <div className="col-span-1 row-span-1 p-2 bg-white text-black dark:bg-black rounded-xl dark:text-white flex">
       <WorkExperience/>
      </div>
      <div className="col-span-1 row-span-2 text-black bg-white dark:text-white dark:bg-black rounded-xl ">
        <div className="flex p-4">
          <h1 className="font-poppins font-bold text-lg ">Recent Projects</h1>
          <div className="flex border-b-2 border-blue-900 ml-auto hover:text-blue-950 cursor-pointer text-blue-900 ">
            <h1>All Projects</h1>
            <ArrowBigRight/>
          </div>        
        </div>
        <video className="p-4 rounded-xl" controls autoPlay muted loop>
          <source src={pro} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       <video className="p-4 rounded-xl" controls autoPlay muted loop>
          <source src={pro2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="p-4 rounded-xl" controls autoPlay muted loop>
          <source src={pro3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-span-1 row-span-1 rounded-xl p-2  bg-white text-black dark:bg-black dark:text-white">
        <ExpertArea/>
      </div>
      <div className="col-span-1 lg:col-span-2 row-span-1 p-6 bg-white text-black dark:bg-black dark:text-white rounded-lg">
       <Services/>
       </div>
       <div className="col-span-1 row-span-1 p-6  bg-white text-black dark:bg-black dark:text-white rounded-lg">
        <div className="bg-gray-100 dark:bg-gray-900 overflow-x-hidden rounded-lg mb-4 p-2"  >
          <motion.div initial={{x:"0%"}}
           animate={{x:"-100%"}}
           className="break-words"
           transition={
            {
              duration:10,
              repeat:Infinity,
              ease:"linear"
            }
           }
           >
            <h1 className="">Available for working 🚀 and dynamic</h1></motion.div>
        </div>
        <h1 className="text-6xl">Let's 👋 Work Togather</h1>
        <div className="flex gap-2  cursor-pointer border-b-2 text-blue-900 pt-6 w-24 border-blue-900">
          <h1>Let's Talk</h1>
          <ArrowBigRight/>
        </div>
       </div>
    </div>
    </>
  );
}
