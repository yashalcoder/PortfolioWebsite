import React from "react";

const ProgressBar = ({ progress, color,name }) => {
  return (
    <div className=" rounded-md w-full my-2 p-1">
      <div className={`${color} ${progress} h-4 rounded-md transition-all duration-500`}> </div>
      <h1 className="mt-1 text-sm font-bold">{name}</h1>
    </div>
  );
};

export default ProgressBar;
