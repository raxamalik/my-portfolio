import React from "react";
import face from "../assets/images/face.png";

const Layout = () => {
  return (
    <div className="main grid grid-cols-12 gap-4 pt-12 pr-32 pl-24">
      <div className="section-1 col-span-5">
        <div className="relative image-container">
          <img className="h-64 z-10 relative" src={face} alt="Person's face" />
          <div className="absolute bottom-0 left-0 transform translate-y-1/2 text-blue-500 border-4 border-black p-4 rounded-lg bg-white shadow-lg w-[30%] z-0">
            <p>asd</p>
          </div>
        </div>
      </div>

      <div className="section-2 col-span-7">
        <div style={{ fontFamily: "Playfair Display, serif" }}>
          <div className="flex items-center gap-6">
            <h1 className="text-6xl font-semibold">Websites</h1>
            <i className="fas fa-arrow-right text-[#EB8015] border-[3px] py-3 px-10 rounded-full border-[#EB8015]"></i>
          </div>
          <div className="fit flex gap-2">
            <span className="text-6xl font-semibold">Fit For Purpose</span>{" "}
            <span className="w-4 h-4 rounded-full bg-[#4518F5] flex items-center justify-center text-2xl mt-9"></span>
          </div>
        </div>
        <p className="mt-3 text-xs font-roboto text-[#09051B] font-">
          I am a website designer who focuses on creating memorable websites.
          The aim isn’t to have a website that blends in with the rest; it’s to
          stand out from the crowd
        </p>
      </div>
    </div>
  );
};

export default Layout;
