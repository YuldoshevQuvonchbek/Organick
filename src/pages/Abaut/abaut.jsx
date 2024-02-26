import React from "react";
import { Hero } from "../../components/hero/hero";
import img from "../../assets/img/banner-about.png";
import img2 from "../../assets/img/about-img.png";
import { TraktirIocn } from "../../assets/components/traktirIocn";
import { Zavod } from "../../assets/components/zavod";
import { Button } from "../../components/button/button";
import img3 from "../../assets/img/about-img2.jpeg";
import { Circle } from "../../assets/components/circle";
import { Data } from "../../data/cerves/serves-data";
import { CervesCart } from "../../components/cats/cerves-cart/cervesCart";
import { UserCart } from "../../components/cats/user-cart/user";
import { dataUser } from "../../data/carts/user-data";
import { Cart2 } from "../../data/carts/pradac-cart-data";
import { AbautCart } from "../../components/cats/abaut-cart/abautCart";
export const Abaut = () => {
  return (
    <div>
      <Hero
        img={img}
        title={"About Us"}
        button={"hidden"}
        center={"ml-auto mr-auto"}
      />
      <div className=" container  items-center gap-3 flex justify-between mt-16 ">
        <div>
          <img src={img2} alt="img" />
        </div>
        <div className="max-w-[671px]">
          <p className="font-yellowtail text-SeaLettuce text-4xl font-normal mb-2">
            About Us
          </p>
          <h2 className="text-5xl font-roboto  text-arapawa  font-extrabold  mb-4">
            We do Creative Things for Success
          </h2>
          <p className=" text-lg font-roboto text-cityRain font-normal mb-9">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <p className=" text-lg font-roboto text-cityRain font-normal mb-12">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex justify-between ">
            <div>
              <div className="flex w-[100%] gap-4 max-w-[292px]">
                <div>
                  <TraktirIocn />
                </div>
                <p className="font-medium text-2xl text-arapawa font-roboto">
                  Modern Agriculture Equipment
                </p>
              </div>
            </div>
            <div className="flex  mb-14 gap-4 w-[100%] max-w-[292px]">
              <div>
                <Zavod />
              </div>
              <p className="font-medium text-2xl text-arapawa font-roboto">
                No growth hormones are used
              </p>
            </div>
          </div>
          <Button
            text={"Explore More"}
            color={"bg-arapawa"}
            textColor={"text-wayt1"}
          />
        </div>
      </div>
      <div className="bg-cartColor">
        <div className="container pb-44">
          <div className="flex gap-12 items-center pt-48 ">
            <div className="max-w-[651px]">
              <p className="font-yellowtail mb-2 text-SeaLettuce text-4xl font-normal ">
                Why Choose us?
              </p>
              <h2 className="mb-6 text-5xl font-roboto  text-arapawa  font-extrabold  ">
                We do not buy from the open market & traders.
              </h2>
              <p className=" mb-9 text-lg font-roboto text-cityRain font-normal ">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div className="max-w-[486px]">
                <div className=" mb-3 rounded-3xl bg-[#ECECEC] flex gap-2 pl-7 pt-7 pb-7 pr-24  items-center">
                  <Circle />
                  <p className="text-xl font-medium font-roboto ">
                    100% Natural Product
                  </p>
                </div>
                <p className=" mb-6 pl-14 text-lg font-roboto text-cityRain font-normal ">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
                <div className=" mb-3  rounded-3xl bg-[#ECECEC] flex gap-2 pl-7 pt-7 pb-7 pr-24  items-center">
                  <Circle />
                  <p className="text-xl font-medium font-roboto ">
                    Increases resistance
                  </p>
                </div>
                <p className=" mb-6 pl-14 text-lg font-roboto text-cityRain font-normal ">
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </p>
              </div>
            </div>
            <div>
              <img className="rounded-3xl" src={img3} alt="" />
            </div>
          </div>
          <div className="flex gap-8 justify-center  mt-20">
            {Data.map((item) => (
              <CervesCart
                img={item.img}
                key={item.id}
                title={item.title}
                text={item.text}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container mb-52 mt-44">
        <div>
          <div className="max-w-[852px] ml-auto mb-11  text-center mr-auto">
            <p className="text-4xl font-yellowtail text-SeaLettuce font-normal">
              Team
            </p>
            <h2 className="text-5xl font-extrabold  text-arapawa ">
              Our Organic Experts
            </h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex justify-center gap-7">
            {dataUser.map((item) => (
              <UserCart
                key={item.id}
                name={item.name}
                text={item.text}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
      <section className=" bg-arapawa">
        <div className="container mb-36">
          <div className="pt-44 text-center pb-48">
            <p className="text-4xl font-yellowtail mb-2 text-SeaLettuce font-normal">
              About Us
            </p>
            <h1 className="text-5xl font-extrabold  mb-8 text-wayt1 ">
              What We Offer for You
            </h1>
            <div className=" flex flex-wrap gap-5">
              {Cart2.slice(0, 4).map((item) => (
                <AbautCart key={item.id} title={item.title} img={item.img} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
