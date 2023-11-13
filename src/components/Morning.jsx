import React from "react";
import MorningVideo from "./MorningVideo";

const Morning = () => {
  return (
    <div name="morning" className="w-full h-screen bg-[#1D1E1F]">
      <div className="flex justify-center">
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
    </div>
  );
};

export default Morning;
