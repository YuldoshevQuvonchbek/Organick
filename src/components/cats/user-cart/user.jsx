import React from "react";
import { Fasebook } from "../../../assets/components/fasebook";
import { Tvitter } from "../../../assets/components/tvitter";
import { Instagram } from "../../../assets/components/instagram";

export const UserCart = ({ name, text, img }) => {
  return (
    <>
      <div className="pb-8 max-w-[446px] transition-all duration-500  bg-cartColor hover:bg-wayt1  rounded-3xl hover:shadow-lg">
        <img src={img} alt="img" />
        <div className="pt-9 pl-7 flex    justify-between  pr-7">
          <div>
            <h3 className="mb-1 font-extrabold text-arapawa text-2xl">
              {name}
            </h3>
            <p className="text-xl font-normal font-yellowtail text-SeaLettuce">
              {text}
            </p>
          </div>

          <div className="flex justify-end  mt-9  gap-4   items-center">
            <Instagram />
            <Fasebook />
            <Tvitter />
          </div>
        </div>
      </div>
    </>
  );
};
