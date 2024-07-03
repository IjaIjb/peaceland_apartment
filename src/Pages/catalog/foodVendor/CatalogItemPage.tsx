import React from "react";
import Navbar from "../../Navbar";
import { Link, NavLink } from "react-router-dom";

const CatalogItemPage = () => {
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
                Food Vendor
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/food-vendor/yakoyo">
                  <img
                    src="/images/foodVendor/yakoyo.jpg"
                    alt="location"
                    className="w-full md:h-[200px]    h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    yakoyo abula joint
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/rosticks">
                  <img
                    src="/images/Rosticks Restaurant.png"
                    alt="location"
                    className="w-full md:h-[200px]    h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    rosticks
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/chicken-republic">
                  <img
                    src="/images/foodVendor/chicken.jpg"
                    alt="location"
                    className="w-full md:h-[200px]    h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    chicken republic
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/jowi-cuisine">
                  <img
                    src="/images/download (3).jpg"
                    alt="location"
                    className="w-full md:h-[200px]    h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    jowi cuisine
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/chef-sammie">
                  <img
                    src="/images/foodVendor/chefSammie.jpg"
                    alt="location"
                    className="w-full md:h-[200px]    h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    chef sammie
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/ambrosy-delight-parfait">
                  <img
                    src="/images/foodVendor/amarosy.jpg"
                    alt="location"
                    className="w-full md:h-[200px]    h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    amarosy delight parfait
                  </h4>
                </Link>

                <Link to="/catalog/food-vendor/liz-grills">
                  <img
                    src="/images/foodVendor/liz.jpg"
                    alt="location"
                    className="w-full md:h-[200px] h-[100px] rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    liz's grills
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

export default CatalogItemPage;
