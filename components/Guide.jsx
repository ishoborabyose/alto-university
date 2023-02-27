import React from "react";
import { BsArrowRight } from "react-icons/bs";

export const Guide = () => {
  return (
    <div className="mt-[56px] sm:mt-0 max-w-[86rem] mx-auto">
      {[1, 2].map((item, index) => {
        return (
          <div>
            <div
              key={index}
              className={`items-center pt-[76px] sm:grid sm:grid-cols-1   ${
                index == 1 || index == 2 ? "flex flex-row-reverse  " : "flex "
              }`}
            >
              <img
                src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/1_333_800w_600h_n/public/2018-04/unto_rautio_aalto_unt9424_weblarge_jpg.jpg?h=0d9f7c6e&itok=blqBmH_o"
                className="w-[690px] h-[518px] sm:h-[350px] sm:w-full sm:object-contain "
              />

              <div className=" px-[56px] sm:px-4 ">
                <h2 className="text-[#2d232d] text-[28px] leading-[33px] font-normal mb-[16px]">
                  Campus - lively and thriving
                </h2>
                <p className="font-normal text-[#2d232d] text-[18px] leading-[26px] mb-[24px] ">
                  Aalto University's campus in Otaniemi is a renewable and
                  living environment for research, art, learning,
                  entrepreneurship and housing. The campus area inspires people
                  to collaborate
                </p>
                <div>
                  <span className="text-[#2d232d] group cursor-pointer  hover:bg-[#e3e3e3] mb-[8px] flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline ">
                    <BsArrowRight className="group-hover:translate-x-1 mr-2" />{" "}
                    Explore our vibrant innovation ecosystem
                  </span>
                  <span className="text-[#2d232d] group hover:bg-[#e3e3e3] cursor-pointer mb-[8px] flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline">
                    {" "}
                    <BsArrowRight className="group-hover:translate-x-1 mr-2" />{" "}
                    Explore our campus
                  </span>
                  <span className="text-[#2d232d] group  hover:bg-[#e3e3e3] cursor-pointer flex items-center text-center gap-1 font-normal text-[18px] leading-[22px] underline">
                    {" "}
                    <BsArrowRight className="group-hover:translate-x-1 mr-2" />
                    Book a space
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
