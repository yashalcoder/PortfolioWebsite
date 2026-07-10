import Project1 from "../images/project1.png";
import React, { useState } from "react";
import Info from "../Components/Info";
import Project2 from "../images/project2.png"
import Project3 from "../images/project3.png"
import Poject4 from "../images/project4.png"
import Project5 from "../images/project5.png"
import Project10 from "../images/project10.png"
import ContentRealm from "../images/contentRealm.png"
import RAG from "../images/RAG.png"
const WorksPage = () => {
    const [activeTab, setActiveTab] = useState('all');

    const projects = [
        {
            id: 1,
            title: "Baymax+ (Final Year Project)",
            category: "ai",
            description: "Bilingual AI healthcare platform integrating patient records, consultations, prescriptions, lab reports, and pharmacy services. Built NLP and RAG pipelines to transcribe Urdu/English consultations and extract clinical insights.",
            tech: ["FastAPI", "NLP", "LLMs", "RAG", "MERN"],
            image: Project3,
            liveLink: "https://baymax-frontend-zeta.vercel.app",
            githubLink: "https://github.com/yashalcoder/Baymax_fastapi_backend",
            color: "from-violet-600 to-indigo-800"
        },
        {
    id: 2,
    title: "Milan Fashion",
    category: "frontend",
    description: "Developed a modern and responsive fashion e-commerce frontend with Next.js, React, Tailwind CSS, and Framer Motion, featuring smooth animations, intuitive navigation, and a clean user experience.",
    tech: ["next.js", "tailwindcss", "react", "framer-motion"],
    image: Project1,
    liveLink: "https://milan-fashion-frotend.vercel.app/",
    githubLink: "https://github.com/yashalcoder/milan-fashion_frotend",
    color: "from-blue-600 to-indigo-800"
},
        // {
        //     id: 2,
        //     title: "Clinical RAG System (DiReCT)",
        //     category: "ai",
        //     description: "Developed a clinical RAG system on MIMIC-IV using TinyLlama and FAISS vector search, achieving 100% retrieval accuracy and zero hallucinations.",
        //     tech: ["PyTorch", "FAISS", "LangChain", "TinyLlama"],
        //     image: Project1,
        //     liveLink: "https://github.com/yashalcoder",
        //     githubLink: "https://github.com/yashalcoder",
        //     color: "from-blue-600 to-indigo-800"
        // },
        // {
        //     id: 3,
        //     title: "VLM Fine-Tuning for Doc-to-Markdown",
        //     category: "ai",
        //     description: "Fine-tuned a Vision Language Model using QLoRA for structured document understanding and markdown conversion, achieving 31.2 BLEU score.",
        //     tech: ["PyTorch", "QLoRA", "PEFT", "VLM"],
        //     image: Project5,
        //     liveLink: "https://github.com/yashalcoder",
        //     githubLink: "https://github.com/yashalcoder",
        //     color: "from-emerald-600 to-teal-800"
        // },
        // {
        //     id: 4,
        //     title: "Urdu Conversational Chatbot",
        //     category: "ai",
        //     description: "Built a Transformer-based chatbot trained on 50K+ Urdu conversations using an encoder-decoder architecture with BLEU 24.5.",
        //     tech: ["PyTorch", "Transformer", "Seq2Seq"],
        //     image: Project2,
        //     liveLink: "https://github.com/yashalcoder",
        //     githubLink: "https://github.com/yashalcoder",
        //     color: "from-purple-600 to-pink-800"
        // },
        {
            id: 5,
            title: "ContentRealm",
            category: "fullstack",
            description: "AI content automation platform that generates, schedules, and publishes social media posts across multiple networks from a single input.",
            tech: ["Next.js", "FastAPI", "LLMs"],
            image: ContentRealm,
            liveLink: "https://content-real-m.vercel.app",
            githubLink: "https://github.com/yashalcoder/ContentRealBackend",
            color: "from-rose-600 to-orange-600"
        },
        // {
        //     id: 6,
        //     title: "Task Manager",
        //     category: "fullstack",
        //     description: "A Trello-like collaborative Kanban workspace with board configurations, drag-and-drop tasks, real-time collaboration, and JWT auth.",
        //     tech: ["MongoDB", "Express", "React", "Node.js"],
        //     image: Project2,
        //     liveLink: "https://github.com/yashalcoder",
        //     githubLink: "https://github.com/yashalcoder",
        //     color: "from-sky-600 to-blue-800"
        // },
        {
            id: 7,
            title: "AI Chatbot & RAG System",
            category: "ai",
            description: "RAG-based chatbot using vector search and contextual retrieval to query private document repositories with high accuracy.",
            tech: ["Python", "LangChain", "Hugging Face", "FAISS"],
            image: RAG,
            liveLink: "https://github.com/yashalcoder/RAG",
            githubLink: "https://github.com/yashalcoder/RAG",
            color: "from-indigo-600 to-purple-800"
        },
        {
            id: 8,
            title: "PDF Converter",
            category: "fullstack",
            description: "Asynchronous document conversion server supporting multiple extensions, clean REST APIs, and real-time conversion updates.",
            tech: ["Next.js", "FastAPI"],
            image: Project10,
            liveLink: "http://convertion-frontend-yxwa.vercel.app",
            githubLink: "https://github.com/yashalcoder/Convertion_Backend",
            color: "from-teal-600 to-emerald-800"
        },
        {
            id: 9,
            title: "Blog Site",
            category: "frontend",
            description: "Fully responsive modern blog site designed with reusable component architecture, categories filtering, and optimized loading speeds.",
            tech: ["React", "Tailwind CSS"],
            image: Project2,
            liveLink: "https://blog-site-by-react-tailwindcss.vercel.app/",
            githubLink: "https://github.com/yashalcoder/Blog-Site-By-React-Tailwindcss.git",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Ali Haider",
            role: "Founder of",
            company: "Neurotank",
            image: "avatar1.jpg",
            rating: 5,
            text: "Yashal delivered exceptional work on our contentRealm platform. Her attention to detail and ability to translate complex design specs into responsive components was stellar.",
            date: "December 2025"
        },
        {
            id: 2,
            name: "Muneeb",
            role: "Collaborator",
            company: "LinkedIn client",
            image: "avatar2.jpg",
            rating: 5,
            text: "Working with Yashal was an absolute pleasure. She took ownership of the tasks, implemented clean code structures, and delivered ahead of schedule.",
            date: "August 2025"
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        // { id: 'ai', name: 'AI & Machine Learning' },
        // { id: 'fullstack', name: 'Full Stack' },
        // { id: 'frontend', name: 'Frontend' }
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
                                    <img src={project.image} alt="project img"/>
                                        
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
                        <a href="#/contact">
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