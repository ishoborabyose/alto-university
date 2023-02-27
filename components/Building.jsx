import React from "react";

export const Building = () => {
  return (
    <div className="mt-[72px] max-w-[84rem] sm:px-4 mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-2 gap-y-[20px] gap-x-[8px]">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <div>
              <img
                className="hover:opacity-80 cursor-pointer"
                src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/o_1800w_ah_n_nu/public/2021-11/Aalto_University_Quantum_Exhibition_Dipoli_16-10-2019_photo_Mikko_Raskinen_001.jpg?itok=VYThRuwV"
              />
              <span className="text-[14px] flex flex-wrap leading-[18px] text-[#4a4a4a] mb-[4px] pt-[4px]">
                Building Finland's first quantum computer. Photo: Aalto
                University / Mikko Raskinen.
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
