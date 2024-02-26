import React from "react";
import { Hero } from "../../components/hero/hero";
import img from "../../assets/img/Banner.jpeg";
import { Advertising } from "./components/advertising/advertising";
import Cartlist from "../../components/cats/cart/cart";
import { Cart2 } from "../../data/carts/pradac-cart-data";
import { Button } from "../../components/button/button";
import { UserBanner } from "./components/banner/user-banner";
import { UserData } from "../../data/bannerUser/bannerData";
import { StoryBanner } from "./components/banner/story-banner";
import { story } from "../../data/bannerUser/bannerStory";
import { ImgCart } from "../../components/cats/img-cart/imgCart";
import { bgData } from "../../data/carts/img-data";
import { Useful } from "../../components/cats/useful/useful";
import { UsefulData } from "../../data/carts/useful-cart-data";

export const Home = () => {
  return (
    <>
      <Hero
        img={img}
        text={"100% Natural Food"}
        title={"Choose the best healthier way of life"}
      />
      <section>
        <div className="container mt-36  justify-center flex gap-9  mb-48">
          <div className="max-w-[682px] w-[100%]  bg-cartImg bg-no-repeat pt-[109px] pb-[135px] pl-[54px]">
            <div className="max-w-[277px]">
              <p className="text-wayt1 mb-1  font-yellowtail text-4xl font-normal">
                Natural!!
              </p>
              <h2 className="text-wayt1 font-roboto text-4xl  font-extrabold">
                Get Garden Fresh Fruits
              </h2>
            </div>
          </div>
          <div className="max-w-[682px] w-[100%]  bg-offerImg bg-no-repeat pt-[109px] pb-[135px] pl-[54px]">
            <div className="max-w-[277px]">
              <p className="text-wayt1 mb-1  font-yellowtail text-4xl font-normal">
                Natural!!
              </p>
              <h2 className="text-wayt1 font-roboto text-4xl  font-extrabold">
                Get Garden Fresh Fruits
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-20 pb-28 bg-doctor">
        <Advertising
          text={"About Us"}
          text3={"Organic Foods Only"}
          text4={
            "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          }
          title={"We Believe in Working Accredited Farmers"}
          text2={
            "Simply dummy text of the printing and typesetting industry. Lorem had ceased to  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          }
        />
      </section>
      <section>
        <div className="container mt-44 ">
          <p className=" text-center text-SeaLettuce font-yellowtail text-4xl font-normal mb-2">
            Categories
          </p>
          <h2 className=" text-center text-arapawa text-5xl font-extrabold mb-10">
            Our Products
          </h2>
          <div className="justify-center flex flex-wrap  gap-5">
            {Cart2.slice(0, 8).map((item) => (
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

            <div className="mt-28">
              <Button
                text={"Load More"}
                textColor={"text-wayt1"}
                color={"bg-arapawa"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-52 ">
        {UserData.map((item) => (
          <UserBanner
            key={item.id}
            text={item.text}
            title={item.title}
            img={item.img}
            commit={item.commit}
            text2={item.text2}
            name={item.name}
            bgimg={item.bgimg}
          />
        ))}
      </section>
      <section className="bg-arapawa pt-52 pb-48">
        <div className="container">
          <div className="mb-12 flex justify-between ">
            <div className="pl-9">
              <p className="font-yellowtail text-SeaLettuce text-4xl font-normal mb-2">
                Offer
              </p>
              <h2 className="font-extrabold text-5xl text-wayt1 ">
                We Offer Organic For You
              </h2>
            </div>
            <div className=" mt-6 pr-10">
              <Button
                text={"View All Product"}
                color={"bg-yellow"}
                textColor={"text-arapawa"}
              />
            </div>
          </div>
          <div className="justify-center flex flex-wrap  gap-5">
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
      </section>
      <section>
        {story.map((item) => (
          <StoryBanner
            key={item.id}
            img={item.img}
            title={item.title}
            title2={item.title2}
            title3={item.title3}
            title4={item.title4}
            text={item.text}
            text2={item.text2}
            text3={item.text3}
            text4={item.text4}
          />
        ))}
      </section>
      <section className="bg-peacefulRain">
        <div className="pt-44 flex gap-6 justify-center pb-44">
          {bgData.map((item) => (
            <ImgCart key={item.text} text={item.text} img={item.img} />
          ))}
        </div>
      </section>
      <section>
        <div className="container pl-5 mt-44">
          <p className=" pl-5 font-yellowtail text-SeaLettuce text-4xl font-normal mb-2">
            News
          </p>
          <div className="flex mb-10 justify-between">
            <h2 className="text-arapawa pl-5 font-roboto max-w-[702px] text-5xl font-extrabold">
              Discover weekly content about organic food, & more
            </h2>
            <div className="mt-7 pr-14">
              <Button
                text={"More News"}
                border={"border-4"}
                textColor={"text-arapawa"}
              />
            </div>
          </div>
          <div className="flex  mb-64 items-center justify-center">
            {UsefulData.map((item) => (
              <Useful
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
                user={item.user}
                data={item.data}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
