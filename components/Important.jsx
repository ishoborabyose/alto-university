import React from "react";

export const Important = () => {
  return (
    <div className=" mt-[160px] sm:mt-[400px] max-w-6xl mx-auto ">
      <h1 className="text-[#2d2d2d]  text-center text-[28px] leading-[33px] mb-[16px]">
        Important Link
      </h1>

      <div className="grid sm:gap-4 sm:grid-cols-1 grid-cols-3">
        {[1, 2, 3].map((item) => {
          return (
            <div className="flex sm:justify-center group  items-center">
              <img
                className="rounded-full mr-[1.6rem] group-hover:opacity-80  sm:h-[64px] sm:w-[64px]"
                src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/quicklinks/public/2018-06/pen.png?h=3ea932e1&itok=5VqIRIDk"
              />
              <span className="text-[#2d2d2d] text-[21px] group-hover:bg-[#e3e3e3] leading-[25px]">
                For Personal
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
