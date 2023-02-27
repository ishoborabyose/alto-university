import React from "react";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" py-[56px] mt-[56px] sm:px-4 border-t-2 border-t-black ">
      <div className="max-w-7xl mx-auto ">
        <div className="pb-10">
          {[1].map((item) => {
            return (
              <div className="grid sm:grid-cols-1 grid-cols-4">
                <div className="text-[#2d2d2d] leading-[26px] text-[18px] font-normal">
                  <img src="/images/logo1.PNG" />
                  <p>Aalto University</p>
                  <p>P.O. Box 11000 (Otakaari 1B)</p>
                  <p>FI-00076 AALTO</p>
                  <p>Switchboard: +358 9 47001</p>
                  <div>
                    <h4 className="leading-[25px] mb-[8px] mt-[16px] text-[21px] text-[#2d2d2d]">
                      Follow us:
                    </h4>
                    <div className="grid grid-cols-7">
                      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                        return (
                          <div>
                            <FaFacebookF className="hover:bg-[#e3e3e3] " />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <ul className="text-[16px] leading-[19px] text-[#2d2d2d] ">
                  <li className="leading-[25px] text-[21px] mb-[8px] text-[#2d2d2d]">
                    Quicklinks
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="leading-[25px] mb-[8px] text-[21px] text-[#2d2d2d]">
                    Latest
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                </ul>

                <ul className="text-[16px] leading-[19px] text-[#2d2d2d]">
                  <li className="leading-[25px] mb-[8px] text-[21px] text-[#2d2d2d]">
                    Contact
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="leading-[25px] mb-[8px] text-[21px] text-[#2d2d2d]">
                    For students
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1 ">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                  <li className="underline hover:bg-[#e3e3e3]  mb-1">
                    IT Department
                  </li>
                </ul>

                <div>
                  <h1 className="text-[28px] mb-[16px] leading-[33px] text-[#2d2d2d]">
                    Together towards a better world.
                  </h1>
                  <p className="text-[#2d2d2d] leading-[26px] mb-[24px] text-[18px] font-normal">
                    Support new ideas, research, work and leadership development
                    towards a stronger Finland.
                  </p>
                  <button className="bg-[#2d2d2d] text-white hover:bg-[#ffcd00] hover:text-[#2d2d2d] cursor-pointer text-center py-[10px] px-[31px] leading-[18px] border border-[#2d2d2d] rounded-full">
                    See All Aalto University news
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex sm:flex-col justify-between text-[16px] leading-[19px] text-[#2d2d2d] font-normal underline  border-t-2 border-t-black py-3">
          <div className="flex gap-6 sm:flex-col sm:items-start items-center">
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <h5 className="hover:bg-[#e3e3e3] cursor-pointer">
                  Privacy Notice
                </h5>
              );
            })}
          </div>
          <div className="flex sm:flex-col sm:items-start gap-6 items-center">
            {[1, 2, 3].map(() => {
              return (
                <h5 className="hover:bg-[#e3e3e3] cursor-pointer">
                  Privacy Notice
                </h5>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
