import React from "react";

export const Read = () => {
  return (
    <div className="bg-[#F1F1F1] pt-[56px] mt-[56px] sm:px-4  pb-[96px]">
      <div className=" max-w-7xl mx-auto">
        <h1 className="text-[#2d2d2d]  text-[28px] leading-[33px] mb-[16px]">
          Read about our research and donate
        </h1>
        <p className="text-[21px] leading-[25px]">
          At Aalto University, we create the conditions for innovation, economic
          growth, employment and wellbeing. A gift to the university is an
          investment in a better future.
        </p>

        <div className="grid sm:grid-cols-1 grid-cols-2 mt-[24px] gap-6">
          {[1, 2].map((item) => {
            return (
              <div className="bg-white cursor-pointer group">
                <img
                  src="https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2022-06/_DSC8513_Original.jpg?h=676a11fc&itok=t3s-HUoC"
                  className="group-hover:opacity-80"
                />

                <div className="mx-[2.4rem] sm:mx-2">
                  <h3 className="text-[#2d2d2d] group-hover:bg-[#e3e3e3]  text-[28px] leading-[33px] font-normal mt-[1.6rem]">
                    Research & Arts
                  </h3>
                  <p className="text-[21px] leading-[25px] mt-[2.5rem] text-[#2d2d2d] font-normal mb-[1.6rem]">
                    Our research focuses on seven key areas combining four core
                    competences in the fields of ICT, materials, arts, design
                    and business together with three grand challenges related to
                    energy, living environment, and health.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
