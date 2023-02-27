import React from "react";
import { IoMdLink } from "react";

export const Spotlight = () => {
  return (
    <div className="mt-[80px] sm:mt-10 max-w-[84rem] mx-auto sm:px-3">
      <div className="flex justify-between">
        <h1 className={`text-[#2d2d2d]  text-[28px] leading-[33px] mb-[16px]`}>
          Spotlight{" "}
        </h1>
        <button
          className="text-[#2d2d2d] hover:bg-[#ffcd00] hover:text-[#2d2d2d] hover:border-2 sm:hidden text-center 
        py-[10px] px-[31px] text-[16px] leading-[18px] border border-[#2d2d2d] rounded-full"
        >
          See All Aalto University news
        </button>
      </div>
      <p className="text-[21px] leading-[25px]">
        Find more current news and interesting events on the{" "}
        <span className="underline hover:bg-[#e3e3e3] ">
          News and events page
        </span>{" "}
        .
      </p>
      <div className="grid sm:grid-cols-1 grid-cols-3 mt-[24px] gap-3">
        {[1, 2, 3].map((item) => {
          return (
            <div className="border-2 group border-[#2d2d2d] cursor-pointer">
              <img
                src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/PXL_20220622_103655210_0.jpg?h=419eefd5&itok=NNEygIOY"
                className="group-hover:opacity-80 "
              />

              <div className="mx-[2.4rem] sm:mx-3 pb-3">
                <h3 className="text-[#2d2d2d] group-hover:bg-[#e3e3e3]  text-[21px] leading-[25px] font-normal mt-[1rem]">
                  Shrinking from the heat
                </h3>
                <p className="text-[18px] leading-[21px] mt-[2rem] text-[#2d2d2d] font-normal">
                  Reactive Fabrics Responds to changes in temperature{" "}
                </p>
                <p className="text-sm mt-[32px]  text-[#2d2d2d] ">
                  {" "}
                  <span className="border-r border-r-black pr-1">
                    21.2.2023
                  </span>{" "}
                  News
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="text-[#2d2d2d] hover:bg-[#ffcd00] hover:text-[#2d2d2d] hidden sm:block mt-[16px] text-center py-[10px] px-[31px] leading-[18px] border border-[#2d2d2d] rounded-full">
        See All Aalto University news
      </button>
    </div>
  );
};
