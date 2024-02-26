import React from "react";

export const StoryBanner = ({
  img,
  title,
  text,
  title2,
  text2,
  title3,
  text3,
  title4,
  text4,
}) => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-[-128px] left-[-181px] -z-50 ">
          <img src={img} alt="" />
        </div>
        <div className="pl-[631px]">
          <div className="mt-32 mb-[98px] rounded-3xl  max-w-[746px]  p-16 container bg-wayt1 ">
            <p className=" text-4xl text-SeaLettuce font-yellowtail font-normal  mb-2">
              {text}
            </p>
            <h2 className="text-5xl font-extrabold text-arapawa font-roboto mb-9">
              {title}
            </h2>
            <h3 className="font-medium text-2xl text-arapawa  mb-2">
              {title2}
            </h3>
            <p className="text-lg text-cityRain font-roboto font-normal mb-9">
              {text2}
            </p>
            <h3 className="font-medium text-2xl text-arapawa  mb-2">
              {title3}
            </h3>
            <p className="text-lg text-cityRain font-roboto font-normal mb-9">
              {text3}
            </p>
            <h3 className="font-medium text-2xl text-arapawa  mb-2">
              {title4}
            </h3>
            <p className="text-lg text-cityRain font-roboto font-normal mb-9">
              {text4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
