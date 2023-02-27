import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [show]);

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
            <CiSearch className="border-r-2 px-1 border-r-black w-10" />
            <h2 className="px-1">Menu</h2>
          </div>
        </div>
        <div className=" sm:hidden">
          {["1,2,3,4,5,6"].map((item, index) => {
            return (
              <div key={index}>
                <ul className="flex  text-[16px] py-[10px] gap-6 leading-[19px] text-[#2d2d2d]">
                  <Link
                    href="personel"
                    className="cursor-pointer hover:bg-[#e3e3e3]  py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center"
                  >
                    {" "}
                    <BiLockAlt />
                    For personnel
                  </Link>

                  <Link
                    href="support"
                    className="hover:bg-[#e3e3e3] cursor-pointer  py-[4px] pr-10 pl-[4px] gap-2 leading-[19px] text-center flex items-center  border-r border-r-[#2d2d2d]"
                  >
                    {" "}
                    <AiOutlineHeart /> Support us
                  </Link>
                  <Link
                    href="en"
                    className=" cursor-pointer hover:bg-[#e3e3e3] py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center"
                  >
                    {" "}
                    <TbWorld /> EN <MdKeyboardArrowDown />
                  </Link>
                  <li
                    onClick={() => setShow(!show)}
                    className="hover:bg-[#e3e3e3] cursor-pointer py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center"
                  >
                    <CiSearch /> Search
                  </li>
                  <li className="hover:bg-[#e3e3e3] cursor-pointer py-[4px] pr-[20px] pl-[4px] gap-2 leading-[19px] text-center flex items-center ">
                    <FiMenu /> Menu
                  </li>
                  <Link
                    href="login"
                    className=" py-[10px] hover:bg-[#ffcd00] hover:text-[#2d2d2d] cursor-pointer items-center flex  px-[31px] text-center text-white bg-[#2d2d2d] rounded-full"
                  >
                    Login
                  </Link>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {show && (
        <div className="bg-black w-full fixed duration-500 overflow-y-scroll opacity-80  top-0 h-full">
          <div className=" bg-[#FFCD00] pb-[70px] w-full relative -top-20 ">
            <div
              onClick={() => setShow(!show)}
              className="mt-20 pt-10 pr-12 ml-auto z-20 max-w-[10px]"
            >
              <VscChromeClose className="w-10 h-10 cursor-pointer" />
            </div>
            <span className="text-[21px] leading-[21px] text-black ml-96 ">
              Search
            </span>
            <div className="mx-auto rounded-full relative mt-10 flex w-[50%]">
              <div className=" w-8 h-8 absolute top-[30%]  right-3">
                <CiSearch className="w-5 h-5 cursor-pointer" />
              </div>
              <input className="w-full rounded-full p-4 bg-[#FFCD00]     border-2 border-black" />
            </div>
          </div>

          <div className=""></div>
        </div>
      )}
    </div>
  );
};
