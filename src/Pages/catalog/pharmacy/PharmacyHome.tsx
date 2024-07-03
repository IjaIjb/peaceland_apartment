import React from "react";
import Navbar from "../../Navbar";
import { Link, NavLink } from "react-router-dom";

const PharmacyHome = () => {
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
                Pharmacy
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/pharmacy/gnc">
                  <img
                    src="/images/GNC Phamacy.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    GNC Pharmacy, Sangotedo
                  </h4>
                </Link>

                <Link to="/catalog/pharmacy/dkk">
                  <img
                    src="/images/DKK Phamacy.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    DkK Pharmacy
                  </h4>
                </Link>

                <Link to="/catalog/pharmacy/pharmacy24">
                  <img
                    src="/images/Phamacy24.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Pharmacy 24, Sangotedo
                  </h4>
                </Link>

                <Link to="/catalog/pharmacy/belfast">
                  <img
                    src="/images/Belfast plus pharmacy, Canaan estate.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Belfast plus pharmcy, Canaan estate
                  </h4>
                </Link>

                <Link to="/catalog/pharmacy/thera-annex">
                  <img
                    src="/images/Thera annex Pharmacy.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Living healthy, Thera Annex
                  </h4>
                </Link>

                <Link to="/catalog/pharmacy/elmickey">
                  <img
                    src="/images/Elmickery Pharmacy.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Elmickey pharmacy and stores, Idowu Dabiri Rd
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

export default PharmacyHome;
