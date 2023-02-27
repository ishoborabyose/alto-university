import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

export const Hamburger = () => {
  return (
    <div className="relative sm:pt-16 pt-28">
      <div className="bg-black py-[24px] sm:block hidden px-3  w-full ">
        <h2 className="text-white text-[36px] leading-[42px] font-normal mb-[16px]">
          Aalto student – New Student Guide is here to replace Into
        </h2>
        <p className="font-normal text-white text-[21px] leading-[25px] mb-[16px] ">
          The into.aalto.fi contents have been migrated to the Aalto.fi site
          with information and news for students.
        </p>
        <div>
          <span className="text-white mb-[8px] flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline ">
            <BsArrowRight /> Alzheimer's disease
          </span>
          <span className="text-white mb-[8px] flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline">
            {" "}
            <BsArrowRight /> ADHD
          </span>
          <span className="text-white flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline">
            {" "}
            <BsArrowRight />
            Alcoholism
          </span>
        </div>

        <div className=" flex justify-between mt-[16px] ">
          <IoIosArrowDropleft className="h-[32px] w-[32px] text-white" />
          <div className="flex gap-[37px] justify-end ">
            <div className="flex items-center sm:hidden">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    className={`${
                      index === 0
                        ? "w-[20px] bg-[#ffff] rounded-full mx-3 h-[20px] "
                        : "w-[10px] bg-[#ffff] rounded-full mx-3 h-[10px] "
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
          <IoIosArrowDropright className="h-[32px] w-[32px] text-white" />
        </div>
      </div>
      <img
        src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/3_0_1920w_640h_d/public/2023-01/Terveysteknologia%20aivot.png?h=6f14bdd4&itok=ORy_ai_6"
        className="w-full"
      />

      <div className="bg-black py-[24px] sm:hidden px-[40px] absolute sm:relative sm:left-0 sm:-bottom-0 left-32 -bottom-20 w-[680px] ">
        <h2 className="text-white text-[36px] leading-[42px] font-normal mb-[16px]">
          Aalto student – New Student Guide is here to replace Into
        </h2>
        <p className="font-normal text-white text-[21px] leading-[25px] mb-[16px] ">
          The into.aalto.fi contents have been migrated to the Aalto.fi site
          with information and news for students.
        </p>
        <div>
          <span className="text-white mb-[8px] group hover:bg-white mr-auto w-1/3  hover:text-[#2d2d2d] cursor-pointer  py-[4px] flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline ">
            <BsArrowRight className="group-hover:translate-x-2  mr-2" />{" "}
            Alzheimer's disease
          </span>
          <span className="text-white mb-[8px] group mr-auto w-1/3  hover:bg-white py-[4px] hover:text-[#2d2d2d] cursor-pointer flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline">
            {" "}
            <BsArrowRight className="group-hover:translate-x-2  mr-2" /> ADHD
          </span>
          <span className="text-white mr-auto w-1/3  hover:bg-white py-[4px] hover:text-[#2d2d2d] cursor-pointer flex items-center text-center group gap-1 font-normal text-[18px] leading-[22px] underline">
            {" "}
            <BsArrowRight className="group-hover:translate-x-2  mr-2" />
            Alcoholism
          </span>
        </div>

        <div className=" flex justify-between mt-[16px] ">
          <IoIosArrowDropleft className="h-[32px] w-[32px] hover:-translate-y-1 cursor-pointer  text-white" />
          <div className="flex gap-[37px] justify-end ">
            <div className="flex items-center sm:hidden">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <div
                    className={`${
                      index === 0
                        ? "w-[20px] bg-[#ffff] rounded-full mx-3 h-[20px] "
                        : "w-[10px] bg-[#ffff] rounded-full mx-3 h-[10px] "
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
          <IoIosArrowDropright className="h-[32px] cursor-pointer hover:-translate-y-1 w-[32px] text-white" />
        </div>
      </div>
    </div>
  );
};
