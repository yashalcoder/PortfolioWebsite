import React from "react";
import fromt from "../images/fastLogo.png"
import Info from "../Components/Info"
import front from "../images/icons8-front-end-64.png";
import back from "../images/icons8-backend-development-64.png";
import SDS from "../images/SDS.svg"
import fast from "../images/fastLogo.png"
import freelance from "../images/freelance.png";
import coursera from "../images/coursera.png"

const ServicesPage = () => {
    const services = [
        { img: back, sname: "AI & RAG Systems Integration" },
        { img: back, sname: "LLM & VLM Fine-Tuning" },
        { img: front, sname: "Full-Stack Web Apps (Next.js/React)" },
        { img: back, sname: "Scalable REST APIs (FastAPI/Node)" },
    ]
    
    const s = [
        { 
            img: SDS, 
            company: "Snow Dream Studio", 
            date: "Feb 2026 – Jun 2026", 
            mname: "MERN Stack Developer", 
            desc: "Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js. Built reusable React components and Next.js pages with optimized performance and responsive layouts."
        },
        { 
            img: freelance, 
            company: "Freelance", 
            date: "Sep 2025 – Nov 2025", 
            mname: "Backend Developer (FastAPI)", 
            desc: "Designed and developed scalable REST APIs using FastAPI and integrated AI-powered backend services. Optimized API performance, testing workflows, and deployment processes."
        },
        { 
            img: SDS, 
            company: "Snow Dream Studio", 
            date: "Jul 2023 – Sep 2023", 
            mname: "Frontend Intern", 
            desc: "Converted Figma designs into responsive React components and improved frontend usability and performance."
        }
    ]
    
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-10 mx-4 md:mx-12 lg:mx-24">
                <div className="col-span-1 h-fit lg:sticky top-0 rounded-xl bg-white text-black dark:bg-black dark:text-white border border-white/20 pb-4 dark:text-white">
                    <Info />
                </div>
                
                <div className="lg:col-span-2 rounded-2xl p-8 h-full overflow-y-auto bg-white text-black dark:bg-black dark:text-white border border-white/20 dark:text-white">
                    
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <h1 className="font-bold text-4xl md:text-5xl font-poppins">
                            Services I <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Offered</span>
                        </h1>
                        <a href="#/contact">
                            <div className="rounded-lg px-6 py-3 font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                <h1>Available for Hire</h1>
                            </div>
                        </a>
                    </div>
                    
                    <p className="text-base md:text-lg dark:text-white/70 text-gray-700 mb-12 leading-relaxed">
                        Transforming Ideas into Innovative Reality. Elevate Your Vision with 
                        <span className="font-semibold dark:text-white text-gray-900"> Expert Development Services!</span>
                    </p>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {services.map((data, index) => (
                            <div 
                                key={index} 
                                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-6 text-center rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                            >
                                <div className='bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 mb-4 flex items-center justify-center group-hover:shadow-lg transition-all duration-300'>
                                    <img src={data.img} className="w-12 h-12 object-contain" alt={data.sname} />
                                </div>
                                <h1 className="text-sm font-medium dark:text-white/90 text-gray-800">{data.sname}</h1>
                            </div>
                        ))}
                    </div>
                    
                    {/* Experience Section */}
                    <h1 className="font-bold text-3xl md:text-4xl mb-8 font-poppins">
                        Experience & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Recognition</span>
                    </h1>
                    
                    <div className="space-y-4">
                        {s.map((data, index) => (
                            <div 
                                key={index} 
                                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 overflow-hidden group p-6"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/10 pb-4 mb-3">
                                    {/* Company Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white/20 dark:bg-white/10 rounded-xl p-2 flex items-center justify-center flex-shrink-0">
                                            <img src={data.img} className="w-full h-full object-contain" alt={data.company} />
                                        </div>
                                        <div>
                                            <h2 className="font-semibold dark:text-white text-gray-800">{data.company}</h2>
                                            <p className="text-sm dark:text-white/60 text-gray-600">{data.date}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Role */}
                                    <div>
                                        <h3 className="font-semibold text-purple-400 text-lg md:text-right">{data.mname}</h3>
                                    </div>
                                </div>
                                {/* Description */}
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    {data.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage;