import React from "react";
import { motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";
import WorkExperience from "../Components/WorkExp";
import ExpertArea from "../Components/ExpertArea";
import Services from "../Components/Services";
import Info from "../Components/Info";
import pro from "../images/seo.mp4";
import pro2 from "../images/project2.mp4";
import pro3 from "../images/project4.mp4";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 mx-4 md:mx-12 lg:mx-24">
        {/* Row 1, Col 1: Profile Card (Spans Row 1 & 2) */}
        <div className="col-span-1 lg:row-span-2 lg:h-[680px] rounded-2xl bg-white text-slate-800 dark:text-slate-200 dark:bg-black border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          <Info />
        </div>

        {/* Row 1, Col 2: Work Experience (Spans Row 1) */}
        <div className="col-span-1 lg:row-span-1 p-2 bg-white text-slate-800 dark:text-slate-200 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
          <WorkExperience />
        </div>

        {/* Row 1, Col 3: Recent Projects Showcase (Spans Row 1 & 2) */}
        <div className="col-span-1 lg:row-span-2 lg:h-[680px] text-slate-800 dark:text-slate-200 bg-white dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm ">
          <div className="flex p-5 items-center border-b border-slate-100 dark:border-slate-800/80">
            <h1 className="font-heading text-2xl font-bold tracking-wider text-slate-800 dark:text-slate-200">Featured Reels</h1>
            <Link to="/work" className="flex items-center gap-1 border-b border-violet-500 ml-auto hover:text-violet-600 dark:hover:text-violet-400 text-violet-500 font-semibold text-sm transition duration-200">
              <span>All Projects</span>
              <ArrowBigRight size={16} />
            </Link>
          </div>
          <div className="p-4 space-y-4 overflow-y-auto max-h-[580px] pr-1">
            <div className="relative group rounded-xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <video className="w-full h-auto" controls autoPlay muted loop>
                <source src={pro} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative group rounded-xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <video className="w-full h-auto" controls autoPlay muted loop>
                <source src={pro2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative group rounded-xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <video className="w-full h-auto" controls autoPlay muted loop>
                <source src={pro3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Row 2, Col 2: Expert Area (Spans Row 2) */}
        <div className="col-span-1 lg:row-span-1 rounded-2xl p-2 bg-white text-slate-800 dark:text-slate-200 dark:bg-black border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
          <ExpertArea />
        </div>

        {/* Row 3, Col 1 & 2: Services (Spans Col 1 & 2, Row 3) */}
        <div className="col-span-1 lg:col-span-2 lg:row-span-1 p-6 bg-white text-slate-800 dark:text-slate-200 dark:bg-black rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
          <Services />
        </div>

        {/* Row 3, Col 3: Call to action card */}
        <div className="col-span-1 lg:row-span-1 p-6 bg-white text-slate-800 dark:text-slate-200 dark:bg-black border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl flex flex-col justify-between">
          <div className="bg-slate-100 dark:bg-slate-900 overflow-hidden rounded-xl p-3 border border-slate-200/50 dark:border-slate-800/50">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="whitespace-nowrap font-medium text-xs text-violet-600 dark:text-violet-400"
            >
              🚀 Available for working 🚀 and dynamic
            </motion.div>
          </div>
          <div className="my-6">
            <h2 className="text-4xl font-heading font-bold text-slate-800 dark:text-white leading-tight">
              Let's <span className="text-violet-500">Work</span><br />Together.
            </h2>
          </div>
          <Link to="/contact" className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-bold hover:gap-3 transition-all duration-300 border-b border-violet-500 pb-1 text-base w-fit">
            <span>Let's Talk</span>
            <ArrowBigRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
