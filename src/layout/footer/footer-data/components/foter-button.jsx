import React from "react";
import { Logo } from "../../../../assets/components/logo";
import { FoterIsta } from "../../../../assets/components/foterIsta";
import { FeseFoter } from "../../../../assets/components/fese-foter";
import { TitterFoter } from "../../../../assets/components/tvitter-foter";
import { IntersFoter } from "../../../../assets/components/inters-foter";

export const FoterButton = ({
  Phone,
  Email,
  Address,
  link,
  link2,
  link3,
  link4,
  link5,
}) => {
  return (
    <div>
      <div className="flex mb-24 justify-center">
        <div className="text-end border-r-2 pr-12">
          <h2 className="text-arapawa text-3xl font-roboto font-bold mb-8">
            Contact Us
          </h2>
          <h3 className="text-lg font-roboto mb-2 text-arapawa font-semibold">
            Email
          </h3>
          <p className="text-base mb-4">{Email}</p>
          <h3 className="text-lg font-roboto mb-2 text-arapawa font-semibold">
            Phone
          </h3>
          <p className="text-base mb-4">{Phone}</p>
          <h3 className="text-lg font-roboto mb-2 text-arapawa font-semibold">
            Address
          </h3>
          <p className="text-base mb-4">{Address}</p>
        </div>

        <div className="justify-center text-center max-w-[543px] border-r-2 pr-10 pl-11">
          <div className=" mb-6 flex justify-center">
            <Logo />
          </div>
          <p className="text-lg font-roboto  mb-12 text-cityRain">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <div className="flex gap-4 items-center justify-center ">
            <FoterIsta />
            <FeseFoter />
            <TitterFoter />
            <IntersFoter />
          </div>
        </div>
        <div className="pl-12">
          <h3 className="text-arapawa text-3xl font-roboto font-bold mb-8">
            Utility Pages
          </h3>
          <p className="text-lg font-roboto  mb-3 text-cityRain">{link}</p>
          <p className="text-lg font-roboto  mb-3 text-cityRain">{link2}</p>
          <p className="text-lg font-roboto  mb-3 text-cityRain">{link3}</p>
          <p className="text-lg font-roboto  mb-3 text-cityRain">{link4}</p>
          <p className="text-lg font-roboto  mb-3 text-cityRain">{link5}</p>
        </div>
      </div>
      <div className="text-center">
        <p className="border-t-2 pt-4 pb-4">
          Copyright © Organick | Designed by VictorFlow Templates - Powered by
          Webflow
        </p>
      </div>
    </div>
  );
};
