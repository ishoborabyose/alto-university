import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`bg-white border-b-2 border-b-black fixed w-full z-10 `}>
      <div
        className={` max-w-[85rem]  mx-auto flex  duration-500 justify-between ${
          scrolled ? " py-0 " : " py-[20px]"
        }`}
      >
        <div className=" text-[#2d2d2d] sm:hidden">
          {scrolled ? (
            <img
              className="h-[28px] w-[40px] mt-4 "
              src="/images/logoSmall.png"
            />
          ) : (
            <img className="h-[69px] w-[98px]" src="/images/logo1.PNG" />
          )}
        </div>

        <div className="hidden sm:grid grid-cols-2 gap-60">
          <div>
            <img className="h-[28px] w-[40px]" src="/images/logoSmall.png" />
          </div>

          <div className="flex  justify-center items-center">
            <CiSearch className="border-r-2 px-1 border-r-black w-10  " />
            <h2 className="px-1">Menu</h2>
          </div>
        </div>
        <div className=" sm:hidden">
          {["1,2,3,4,5,6"].map((item, index) => {
            return (
              <div key={index}>
                <ul className="flex  text-[16px] py-[10px] gap-10 leading-[19px] text-[#2d2d2d]">
                  <li className="cursor-pointer hover:bg-[#e3e3e3]  py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center">
                    {" "}
                    <BiLockAlt />
                    For personnel
                  </li>
                  <li className="hover:bg-[#e3e3e3] cursor-pointer  py-[4px] pr-10 pl-[4px] gap-2 leading-[19px] text-center flex items-center  border-r border-r-[#2d2d2d]">
                    {" "}
                    <AiOutlineHeart /> Support us
                  </li>
                  <li className=" cursor-pointer hover:bg-[#e3e3e3] py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center">
                    {" "}
                    <TbWorld /> EN <MdKeyboardArrowDown />
                  </li>
                  <li className="hover:bg-[#e3e3e3] cursor-pointer py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center">
                    <CiSearch /> Search
                  </li>
                  <li className="hover:bg-[#e3e3e3] cursor-pointer py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center ">
                    <FiMenu /> Menu
                  </li>
                  <li className=" py-[10px] hover:bg-[#ffcd00] hover:text-[#2d2d2d] cursor-pointer  px-[31px] text-center text-white bg-[#2d2d2d] rounded-full">
                    Login
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
