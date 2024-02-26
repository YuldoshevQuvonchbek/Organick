import React from "react";
import { ButtonIcon } from "../../assets/components/button";

export const Button = ({ text, color, textColor, hidden, border }) => {
  return (
    <button
      className={` ${border} border-arapawa text-nowrap  cursor-pointer rounded-2xl text-xl font-bold flex gap-2 items-center pt-7 pb-7 pl-10 pr-10 ${textColor}  ${color}`}
    >
      {text}
      <div className={`${hidden}`}>
        <ButtonIcon />
      </div>
    </button>
  );
};
