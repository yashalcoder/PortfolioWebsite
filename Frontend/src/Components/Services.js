import React from 'react'
import front from "../images/icons8-front-end-64.png";
import back from "../images/icons8-backend-development-64.png";

import ExpertArea from "../Components/ExpertArea";
import { ArrowBigRight, Link } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Services() {
    const services=[
        {img:front,sname:"Front-End Development"},
        {img:back,sname:"Backend Development"},
        {img:back,sname:"Programming Assignments (C++)"},
        {img:back,sname:"Linux Tasks"},
      ]
  return (
    <div>
       <div className="flex ">
             <h1 className="font-bold text-lg">Services I Offered</h1>      
             <div className="flex text-right border-b-2 border-blue-900 ml-auto hover:text-blue-950 cursor-pointer text-blue-900">     
                <h1><NavLink to="/servicespage">See All Services</NavLink></h1>
                <ArrowBigRight/>
              </div> 
              </div>
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
    </div>
  )
}

export default Services
