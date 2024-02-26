import React from "react";
import { CartBtn } from "../../button/cart-btn";
import { Yulduz } from "../../../assets/components/yulduz";
import { Link } from "react-router-dom";

export const Cartlist = ({ img, btn, title, price, discount, id }) => {
  return (
    <Link to={`/shopSingle/${id}`}>
      <div className=" transition-all duration-500 hover:shadow-lg rounded-3xl pt-7 pb-4 bg-cartColor max-w-[335px]">
        <div className="pl-9">
          <CartBtn text={btn} />
        </div>
        <img
          className="transition-all duration-500 hover:scale-[1.2]"
          src={img}
          alt=""
        />
        <div className=" pl-8 pr-6 ">
          <h2 className="text-xl font-semibold border-b-4 pb-2 text-arapawa">
            {title}
          </h2>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center  gap-2">
              <p className=" line-through font-roboto  text-base text-cityRain  ">
                {price}
              </p>
              <p className="font-bold font-roboto text-lg  text-arapawa">
                {discount}
              </p>
            </div>
            <Yulduz />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cartlist;
