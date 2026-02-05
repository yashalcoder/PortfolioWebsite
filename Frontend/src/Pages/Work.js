import Project1 from "../images/project1.png";
import React, { useState } from "react";
import Info from "../Components/Info";
import Project2 from "../images/project2.png"
import Project3 from "../images/project3.png"
import Poject4 from "../images/project4.png"
import Project5 from "../images/project5.png"
const WorksPage = () => {
    const [activeTab, setActiveTab] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Milan Fashion",
            category: "frontend",
            description: "A complete fashion app with payment integration stripe",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: Project1, // Replace with your image

            liveLink: "https://milan-fashion-frotend.vercel.app/",
            githubLink: "https://github.com/yashalcoder/milan-fashion_frotend.git",
            color: "from-purple-500 to-pink-500"
        },
        
        {
            id: 2,
            title: "Baymax+",
            category: "fullstack",
            description: "Doctor patient ",
            tech: ["React", "Tailwind CSS", "Firebase"],
            image: Project3,
            liveLink: "https://github.com/yashalcoder/Baymax_frontend.git",
            githubLink: "https://github.com/yashalcoder/Baymax_frontend.git",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Blog Management System",
            category: "frontend",
            description: "Dynamic blog platform with rich text editor and category management",
            tech: ["React", "Tailwind CSS", "Firebase"],
            image:Project2,
            liveLink: "https://blog-site-by-react-tailwindcss.vercel.app/",
            githubLink: "https://github.com/yashalcoder/Blog-Site-By-React-Tailwindcss.git",
            color: "from-blue-500 to-cyan-500"
        },
        // {
        //     id: 3,
        //     title: "Task Management API",
        //     category: "backend",
        //     description: "RESTful API for task management with authentication and authorization",
        //     tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
        //     image: "project3.jpg",
        //     liveLink: "https://example.com",
        //     githubLink: "https://github.com/yashalcoder",
        //     color: "from-green-500 to-emerald-500"
        // },
        {
            id: 4,
            title: "Doctor Dashboard",
            category: "frontend",
            description: "Real time appointment scheduler",
            tech: ["React","tailwindcss"],
            image: Poject4,
            liveLink: "https://smart-appointmnet-sceduler.vercel.app/",
            githubLink: "https://github.com/yashalcoder/smart-appointmnet-sceduler.git",
            color: "from-orange-500 to-red-500"
        },
         {
            id: 5,
            title: "Seo Crack",
            category: "frontend",
            description: "",
            tech: ["React","tailwindcss"],
            image: Project5,
            liveLink: "https://react-project-o69a1e8hn-yashalrafique-gmailcoms-projects.vercel.app/",
            githubLink: "https://github.com/yashalcoder/ReactProject.git",
            color: "from-orange-500 to-red-500"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Ali Haider",
            role: "Founder of",
            company: "Neurotank",
            image: "avatar1.jpg", // Replace with your image
            rating: 4,
            text: "Yashal delivered exceptional work on our contentRealm platform. Her attention to create frontend from design good. recommended!",
            date: "December 2025"
        },
        {
            id: 2,
            name: "Muneeb",
            role: "Approach from linkdin",
           
            image: "avatar2.jpg",
            rating: 3,
            text: "Working with Yashal was a great experience.She completed the project ahead of schedule and the code quality was good. Will definitely work together again!",
            date: "August 2025"
        },
       
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' }
    ];

    const filteredProjects = activeTab === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeTab);

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-600"}>
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-10 mx-4 md:mx-12 lg:mx-24 ">
                <div className="bg-white text-black dark:bg-black dark:text-white col-span-1 h-fit lg:sticky top-0 rounded-xl  border border-white/20 pb-4 dark:text-white">
                    <Info />
                </div>

                <div className="bg-white text-black dark:bg-black dark:text-white lg:col-span-2 rounded-2xl p-8 h-full overflow-y-auto border border-white/20 dark:text-white">
                    
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="font-bold text-4xl md:text-5xl font-poppins mb-4">
                            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
                        </h1>
                        <p className="text-base md:text-lg dark:text-white/70 text-gray-700 leading-relaxed">
                            Showcasing my recent projects and client testimonials. Each project represents my commitment to 
                            <span className="font-semibold dark:text-white text-gray-900"> quality and innovation.</span>
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                                    activeTab === category.id
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                                        : 'bg-white/10 dark:bg-white/5 border border-white/20 dark:text-white/70 hover:bg-white/20 dark:hover:bg-white/10'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                            >
                                {/* Project Image */}
                                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                    <img src={project.image}/>
                                        
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-800">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm dark:text-white/70 text-gray-600 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs px-3 py-1 bg-white/20 dark:bg-white/10 rounded-full dark:text-white/80 text-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-white/20 dark:bg-white/10 border border-white/30 dark:text-white text-gray-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white/30 dark:hover:bg-white/20"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials Section */}
                    <div className="mt-16">
                        <h2 className="font-bold text-3xl md:text-4xl font-poppins mb-4">
                            Client <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
                        </h2>
                        <p className="text-base dark:text-white/70 text-gray-700 mb-8">
                            What my clients say about working with me
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold dark:text-white text-gray-800">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm dark:text-white/60 text-gray-600">
                                                {testimonial.role}  {testimonial.company}
                                            </p>
                                            <StarRating rating={testimonial.rating} />
                                        </div>
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="dark:text-white/80 text-gray-700 italic mb-4 leading-relaxed">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Date */}
                                    <p className="text-xs dark:text-white/50 text-gray-500">
                                        {testimonial.date}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Let's Work Together!
                        </h3>
                        <p className="text-white/90 mb-6">
                            Have a project in mind? Let's create something amazing together.
                        </p>
                        <a href="/contact">
                            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Get In Touch →
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorksPage;