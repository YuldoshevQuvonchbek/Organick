import React from "react";

export const RetengCart = ({ interest, text }) => {
  return (
    <div className="max-w-[234px] pt-[66px] bg-beluga hover:shadow-2xl cursor-pointer transition-all duration-500 hover:scale-[1.1] pr-[41px] pb-[66px] pl-[41px] rounded-[50%] border-4 justify-center text-center border-SeaLettuce">
      <h2 className="text-5xl text-arapawa  font-roboto font-extrabold">
        {interest}
      </h2>
      <p className="font-roboto font-semibold text-lg text-arapawa text-wrap">
        {text}
      </p>
    </div>
  );
};
