import React from "react";
import { Button } from "../button/button";

export const Hero = ({ img, text, title, center, button }) => {
  return (
    <div
      className={`bg-cover bg-center pb-[200px] pt-[200px]`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className=" container ">
        <div className={`max-w-[685px] pl-32  ${center} `}>
          <p className="font-yellowtail text-SeaLettuce text-4xl font-normal mb-2">
            {text}
          </p>
          <h1 className="  text-arapawa text-[70px] font-extrabold mb-6">
            {title}
          </h1>
          <div className={`${button}`}>
            <Button
              text={"Explore Now"}
              color={"bg-yellow"}
              textColor={"text-arapawa"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ml-auto mr-auto
