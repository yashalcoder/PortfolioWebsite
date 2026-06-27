import React from "react";
import SDS from "../images/SDS.svg";
import freelance from "../images/freelance.png";

const experience = [
  { year: "Feb 26 - Jun 26", company: "Snow Dream Studio", position: "MERN Stack Developer", logo: SDS },
  { year: "Sep 25 - Nov 25", company: "Freelance", position: "Backend Dev (FastAPI)", logo: freelance },
  { year: "Jul 23 - Sep 23", company: "Snow Dream Studio", position: "Frontend Intern", logo: SDS },
];

export default function WorkExp() {
  const repeatedExperience = Array(20).fill(experience).flat();
  return (
    <div className="relative p-5 w-full overflow-hidden">
      {/* Title */}
      <div className="bg-white dark:bg-black w-full pb-3 border-b border-slate-100 dark:border-slate-800/80 z-10">
        <h2 className="font-heading text-2xl font-bold tracking-wider text-slate-800 dark:text-slate-100">Work History</h2>
      </div>
      
      {/* Scrolling Content */}
      <div className="mt-4 h-[200px] overflow-hidden relative">
        {/* Soft fading overlays for professional scroll effect */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white dark:from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none"></div>

        <div className="space-y-4 animate-scroll-y cursor-pointer">
          {repeatedExperience.map((data, index) => (
            <div className="py-3 border-b border-slate-50 dark:border-slate-900/50 flex flex-col gap-2" key={index}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400">
                  {data.year}
                </span>
                {data.logo && (
                  <img src={data.logo} alt={data.company} className="h-6 w-auto object-contain max-w-[50px] opacity-80" />
                )}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">{data.company}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{data.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
