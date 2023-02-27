import React from "react";

export const Schools = () => {
  return (
    <div className="mt-[72px] max-w-[84rem] sm:px-4 mx-auto">
      <h1 className="text-[#2d2d2d] text-[28px] leading-[33px] mb-[16px]">
        Explore our six schools
      </h1>

      <p className="text-[18px] leading-[26px]">
        Scientific research and artistic activities are carried out at six
        schools and their departments and units.
      </p>
      <div className="grid sm:grid-cols-1 grid-cols-2 mt-[24px] sm:gap-0 gap-3">
        {[1, 2, 3, 4, , 5, 6].map((item) => {
          return (
            <div className="border-2 group border-[#2d2d2d] sm:h-[60%] flex cursor-pointer ">
              <div className="mx-[2.4rem] mt-[3rem] sm:mt-3 sm:mx-2 col-span-2">
                <h3 className="text-[#2d2d2d] group-hover:bg-[#e3e3e3]   text-[21px]  sm:text-[18px] sm:leading-[21px] leading-[25px] font-normal sm:mt-3 mt-[1.6rem]">
                  School of Arts, Design and Architecture
                </h3>
                <p className="text-[18px] sm:hidden leading-[26px] mt-[0.5rem] text-[2d2d2d] font-normal">
                  The school of arts , design and architecture is of the ...
                </p>
              </div>
              <img
                src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_160w_160h_d/public/2018-10/unto_rautio_aalto_dsc4772.jpg?h=d2ed74d8&itok=swcZJQs4"
                className="object-cover group-hover:opacity-80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
