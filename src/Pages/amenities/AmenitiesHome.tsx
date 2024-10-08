import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../Navbar";

const AmenitiesHome = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen ">
        <div className="h-full  pb-20 object-cover w-full ">
          <img
            src="/images/bg.jpg"
            alt=""
            className="object-cover absolute w-full h-full"
          />
          <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
            <div className="flex flex-col gap-2  h-full text-white">
              <h4 className="text-amber-400 md:pt-[130px] pt-[100px] z-10 text-[30px] md:text-[45px] font-[600]">
                Amenities
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/amenities/wifi">
                  <img
                    src="/images/amenities/wifi.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">Wifi</h4>
                </Link>

                <div>
                  <img
                    src="/images/washing machine.png"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Washing Machine and Laundry services( Ground floor)
                  </h4>
                </div>

                {/* <div>
                  <img
                    src="/images/amenities/WhatsApp Image 2024-06-13 at 03.38.49_dab95998.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Snooker (located in rooftop lounge)
                  </h4>
                </div> */}
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

export default AmenitiesHome;
