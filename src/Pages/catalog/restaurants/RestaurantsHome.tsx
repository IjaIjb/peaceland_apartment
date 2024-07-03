import React from "react";
import Navbar from "../../Navbar";
import { Link, NavLink } from "react-router-dom";

const RestaurantsHome = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-full ">
        <div className="h-full  pb-20 object-cover w-full ">
          <img
            src="/images/bg.jpg"
            alt=""
            className="object-cover absolute w-full h-full"
          />
          <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
            <div className="flex flex-col gap-2  h-full text-white">
              <h4 className="text-amber-400 md:pt-[130px] pt-[100px] z-10 text-[30px] md:text-[45px] font-[600]">
                Restaurants{" "}
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/restaurants/bole-plus">
                  <img
                    src="/images/Bole plus, Barbecue restaurant.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Bole plus, Barbecue restaurant
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/rosticks-pizza">
                  <img
                    src="/images/Rosticks restaurant(pizza).png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Rosticks restaurant(pizza)
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/matthans-shawarma">
                  <img
                    src="/images/Matthans shawarma.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Matthans shawarma
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/dominos-pizza">
                  <img
                    src="/images/Dominos pizza.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Domino’s pizza
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/food-dynasty">
                  <img
                    src="/images/Food dynasty, (Chinese restaurant).png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Food dynasty, (Chinese restaurant)
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/blossom-delight">
                  <img
                    src="/images/Blossom Delight Fast Food.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Blossom delight fast food
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/mandarin-chinese">
                  <img
                    src="/images/01MANDARIN CHINESE TAKEAWAY.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    01MANDARIN CHINESE TAKEAWAY
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/ski">
                  <img
                    src="/images/SKI RESTAURANT.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    SKI RESTAURANT
                  </h4>
                </Link>

                <Link to="/catalog/restaurants/china-work">
                  <img
                    src="/images/China Wok Restaurant Ikoyi, Lagos.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    China Wok Restaurant
                  </h4>
                </Link>
              </div>
              <NavLink to="/" className=" text-[22px] flex justify-end z-10">
                <img src="/images/logod2.png" alt="location" className="" />
              </NavLink>
            </div>
          </div>
          <div className="overlay absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsHome;
