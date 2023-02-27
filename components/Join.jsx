import React from "react";

export const Join = () => {
  return (
    <div className="bg-[#F1F1F1] pt-[56px] mt-[56px]  pb-[96px]">
      <div className=" max-w-[84rem] mx-auto sm:px-3">
        <div className="flex justify-between">
          <h1 className="text-[#2d2d2d] text-[28px] leading-[33px] mb-[16px]">
            Spotlight{" "}
          </h1>
          <button className="text-[#2d2d2d] hover:bg-[#ffcd00] hover:text-[#2d2d2d] sm:hidden text-center py-[10px] px-[31px] leading-[18px] border border-[#2d2d2d] rounded-full">
            See All Aalto University news
          </button>
        </div>
        <p className="text-[21px] leading-[25px]">
          Find more current news and interesting events on the{" "}
          <span className="underline hover:bg-[#e3e3e3] cursor-pointer">
            News and events page
          </span>{" "}
          .
        </p>
        <div className="grid  sm:grid-cols-1 grid-cols-3 mt-[24px] gap-6">
          {[1, 2, 3].map((item) => {
            return (
              <div className="border-2 group cursor-pointer border-[#2d2d2d]">
                <img
                  src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_690w_300h_d/public/2023-02/solvethesdgs_7.png?h=47551150&itok=pi8C7xPr"
                  className="group-hover:opacity-80"
                />

                <div className="mx-[2.4rem]  pb-3">
                  <h3 className="text-[#2d2d2d] group-hover:bg-[#e3e3e3] text-[28px] leading-[33px] font-normal mt-[1.6rem]">
                    Shrinking from the heat
                  </h3>
                  <p className="text-[21px] leading-[25px]mt-[2.5rem] text-[2d2d2d] font-normal">
                    Reactive Fabrics Responds to changes in temperature{" "}
                  </p>
                  <p className="text-sm mt-[32px] text-[#2d2d2d] ">
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

        <button className="text-[#2d2d2d] hover:bg-[#ffcd00] hover:text-[#2d2d2d] hidden sm:block mt-[20px] text-center py-[10px] px-[31px] leading-[18px] border border-[#2d2d2d] rounded-full">
          See All Aalto University news
        </button>
      </div>
    </div>
  );
};
