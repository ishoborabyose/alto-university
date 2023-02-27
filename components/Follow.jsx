import React from "react";
import { FaFacebookF } from "react-icons/fa";

export const Follow = () => {
  return (
    <div className="bg-[#FFCD00] py-40">
      <div>
        <div className="mx-auto text-center">
          <h1 className="font-bold leading-[88px] text-[75px] text-black">
            Follow us
          </h1>
          <div className="flex gap-4 sm:flex-col justify-center mt-2">
            {[1, 2, 3, 4].map((item) => {
              return (
                <div>
                  <span className=" hover:bg-white text-[36px] leading-[42px] font-normal underline">
                    Facebook
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
