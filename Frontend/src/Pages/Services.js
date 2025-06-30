import React from "react";
import fromt from "../images/fastLogo.png"
import Info from "../Components/Info"
import front from "../images/icons8-front-end-64.png";
import back from "../images/icons8-backend-development-64.png";
import SDS from "../images/SDS.svg"
import fast from "../images/fastLogo.png"
import freelance from "../images/freelance.png";
import coursera from "../images/coursera.png"
import { Link } from "lucide-react";
const ServicesPage=()=>{
      const services=[
        {img:front,sname:"Front-End Development"},
        {img:back,sname:"Backend Development"},
        {img:back,sname:"Programming Assignments (C++)"},
        {img:back,sname:"Linux Tasks"},
     
    ]
    const s=[
        {img:SDS,company:"Snow Dream Studio june-july 2023",mname:"React Developer",viewLink:"https://github.com/yashalcoder/Blog-Site-By-React-Tailwindcss"},
        {img:fast,company:"FAST National University August2024-January2025" ,mname:"Teacher Assistant (Object Oriented Programming)",viewLink:"https://github.com/yashalcoder/Blog-Site-By-React-Tailwindcss"},
        {img:freelance,company:"Freelance Work june2025-present",mname:"Linux & Python ",viewLink:"https://github.com/yashalcoder/Blog-Site-By-React-Tailwindcss"},
         {img:coursera,company:"Coursera courses january2023-Feb2023",mname:"Front-end course",viewLink:"https://www.coursera.org/account/accomplishments/verify/5BZDP267CP3H"},

    ]
    return (<>
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-10  mx-4 md:mx-12 lg:mx-24">
        <div className="col-span-1 h-fit lg:sticky top-0   rounded-xl bg-white text-black dark:bg-black  pb-4 dark:text-white">
            <Info/>
        </div>
        <div className="lg:col-span-2  rounded-lg  p-8 h-full overflow-y-auto bg-white text-black dark:bg-black   dark:text-white">
            <div className="flex justify-between">
                 <h1 className="font-bold text-4xl">Services I <span className="text-blue-700 font-extrabold">Offered</span></h1>
                <a href="/contact"><div className="rounded-md p-2 font-medium bg-gray-200 dark:bg-gray-900 text-blue-700 cursor-pointer transition-all duration-300 hover:scale-105 "><h1>Avaialable for Hire</h1></div></a>
            </div> 
              <p className="font-bold text-gray-400 pt-6 w-[65%]">Transforming Ideas into Innovative Reality, Elevate Your Vision with Our <span className="text-black dark:text-white">Expert  Development Services!</span></p>
            <div className="grid grid-cols-2 lg:grid-cols-4 p-2 gap-7 pt-10 text-black dark:text-white">
                {services.map((data,index)=>(
                  <div key={index} className="bg-gray-200 p-5 text-center dark:bg-gray-900 rounded-lg ">
                    <div className='bg-black rounded-lg p-6 mb-2'>
                    <img src={data.img} className=" "/> 
                    </div>
                    {/* <img src={data.img} className=" bg-white p-5 dark:bg-black rounded-lg "/> */}
                    <h1 className="">{data.sname}</h1>
                 </div>
                ))}
              </div>
            <h1 className="font-bold text-3xl ">Awards and Recognition</h1>
            {s.map((data,index)=>(
               <div className="bg-gray-200 dark:bg-gray-700 grid grid-cols-1 lg:grid-cols-3 p-2 mt-5 rounded-lg dark:hover:bg-gray-900 dark:hover:border border-black" key={index}>
                <div className="flex gap-5 ">
                    <img src={data.img} className="w-8 h-11"/>
                    <h1>{data.company}</h1>
                </div>
                <div className="font-bold text-center m-4">
                    <h1>{data.mname}</h1>
                </div>
                <div className="m-4 justify-end text-white bg-black p-2 w-32 text-center rounded-lg hover:translate-x-5">
                    <a href={data.viewLink}>View project</a>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>)
}
export default ServicesPage;