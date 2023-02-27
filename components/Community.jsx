import React from "react";

export const Community = () => {
  return (
    <div className=" mt-[80px] max-w-7xl mx-auto ">
      <h1 className="text-[#2d2d2d]  text-center text-[28px] leading-[33px] mb-[16px]">
        community voices
      </h1>

      <div className="grid  sm:gap-4 sm:grid-cols-1 grid-cols-3">
        {[1, 2, 3].map((item) => {
          return (
            <div className="flex group cursor-pointer sm:justify-center items-center">
              <img
                className="rounded-full mr-[1.6rem] sm:w-[64px] sm:h-[64px] group-hover:opacity-80"
                src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2021-11/Esa_Saarinen_Filosofia_ja_systeemiajattelu_online_02-2021_photo_Mikko_Raskinen_012%281%29.jpg?h=ac778ff2&itok=Dw8j1SUG"
              />
              <span className="text-[#2d2d2d] group-hover:bg-[#e3e3e3]  text-[21px] leading-[25px]">
                Watch our video
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
