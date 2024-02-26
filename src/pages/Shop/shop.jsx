import React from "react";
import { Hero } from "../../components/hero/hero";
import img from "../../assets/img/shop-banner.png";
import { Cart2 } from "../../data/carts/pradac-cart-data";
import Cartlist from "../../components/cats/cart/cart";

export const Shop = () => {
  return (
    <div>
      <Hero
        img={img}
        title={"Shop"}
        button={"hidden"}
        center={"ml-auto mr-auto"}
      />
      <div className="flex justify-center container mb-36 mt-24  gap-5 flex-wrap">
        {Cart2.map((item) => (
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
  );
};
