import React from "react";

export const Follow = () => {
  return (
    <div className="bg-[#FFCD00] sm:py-28 py-40 mt-[76px] sm:mt-[40px]">
      <div>
        <div className="mx-auto text-center">
          <h1 className="font-bold leading-[88px] sm:text-3xl text-[75px] text-black">
            Follow us
          </h1>
          <div className="flex gap-4 sm:flex-col justify-center mt-2">
            {["facebook", "twitter", "instagram", "linkedin"].map((item) => {
              return (
                <div>
                  <span className=" hover:bg-white text-[36px] sm:text-3xl sm:font-semibold sm:text-[18px] sm:leading-[21px] leading-[42px] font-normal underline">
                    {item}
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
