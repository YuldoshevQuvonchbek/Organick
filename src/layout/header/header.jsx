import React from "react";
import { data } from "./header-data/header-data";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/components/logo";
import img from "../../assets/img/carzinka.svg";
import { ZoomIcon } from "../../assets/components/zoomIcon";

export const Header = () => {
  return (
    <div className="container items-center flex justify-between pt-16  mb-16">
      <div>
        <Logo />
      </div>
      <div className=" flex gap-7">
        {data.map((e) => (
          <div key={e.id}>
            <NavLink className={"font-roboto text-xl font-bold "} to={e.path}>
              {e.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className=" pl-20 pt-1 pb-1 pr-1  items-center  gap-3 flex   bg-beluga rounded-[35px]">
          <input className=" bg-beluga" type="text" />
          <ZoomIcon />
        </div>

        <div className=" pl-1 pt-1 pb-1 pr-6  items-center  gap-3 flex border-christmasSilver border-solid  border-[1px]  rounded-[35px]">
          <img src={img} alt="" />
          <span>Cart (0)</span>
        </div>
      </div>
    </div>
  );
};
