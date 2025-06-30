import React from "react";
import { motion } from "framer-motion";
const experience = [
  { year: "2023-2024", company: "Snow Dream Studio", position: "Front-End Developer" },
  { year: "2022-2023", company: "Tech Hub", position: "UI/UX Designer" },
  { year: "2021-2022", company: "Code Factory", position: "Junior Developer" },
];
export default function WorkExp() {
  // Repeat the experience array multiple times to fill the reel
  const repeatedExperience = Array(20).fill(experience).flat(); // Repeat enough to ensure no gap
  return (
    <div className=" relative p-6 ">
      {/* Title */}
      <div className="absolute top-4 bg-white dark:bg-black w-80 z-10">
        <h1 className="font-bold text-lg mb-2 ">Work Experience</h1>
      </div>
      {/* Scrolling Content */}
      <div className="pt-12 p-4 h-56 overflow-hidden ">
        <motion.div
          className="space-y-5 "
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 50, // Adjusted for smooth scrolling
            repeat: Infinity,
            ease: "linear", // Ensures consistent speed
          }}
        >
          {repeatedExperience.map((data, index) => (
            <div className="font-thin grid grid-cols-2" key={index}>
              <div><p>{data.year}</p></div>
              <div><p>{data.company}</p>
              <p>{data.position}</p></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
