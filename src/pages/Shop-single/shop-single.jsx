import React from "react";
import { Hero } from "../../components/hero/hero";
import img from "../../assets/img/server-banner.png";
import { useParams } from "react-router-dom";
import { Cart2 } from "../../data/carts/pradac-cart-data";
import { CartBtn } from "../../components/button/cart-btn";
import { Yulduz } from "../../assets/components/yulduz";
import { Button } from "../../components/button/button";
import Cartlist from "../../components/cats/cart/cart";

export const ShopSingle = () => {
  const { id } = useParams();
  const data = Cart2.find((item) => item.id == id);

  return (
    <>
      <Hero
        img={img}
        title={"Services"}
        button={"hidden"}
        center={"ml-auto mr-auto"}
      />
      <div className=" container mb-20  mt-28 flex items-center gap-20">
        <div className="relative max-w-[600px] rounded-3xl bg-cartColor h-auto">
          <div className="absolute top-11 left-11">
            <CartBtn text={data.btn} />
          </div>
          <img className="w-[100%]" src={data.img} alt="" />
        </div>
        <div className="max-w-[648px]">
          <h2 className="mb-2 text-4xl font-semibold text-arapawa">
            {data.title}
          </h2>
          <Yulduz />
          <div className="flex items-center mb-7  mt-2 gap-2">
            <p className=" mt-1 line-through font-roboto leading-3 text-base text-cityRain  ">
              {data.price}
            </p>
            <p className="font-bold font-roboto text-lg  text-arapawa">
              {data.discount}
            </p>
          </div>
          <p className="mb-9 text-lg font-normal text-cityRain">{data.info}</p>
          <div className="flex gap-6  items-center ">
            <p className="text-arapawa font-roboto font-bold ">Quantity :</p>
            <div className="pl-16 pr-16 pt-7 border rounded-3xl  border-arapawa pb-7">
              <p className="text-base font-roboto font-bold text-arapawa">1</p>
            </div>
            <Button
              text={"Add To Cart"}
              color={"bg-arapawa"}
              textColor={"text-wayt1"}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex mb-7 gap-5 justify-center items-center">
          <Button
            color={"bg-arapawa"}
            textColor={"text-wayt1"}
            hidden={"hidden"}
            text={"Product Description"}
          />
          <Button
            color={"bg-cartColor"}
            textColor={"text-arapawa"}
            hidden={"hidden"}
            text={"Additional Info"}
          />
        </div>
        <p className="max-w-[1130px] mb-36  ml-auto mr-auto text-center text-cityRain">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>

        <div className="container mb-36 ">
          <h1 className=" text-arapawa text-center mb-10 font-extrabold text-5xl">
            Related Products
          </h1>
          <div className="flex gap-5 flex-wrap justify-center">
            {Cart2.slice(0, 4).map((item) => (
              <Cartlist
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                discount={item.discount}
                btn={item.btn}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
