import React from "react";
import DaysVideo from "./DaysVideo";

const DaysWeek = () => {
  return (
    <div name="daysofweek" className="w-full h-screen bg-[#1D1E1F]">
      <div className="grid grid-cols-2 ">
        <div className="relative h-screen">
          <div className="hidden lg:flex flex flex-col absolute top-[35%] left-0 font-bold">
            <ul>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-red-500">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Sunday
                </div>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-orange-400">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Monday
                </div>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-yellow-400">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Tuesday
                </div>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-green-500">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Wednesday
                </div>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-blue-500">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Thursday
                </div>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-indigo-600">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Friday
                </div>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-107px] hover:ml-[-10px] duration-300 bg-violet-600">
                <div className="flex justify-between items-center w-full text-gray-100">
                  Saturday
                </div>
              </li>
            </ul>
          </div>
          {/* <ul>
            <li>Days of the Week</li>
            <li>Sunday</li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
          </ul> */}
        </div>
        <div className="h-screen ">
          <DaysVideo className=""></DaysVideo>
        </div>
      </div>
    </div>
  );
};

export default DaysWeek;
