import React from "react";
import img from "../../../../assets/img/advertising.png";
import { Organik } from "../../../../assets/components/organik";
import { Qualite } from "../../../../assets/components/Qualite";
import { Button } from "../../../../components/button/button";

export const Advertising = ({ text, title, text2, text3, text4 }) => {
  return (
    <div className="container">
      <div className="flex  items-center">
        <div className="max-w-[911px] ">
          <img className=" w-[100%] " src={img} alt="img" />
        </div>
        <div>
          <div className="max-w-[702px]">
            <p className="text-4xl font-yellowtail font-normal mb-2 text-SeaLettuce">
              {text}
            </p>
            <h2 className="font-roboto  text-5xl font-extrabold text-arapawa mb-4">
              {title}
            </h2>
            <p className="text-cityRain  text-lg font-roboto font-normal mb-11">
              {text2}
            </p>
          </div>
          <div>
            <div className=" flex max-w-[564px] mb-8   gap-5 items-center">
              <Organik />
              <div>
                <h3 className="text-arapawa text-2xl font-extrabold mb-2">
                  Organic Foods Only
                </h3>
                <p className="text-cityRain text-lg font-roboto font-normal">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className=" flex max-w-[564px] mb-8   gap-5 items-center">
              <Qualite />
              <div>
                <h3 className="text-arapawa text-2xl font-extrabold mb-2">
                  {text3}
                </h3>
                <p className="text-cityRain text-lg font-roboto font-normal">
                  {text4}
                </p>
              </div>
            </div>
            <Button
              text={"Shop Now"}
              color={"bg-arapawa"}
              textColor={"text-wayt1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
