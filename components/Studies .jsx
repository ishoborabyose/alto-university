import React from "react";

export const Studies = () => {
  return (
    <div className="bg-[#F1F1F1] pt-[56px] mt-[56px] sm:px-4 pb-[96px]">
      <div className=" max-w-[84rem] mx-auto">
        <h1 className="text-[#2d2d2d] text-[28px] leading-[33px] mb-[16px]">
          Studies and courses open to all
        </h1>

        <div className="grid  sm:grid-cols-1 grid-cols-3 mt-[24px] gap-6">
          {[1, 2, 3].map((item) => {
            return (
              <div className="bg-white cursor-pointer group">
                <img
                  className="group-hover:opacity-80 "
                  src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2022-06/_DSC8513_Original.jpg?h=676a11fc&itok=t3s-HUoC"
                />

                <div className="mx-[2.4rem]">
                  <h3 className="text-[#2d2d2d] group-hover:bg-[#e3e3e3]  text-[21px] leading-[25px] font-normal mt-[1.6rem]">
                    Shrinking from the heat
                  </h3>
                  <p className="text-[18px] leading-[21px] mt-[2.5rem] text-[2d2d2d] mb-[1.6rem] font-normal">
                    Reactive Fabrics Responds to changes in temperature{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
