import React from 'react'
import { useState } from 'react';
import DeveloperAvatar from "../images/developer_avatar.png";
import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, PhoneCall } from "lucide-react";
import toast from "react-hot-toast";

function Info() {
  const [textToCopy, setTextToCopy] = useState("yashalrafique2@gmail.com");
  const copytoclipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied email successfully!");
    } catch {
      toast.error("Failed to copy email");
    }
  };

  const roleText = "Web & AI Engineer";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 150 }
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6">
      <div>
        <div className=" group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6 flex justify-center items-center p-2">
          <div className=" -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <img 
            className=" rounded-xl w-full object-cover max-h-[300px] transition duration-300 group-hover:scale-105" 
            src={DeveloperAvatar} 
            alt="Yashal Rafique - Web & AI Engineer" 
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-3xl font-heading mb-1 tracking-wider text-slate-900 dark:text-white">
            Yashal Rafique <span className="text-violet-500 font-sans">👋</span>
          </h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-xs uppercase font-semibold tracking-widest text-violet-600 dark:text-violet-400 mb-4 flex flex-wrap"
          >
            {roleText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
          <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            A developer and AI builder specializing in building high-performance <strong>FastAPI/Next.js/MERN</strong> web applications integrated with intelligent LLM features, NLP, and RAG systems.
          </p>
        </motion.div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a 
            href="tel:+923017670589"
            className="bg-violet-600 hover:bg-violet-700 text-white text-sm flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition duration-300 hover:scale-[1.02] shadow-sm hover:shadow"
          >
            <PhoneCall size={16} />
            Book a Call
          </a>
          <button 
            className="p-3 text-sm font-semibold flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition duration-300 hover:scale-[1.02] text-slate-700 dark:text-slate-200"  
            onClick={copytoclipboard}
          > 
            <Copy size={16} />
            Copy Email
          </button>
        </div>

        <div className="flex gap-4 items-center justify-center lg:justify-start">
          <a 
            href="https://github.com/yashalcoder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 p-2.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition duration-300"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/yashal-rafique" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 p-2.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition duration-300"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:yashalrafique2@gmail.com" 
            className="text-slate-600 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 p-2.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition duration-300"
            title="Email Address"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
