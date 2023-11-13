import React from "react";
import placeholder from "../assets/classphotos/placeholder.jpeg";

const MorningClass = () => {
  return (
    <div
      name="morningclass"
      className="w-full h-screen bg-[#1D1E1F] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#f90000]">
            Good Morning to...
          </p>
          <p className="py-4"></p>
        </div>

        {/* container for student photos */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Elvira</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Kayden</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Jeremiah</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Jumanah</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Abbas</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">JB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Donnie</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Logan</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Titus</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Anthony</p>
          </div>
        </div>

        {/* container for teacher photos  */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Mr. Patrick</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Nicky</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Mr. Cruz</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Mrs. Bernert</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={placeholder} alt="HTML icon" />
            <p className="my-4">Ms. Washington</p>
          </div>
        </div>



      </div>
    </div>
  );
};

export default MorningClass;
