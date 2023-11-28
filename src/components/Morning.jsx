import React from "react";
import MorningVideo from "./MorningVideo";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Morning = () => {
  return (
    <div name="morning" className="w-full h-screen bg-[#1D1E1F] relative">
      <div className="flex justify-center content-center absolute inset-0">
        <MorningVideo></MorningVideo>
        {/* <iframe className="w-full aspect-video" src="https://youtu.be/-0o79IMmAYE?si=ZJ-_4Wrhd7ZzZ86y"></iframe> */}
        {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-0o79IMmAYE?si=ZJ-_4Wrhd7ZzZ86y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
      </div>
      <div className="flex flex-col items-center absolute inset-x-0 bottom-0">
        <Link to="morningclass" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center  border-[#f90000] rounded-full hover:bg-[#f90000] hover:border-[#f90000]">
            Who is here?
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Morning;
