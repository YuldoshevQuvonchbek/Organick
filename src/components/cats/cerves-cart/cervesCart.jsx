import React from "react";

export const CervesCart = ({ img: Img, title, text, id }) => {
  return (
    <div
      key={id}
      className="max-w-[257px] transition-all duration-500 hover:shadow-lg rounded-3xl bg-wayt1 pt-12 pl-9 pr-9 pb-5 text-center"
    >
      <div className="mb-4 flex justify-center">
        <Img />
      </div>
      <h3 className="mb-3 text-2xl font-roboto font-extrabold text-arapawa">
        {title}
      </h3>
      <p className="  text-lg font-normal font-roboto text-cityRain">{text}</p>
    </div>
  );
};
