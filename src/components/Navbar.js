import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo pt-6 pr-32 pl-24 flex justify-between items-center">
          <div className="first-section flex items-center font-semibold gap-1">
            <div className="tb">
              <span className=" text-4xl font-semibold">T</span>
              <span className="text-[#eb8015] text-4xl font-semibold">B</span>
            </div>
            <div className="designs">
              <span className="text-2xl">Designs</span>
            </div>
          </div>
          <div className="lists flex items-center gap-12 font-semibold">
            <div className="relative inline-block">
              <h3 className="font-semibold">Home</h3>
              <div className="absolute left-1/2 -bottom-3 w-2 h-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4518F5]"></div>
            </div>
            <h3>Portfolio</h3>
            <h3>About Me</h3>
            <h3>Contact</h3>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
