import React from "react";
import { Button } from "../../button/button";

export const ImgCart = ({ img, text }) => {
  return (
    <div
      className="pt-60 bg-no-repeat pl-36 pb-60 pr-36"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Button text={`${text}`} color={"bg-wayt1"} hidden={"hidden"} />
    </div>
  );
};
