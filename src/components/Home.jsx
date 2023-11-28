import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1D1E1F]">
      {/* container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#f90000] text-lg text-center pb-2">Welcome to</p>
        <h1 className="text-4xl text-center sm:text-7xl font-bold text-[#ccd6f6] hover:scale-110 duration-500">
          ILC
        </h1>
        <h2 className="text-4xl text-center sm:text-7xl font-bold text-[#8892b0]"></h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
        <div className="flex flex-col items-center">
          {/* add group to class name and span to keep hover together on button */}
          <Link to="morning" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center  border-[#f90000] rounded-full hover:bg-[#f90000] hover:border-[#f90000]">
              Let's Go!
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>

          {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center bg-black border-[#FADE4B] rounded-full hover:border-white hover:shadow-md hover:shadow-[#F8E167]'>View Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
