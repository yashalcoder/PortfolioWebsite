import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
export default function Darkmode (){
    const [isDark,setIsDark]=useState(false);
    const toggleTheme=()=>{
        const newTheme=!isDark;
       setIsDark(newTheme);
        if(newTheme)
        {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme","dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
      
    }
    useEffect(()=>{
        const savedTheme=localStorage.getItem("theme")=="dark";
        setIsDark(savedTheme);
        document.documentElement.classList.toggle("dark",savedTheme);
    },[]);
    
    return(
        
        <div onClick={toggleTheme} className="cursor-pointer bg-gray-200 rounded-full w-16 h-8 flex dark:bg-gray-800 items-center p-1 transition-all duration-300 ">
          <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isDark?"translate-x-8":" "}`}>
            {isDark?
        <Moon className=" rounded-full bg-white  text-gray-700"/>
        :
        <Sun className="rounded-full bg-white text-yellow-600 "/>    
        }
          </div>
        </div>
        
    );
}