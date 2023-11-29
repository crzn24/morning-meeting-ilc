import React from "react";

const WhatDay = () => {
  return (
    <div name="whatday" className="w-full h-screen bg-[#1D1E1F] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#f90000]">
            What day is it?
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="bg-slate-200 shadow-md shadow-[#040c16] hover:scale-150 duration-500">
            <p className="my-4 text-orange-400 font-extrabold">Monday</p>
          </div>
          <div className="bg-slate-200 shadow-md shadow-[#040c16] hover:scale-150 duration-500">
            <p className="my-4 text-yellow-400 font-extrabold">Tuesday</p>
          </div>
          <div className="bg-slate-200 shadow-md shadow-[#040c16] hover:scale-150 duration-500">
            <p className="my-4 text-green-500 font-extrabold">Wednesday</p>
          </div>
          <div className="bg-slate-200 shadow-md shadow-[#040c16] hover:scale-150 duration-500">
            <p className="my-4 text-blue-500 font-extrabold">Thursday</p>
          </div>
          <div className="bg-slate-200 shadow-md shadow-[#040c16] hover:scale-150 duration-500">
            <p className="my-4 text-indigo-600 font-extrabold">Friday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDay;
