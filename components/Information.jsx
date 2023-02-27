import React from "react";

export const Information = () => {
  return (
    <div className="mt-[40px] py-[30px] max-w-[84rem] mx-auto sm:px-4">
      <h1 className="text-[#2d2d2d] text-[28px] leading-[33px] mb-[16px]">
        Explore our six schools
      </h1>

      <div className="grid sm:grid-cols-1 grid-cols-2 mt-[24px] gap-3">
        {[1, 2].map((item) => {
          return (
            <div className="border-2 group border-[#2d2d2d] flex cursor-pointer ">
              <div className="mx-[2.4rem] mt-[3rem] sm:mx-2 col-span-2">
                <h3 className="text-[#2d2d2d] group-hover:bg-[#e3e3e3]   text-[21px]  sm:text-[21px] sm:leading-[25px] leading-[25px] font-normal mt-[1.6rem]">
                  School of Arts, Design and Architecture
                </h3>
                <p className="text-[18px] sm:hidden leading-[26px] mt-[0.5rem]  text-[2d2d2d] font-normal">
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
