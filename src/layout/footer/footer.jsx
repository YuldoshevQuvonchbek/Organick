import React from "react";
import img from "../../assets/img/banner-foter.png";
import { Button } from "../../components/button/button";
import { FoterButton } from "./footer-data/components/foter-button";
import { foterData } from "./footer-data/footerData";

export const Footer = () => {
  return (
    <>
      <div className="container max-w-[1440px] justify-center">
        <div
          className="bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="pt-28  flex justify-between items-center pb-32 pl-16 pr-16 ">
            <h2 className=" text-5xl  font-extrabold  max-w-[357px] text-wayt1">
              Subscribe to our Newsletter
            </h2>
            <div className="flex items-center gap-2">
              <input
                placeholder="Your Email Address"
                className=" rounded-3xl pt-7 pl-6 pr-24 pb-7"
                type="text"
              />
              <Button
                text={"Subscribe"}
                hidden={"hidden"}
                color={"bg-arapawa"}
                textColor={"text-wayt1"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" container mt-28">
        <div>
          {foterData.map((e) => (
            <FoterButton
              key={e.id}
              Phone={e.Phone}
              Email={e.Email}
              Address={e.Address}
              link={e.link}
              link2={e.link2}
              link3={e.link3}
              link4={e.link4}
              link5={e.link5}
            />
          ))}
        </div>
      </div>
    </>
  );
};
