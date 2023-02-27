import React from "react";

export const Explore = () => {
  return (
    <div className="relative mt-[76px]">
      <img
        src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/s2560wc_1800w_400h_n/public/2020-01/unto_rautio_aalto_dsc5557_web.jpg?itok=vZ292N9N"
        className="w-full sm:object-cover sm:h-[250px]"
      />

      <div className="bg-[#ffcd00]  absolute left-20 sm:left-4 sm:right-2 sm:-bottom-80 -bottom-28 w-[1380px] sm:w-[358px] ">
        <div className="pt-[40px]  px-[40px] pb-[80px]">
          {" "}
          <h1 className="text-[75px] sm:text-[30px] sm:leading-[36px] leading-[88px] text-black font-bold">
            Explore Aalto University
          </h1>
        </div>

        <div className="sm:px-0 grid grid-cols-3 sm:grid-cols-1 ">
          {[1, 2, 3].map((item) => {
            return (
              <div className="border-t py-[40px] px-[88px] sm:border-r-0 border-r  border-r-black  sm:py-5 border-t-black">
                <h4 className="text-[28px] hover:bg-white text-center  leading-[33px] text-[#2d2d2d] font-normal underline">
                  Study at Aalto
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
