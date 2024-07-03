import React from "react";
import Navbar from "../../Navbar";
import { Link, NavLink } from "react-router-dom";

const SupermarketHome = () => {
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
                Supermarket
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/supermarket/dkk-plaza">
                  <img
                    src="/images/DKK supermarket plaza.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    DKK supermarket plaza
                  </h4>
                </Link>

                <Link to="/catalog/supermarket/skymart">
                  <img
                    src="/images/Skymart.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">Skymart</h4>
                </Link>

                <Link to="/catalog/supermarket/blenco">
                  <img
                    src="/images/superM/WhatsApp Image 2024-06-10 at 12.14.36_f4826b5a.jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Blenco Supermarket sangotedo
                  </h4>
                </Link>

                <Link to="/catalog/supermarket/emrite">
                  <img
                    src="/images/Emrite supermarket.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Emrite supermarket
                  </h4>
                </Link>

                <Link to="/catalog/supermarket/zira">
                  <img
                    src="/images/ZIRA SUPERMARKET.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    ZIRA SUPERMARKET
                  </h4>
                </Link>

                <Link to="/catalog/supermarket/ebeano">
                  <img
                    src="/images/Ebeano Supermarket.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Ebeano Supermarket
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

export default SupermarketHome;
