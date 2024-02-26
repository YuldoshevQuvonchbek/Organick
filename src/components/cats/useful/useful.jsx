import React from "react";
import { UserIcon } from "../../../assets/components/userIcon";
import { Button } from "../../button/button";

export const Useful = ({ img, title, data, user, text }) => {
  return (
    <div className="relative w-full">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="  bg-no-repeat -z-10  pt-11 pl-8 pb-[401px]  max-w-[677px] rounded-3xl"
      >
        <div className="w-[82px] text-center h-[82px]">
          <p className="text-arapawa font-roboto text-2xl font-extrabold pt-2 pl-6 pr-6 pb-2 bg-wayt1  rounded-[50%]">
            {data}
          </p>
        </div>
      </div>
      <div className="rounded-3xl  hover:shadow-2xl transition-all duration-500 bg-wayt1  z-10 absolute top-[247px] left-[36px] max-w-[613px] pt-11 pl-14 pr-14 pb-14">
        <div className="mb-4 gap-2 items-center  flex">
          <UserIcon />
          <p className="font-roboto text-lg text-arapawa font-normal">{user}</p>
        </div>
        <div>
          <h2 className="mb-1 text-2xl text-arapawa  font-extrabold">
            {title}
          </h2>
          <p className="text-cityRain mb-4 text-lg font-roboto font-normal">
            {text}
          </p>
          <Button
            text={"Read More"}
            color={"bg-yellow"}
            textColor={"text-arapawa"}
          />
        </div>
      </div>
    </div>
  );
};
