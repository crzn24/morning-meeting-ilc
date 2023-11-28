import React from "react";
import DaysVideo from "./DaysVideo";

const DaysWeek = () => {
  return (
    <div name="daysofweek" className="w-full h-screen bg-[#1D1E1F]">
      <div className="grid grid-cols-2 ">
        <div>
          <ul>
            <li>Days of the Week</li>
            <li>Sunday</li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
          </ul>
        </div>
        <div>
          <DaysVideo></DaysVideo>
        </div>
      </div>
    </div>
  );
};

export default DaysWeek;
