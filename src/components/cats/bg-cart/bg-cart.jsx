import React from "react";

export const BgCart = ({ title, text, img }) => {
  return (
    <div
      className=" bg-no-repeat pt-[109px] pb-[110px] max-w-[994px]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="pl-14">
        <p className="font-yellowtail text-wayt1">{text}</p>
        <h3 className=" text-wayt1">{title}</h3>
      </div>
    </div>
  );
};
