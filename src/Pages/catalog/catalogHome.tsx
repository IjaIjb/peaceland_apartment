import React from "react";
import Navbar from "../Navbar";
import { Link, NavLink } from "react-router-dom";

const catalogHome = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-full">
        <div className="  pb-20 object-cover h-full w-full ">
          <img
            src="/images/bg.jpg"
            alt=""
            className="object-cover absolute w-full h-full"
          />
          <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
            <div className="flex flex-col gap-2 md:pt-[130px] pt-[100px] h-full text-white">
              <h4 className="text-amber-400  z-10 text-[30px] md:text-[45px] font-[600]">
                Peaceland Apartment Catalog
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}
              <h4 className="text-white z-10 pb-2 text-[22px] leading-[40px] md:text-[28px] font-[400]">
                Places of interest near you
              </h4>

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/food-vendor">
                  <img
                    src="/images/WhatsApp Image 2024-06-13 at 03.38.49_20832d8f.jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center">FOOD VENDORS</h4>
                </Link>

                <Link to="/catalog/restaurants">
                  <img
                    src="/images/WhatsApp Image 2024-06-13 at 03.38.50_3f669d10.jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    restaurants
                  </h4>
                </Link>

                <Link to="/catalog/supermarket">
                  <img
                    src="/images/download (2).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    supermarket
                  </h4>
                </Link>

           
                <Link to="/catalog/market">
                  <img
                    src="/images/WhatsApp Image 2024-06-13 at 03.38.49_805c1dbb.jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">market</h4>
                </Link>

                <Link to="/catalog/boutique/epikaizo  ">
                  <img
               src="/images/download (4).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    boutique
                  </h4>
                </Link>

                <Link to="/catalog/lounge">
                  <img
                    src="/images/WhatsApp Image 2024-06-13 at 03.38.49_d88a5ad6.jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">lounge</h4>
                </Link>

                <Link to="/catalog/parks">
                  <img
                    src="/images/images.jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">parks</h4>
                </Link>

                <Link to="/catalog/gyms">
                  <img
                    src="/images/download (6).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">gym</h4>
                </Link>
                <Link to="/catalog/beaches">
                  <img
                    src="/images/download (7).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">beaches</h4>
                </Link>

                <Link to="/catalog/cinemas">
                  <img
                    src="/images/download (8).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">cinemas</h4>
                </Link>

                <Link to="/catalog/workstation">
                  <img
                    src="/images/WhatsApp Image 2024-06-17 at 10.23.16_4ce9f02e.jpg"
                    alt="location"
                    className="w-full h-[180px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    workstations
                  </h4>
                </Link>

                <Link to="/catalog/personal-shopper">
                  <img
                    src="/images/images (1).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    personal shopper
                  </h4>
                </Link>

                <Link to="/catalog/pharmacy">
                  <img
                    src="/images/download (10).jpg"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    pharmacy
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

export default catalogHome;
