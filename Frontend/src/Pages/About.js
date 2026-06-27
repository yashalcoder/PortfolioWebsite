import team from "../images/teamCollab.jpg";

function About() {
  const progress = [
    { color: "bg-violet-600", progress: "w-[90%]", name: "AI/ML (PyTorch, LangChain, RAG, LLM Fine-Tuning)" },
    { color: "bg-indigo-600", progress: "w-[95%]", name: "Backend Engineering (FastAPI, Node.js, REST APIs)" },
    { color: "bg-blue-600", progress: "w-[90%]", name: "Frontend Development (React, Next.js, Tailwind CSS)" },
    { color: "bg-emerald-600", progress: "w-[85%]", name: "Databases & Deployment (MongoDB, SQL, AWS, Vercel)" }
  ];

  return (
    <>
      <div className="p-6 md:p-12 lg:p-16 bg-white text-black dark:bg-black dark:text-white mx-4 md:mx-12 lg:mx-24 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wider">
              Hi, This is <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Yashal Rafique</span> 👋
            </h1>
            <p className="text-xl md:text-2xl font-sans font-medium dark:text-slate-200 text-slate-700">
              Web & AI Engineer 🖥️🤖
            </p>
            <p className="text-sm md:text-base dark:text-slate-300 text-slate-600 leading-relaxed space-y-4">
              I am a software engineer dedicated to building intelligent solutions at the intersection of full-stack web development and artificial intelligence. My work ranges from crafting fast backend REST APIs to training and integrating Large Language Models (LLMs), Vision Language Models (VLMs), and custom RAG pipelines.
            </p>
            <p className="text-sm md:text-base dark:text-slate-300 text-slate-600 leading-relaxed">
              I hold a BS in Computer Science from FAST-NUCES and enjoy building products that address complex, real-world problems.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <img 
              src={team} 
              alt="Team collaboration" 
              className="relative rounded-2xl shadow-xl w-full transform transition duration-300 hover:scale-[1.02]" 
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition duration-300">
            <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">1+</h2>
            <p className="dark:text-slate-400 text-slate-600 text-xs uppercase tracking-wider font-semibold">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition duration-300">
            <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">3</h2>
            <p className="dark:text-slate-400 text-slate-600 text-xs uppercase tracking-wider font-semibold">Professional Roles</p>
          </div>
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition duration-300">
            <h2 className="text-5xl font-heading font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-2">9+</h2>
            <p className="dark:text-slate-400 text-slate-600 text-xs uppercase tracking-wider font-semibold">Projects Built</p>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 tracking-wider dark:text-white text-slate-800">Core Expertise 💻</h2>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
            <div className="space-y-6">
              {progress.map((p, index) => {
                return (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm md:text-base dark:text-slate-200 text-slate-700">{p.name}</span>
                      <span className="text-xs md:text-sm dark:text-slate-400 text-slate-600 font-semibold">{p.progress.replace('w-[', '').replace(']', '')}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div className={`${p.color} ${p.progress} h-2.5 rounded-full transition-all duration-1000 ease-out`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education and Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition duration-300">
            <h2 className="text-2xl font-heading font-bold mb-6 tracking-wider dark:text-white text-slate-800">Education 🎓</h2>
            <h3 className="text-lg font-bold text-violet-500 mb-1">
              BS in Computer Science
            </h3>
            <p className="dark:text-slate-200 text-slate-700 font-semibold mb-1">
              FAST - National University of Computer and Emerging Sciences
            </p>
            <p className="dark:text-slate-400 text-slate-600 text-sm mb-2">Graduation: 2022 - 2026</p>
            <p className="dark:text-slate-400 text-slate-600 text-sm">CGPA: 3.08 / 3.11</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition duration-300">
            <h2 className="text-2xl font-heading font-bold mb-6 tracking-wider dark:text-white text-slate-800">Professional Traits 🌟</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 dark:text-slate-300 text-slate-700 text-sm font-semibold">
                <span className="text-violet-500 text-lg">✓</span> 
                <span>Bilingual RAG Pipelines</span>
              </li>
              <li className="flex items-center gap-3 dark:text-slate-300 text-slate-700 text-sm font-semibold">
                <span className="text-violet-500 text-lg">✓</span> 
                <span>LLM Fine-Tuning (QLoRA)</span>
              </li>
              <li className="flex items-center gap-3 dark:text-slate-300 text-slate-700 text-sm font-semibold">
                <span className="text-violet-500 text-lg">✓</span> 
                <span>Vision Language Models</span>
              </li>
              <li className="flex items-center gap-3 dark:text-slate-300 text-slate-700 text-sm font-semibold">
                <span className="text-violet-500 text-lg">✓</span> 
                <span>REST API Optimization</span>
              </li>
              <li className="flex items-center gap-3 dark:text-slate-300 text-slate-700 text-sm font-semibold">
                <span className="text-violet-500 text-lg">✓</span> 
                <span>React & Next.js Workflows</span>
              </li>
              <li className="flex items-center gap-3 dark:text-slate-300 text-slate-700 text-sm font-semibold">
                <span className="text-violet-500 text-lg">✓</span> 
                <span>Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;