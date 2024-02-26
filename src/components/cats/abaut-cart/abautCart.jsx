import React from "react";

export const AbautCart = ({ img, title }) => {
  return (
    <div className="text-center">
      <div className="rounded-3xl max-w-[352px] p-3 bg-wayt1">
        <img
          className="transition-all duration-500 hover:scale-[1.2]"
          src={img}
          alt=""
        />
      </div>
      <h2 className="text-wayt1 mt-5 text-2xl font-medium">{title}</h2>
    </div>
  );
};
