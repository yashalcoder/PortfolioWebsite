import React from 'react'
import Info from '../Components/Info';
import ProgressBar from '../Components/Progress';
import fast from "../images/fastLogo.png";
import team from "../images/teamCollab.jpg";
function About() {
  const progress=[
    {color:"bg-red-900",progress:"w-[70%]",name:"React"},
    {color:"bg-yellow-500",progress:"w-[100%]",name:"Tailwind css"},
    {color:"bg-blue-700",progress:"w-[50%]",name:"MERN"},
    {color:"bg-green-500",progress:"w-[60%]",name:"API Integration" }
  ]
  return (
    <>
   <div className='grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-10  mx-4 md:mx-12 lg:mx-24'>
     <div className='col-span-1 h-fit lg:sticky top-0   rounded-xl bg-white text-black dark:bg-black  pb-4 dark:text-white '>
     <Info/>
     </div>
     <div className='lg:col-span-2  rounded-lg  p-8 h-full overflow-y-auto bg-white text-black dark:bg-black   dark:text-white'> 
        <h1 className='font-bold text-3xl'>Hi, This is<span className='text-blue-800'> Yashal Rafique</span> 👋</h1>
        <p className='font-semibold text-xl dark:text-gray-400'>I am a passionate <span className='font-bold text-white'> Full-stack developer 🖥️</span><br></br> having 1.5 year experience</p>
        <p className='font-semibold text-xl dark:text-gray-400'>I love building user-friendly interfaces and solving <span className='font-bold text-white'>real-world problems</span> through code. 
    In my free time, I enjoy learning new technologies and contributing to open-source.</p>
      <div className='flex '>
        <div className='mt-4 p-3'>
          <h1 className='text-4xl fonr-bold'>1+</h1>
          <h2 className='dark:text-gray-600 text-md font-semibold'>Year of Experience</h2>
        </div>
        <div className='mt-4 p-3'>
          <h1 className='text-4xl fonr-bold'>1</h1>
          <h2 className='dark:text-gray-600 text-md font-semibold'>Industory work</h2>
        </div>
        <div className='mt-4 p-3'>
          <h1 className='text-4xl fonr-bold'>4</h1>
          <h2 className='dark:text-gray-600 text-md font-semibold'>Projects Completed</h2>
        </div>
      </div>
      <div className=''>
        {progress.map((p)=>{
          return(
            <ProgressBar key={p.index} color={p.color} progress={p.progress} name={p.name}/>
        )})}
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold dark:text-white mb-2">Education 🎓</h2>
        <div className='flex gap-6'>
          <img src={fast} className='w-16'/>
          <p className="dark:text-gray-300">
          Bachelor's in Computer Science   <span className='font-bold '>(2022-2026)</span> <br />
          National University of Computer and Emerging Sciences (FAST)
        </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold dark:text-white mb-2">Soft Skills 🌟</h2>
        <ul className="list-disc pl-5 dark:text-gray-300">
          <li>Team Collaboration          </li>
          <li>Time Management</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
        </ul>
      </div>

          </div>
          
          </div>
          </>
        )
      }

      export default About
