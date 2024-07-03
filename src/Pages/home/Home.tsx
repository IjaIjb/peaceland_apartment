import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeText, setActiveText] = useState("welcome");
  return (
    <div>
      <Navbar />
      <div className="relative h-full ">
        <div className="  pb-20 object-cover h-full w-full ">
          <img
            src="/images/bg.jpg"
            alt=""
            className="object-cover absolute w-full h-full"
          />
          <div className="max-w-screen-xl px-5 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
            <div className="flex flex-col gap-2  h-full text-white">
              <h4 className="text-white pt-[150px] z-10 text-[30px] md:text-[45px] font-[600]">
                You're Welcome
              </h4>
              <div className="bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]"></div>
              {activeText === "welcome" ? (
                <div className="z-10">
                  <h4 className="text-white z-10  text-[22px] leading-[40px] md:text-[28px] font-[400]">
                    Welcome to{" "}
                    <span className="text-amber-400">Peaceland Apartment!</span>
                    <br /> We are excited to have you stay with us and hope you
                    have a comfortable and enjoyable visit.
                    <br />
                    <br />
                    We offer comfortable and clean accomodation that are perfect
                    for business or leisure travel.
                    <br />
                    We are located nearby many restaurants, shops and
                    attractions making it easy for you to explore the area on
                    foot or by public transport
                  </h4>
                </div>
              ) : activeText === "another" ? (
                <div className="z-10">
                  <h4 className="text-white z-10  text-[22px] leading-[40px] md:text-[28px] font-[400]">
                    Throughout your stay, don't hesitate to reach out should you
                    need anything.
                    <br />
                    Our friendly staff members are available night or day to
                    assist you.
                    <br />
                    <br />
                    To get to know more information about us
                  </h4>
                </div>
              ) : (
                ""
              )}
            </div>

            {activeText === "welcome" ? (
              <div className="flex gap-3  pt-8">
                <div
                  onClick={() => setActiveText("welcome")}
                  className="bg-amber-400 rounded-full  z-10 h-[4px] cursor-pointer w-[100px] md:w-[150px]"
                ></div>
                <div
                  onClick={() => setActiveText("another")}
                  className="border border-amber-400 rounded-full cursor-pointer z-10 h-[4px] w-[100px] md:w-[150px]"
                ></div>
              </div>
            ) : (
              <div className="flex gap-3 pt-8">
                <div
                  onClick={() => setActiveText("welcome")}
                  className="border border-amber-400 rounded-full cursor-pointer z-10 h-[4px] w-[100px] md:w-[150px]"
                ></div>
                <div
                  onClick={() => setActiveText("another")}
                  className="bg-amber-400 rounded-full  z-10 h-[4px] cursor-pointer w-[100px] md:w-[150px]"
                ></div>
              </div>
            )}

            <div className="flex justify-between md:justify-start z-10 items-center pt-7 gap-1 md:gap-4">
              <div className="z-10">
                <Link
                  to="/catalog"
                  className="bg-amber-400 rounded-full md:px-3 px-1 md:py-3 py-2"
                >
                  Peaceland Catalog
                </Link>
              </div>

              <div className="z-10">
                <Link
                  to="/contact"
                  className="bg-amber-400 rounded-full md:px-5 px-3 md:py-3  py-2"
                >
                  Contact us
                </Link>
              </div>
              <div className="z-10">
                <Link
                  to="/amenities"
                  className="bg-amber-400 rounded-full md:px-5 px-3 md:py-3  py-2"
                >
                  Amenities
                </Link>
              </div>
            </div>
          </div>
          <div className="overlay  absolute inset-0 bg-black opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
