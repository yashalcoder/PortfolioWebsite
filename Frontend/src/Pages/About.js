import team from "../images/teamCollab.jpg";

function About() {
  const progress = [
    { color: "bg-red-900", progress: "w-[70%]", name: "React" },
    { color: "bg-yellow-500", progress: "w-[100%]", name: "Tailwind css" },
    { color: "bg-blue-700", progress: "w-[50%]", name: "MERN" },
    { color: "bg-green-500", progress: "w-[60%]", name: "API Integration" }
  ];

  return (
    <>
      <div className=" p-11 md:p-16 bg-white text-black dark:bg-black dark:text-white  mx-24">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins">
              Hi, This is <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Yashal Rafique</span> 👋
            </h1>
            <p className="text-xl md:text-2xl font-poppins dark:text-white/90 text-gray-800">
              I am a passionate <span className="font-semibold text-purple-400">Full-stack developer</span> 🖥️ having 1 year experience
            </p>
            <p className="text-base md:text-lg dark:text-white/70 text-gray-700 leading-relaxed">
              I love building user-friendly interfaces and solving real-world problems through code. 
              In my free time, I enjoy learning new technologies and contributing to open-source.
            </p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <img 
              src={team} 
              alt="Team collaboration" 
              className="relative rounded-lg shadow-2xl w-full transform transition duration-300 hover:scale-105" 
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="text-center p-8 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">1</h2>
            <p className="dark:text-white/60 text-gray-600 text-sm uppercase tracking-wider">Year of Experience</p>
          </div>
          <div className="text-center p-8 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">1</h2>
            <p className="dark:text-white/60 text-gray-600 text-sm uppercase tracking-wider">Industry work</p>
          </div>
          <div className="text-center p-8 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">4</h2>
            <p className="dark:text-white/60 text-gray-600 text-sm uppercase tracking-wider">Projects Completed</p>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-poppins dark:text-white text-gray-800">Technical Skills 💻</h2>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              {progress.map((p, index) => {
                return (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-lg dark:text-white text-gray-800">{p.name}</span>
                      <span className="dark:text-white/60 text-gray-600">{p.progress.replace('w-[', '').replace(']', '')}</span>
                    </div>
                    <div className="w-full bg-white/20 dark:bg-white/10 rounded-full h-3 overflow-hidden">
                      <div className={`${p.color} ${p.progress} h-3 rounded-full transition-all duration-1000 ease-out`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education and Soft Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins dark:text-white text-gray-800">Education 🎓</h2>
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Bachelor's in Computer Science
            </h3>
            <p className="dark:text-white/70 text-gray-700 mb-1">
              National University of Computer and Emerging Sciences (FAST)
            </p>
            <p className="dark:text-white/50 text-gray-500 text-sm">2022-2026</p>
          </div>

          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-poppins dark:text-white text-gray-800">Soft Skills 🌟</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 dark:text-white/80 text-gray-700">
                <span className="text-purple-400 text-xl">✓</span> 
                <span>Team Collaboration</span>
              </li>
              <li className="flex items-center gap-3 dark:text-white/80 text-gray-700">
                <span className="text-purple-400 text-xl">✓</span> 
                <span>Time Management</span>
              </li>
              <li className="flex items-center gap-3 dark:text-white/80 text-gray-700">
                <span className="text-purple-400 text-xl">✓</span> 
                <span>Problem Solving</span>
              </li>
              <li className="flex items-center gap-3 dark:text-white/80 text-gray-700">
                <span className="text-purple-400 text-xl">✓</span> 
                <span>Adaptability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;