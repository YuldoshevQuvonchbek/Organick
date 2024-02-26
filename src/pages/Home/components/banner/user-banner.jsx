import React from "react";
import { Yulduz } from "../../../../assets/components/yulduz";
import { RetengCart } from "../../../../components/cats/reteng-cart/reteng-cart";
import { retengData } from "../../../../data/reteng/reteng-data";

export const UserBanner = ({
  id,
  img,
  title,
  text,
  commit,
  name,
  bgimg,
  text2,
}) => {
  return (
    <div
      key={id}
      className="bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="contianer border-b-2 border-spacing-3cityRain  pb-32 max-w-[780px] pt-40 justify-center ml-auto mr-auto text-center">
        <p className="text-4xl font-yellowtail font-normal mb-2 text-SeaLettuce">
          {text}
        </p>
        <h1 className="text-5xl text-arapawa font-extrabold mb-14">{title}</h1>
        <div className="flex mb-5 justify-center">
          <img src={img} alt="img" />
        </div>
        <div className="flex mb-7 justify-center">
          <Yulduz />
        </div>
        <p className="text-lg text-cityRain font-roboto font-normal mb-5">
          {commit}
        </p>
        <h3 className="text-2xl font-roboto text-arapawa font-semibold">
          {name}
        </h3>
        <p className="text-base text-cityRain font-roboto ">{text2}</p>
      </div>
      <div className="pt-24">
        <div className=" flex gap-14 justify-center  pb-40 ">
          {retengData.map((item) => (
            <RetengCart
              key={item.id}
              text={item.text}
              interest={item.interest}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
