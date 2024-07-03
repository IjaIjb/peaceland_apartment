import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../Navbar';

const MarketHome = () => {
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
          Markets
            </h4>
            {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
              <Link to="/catalog/market/sangotedo">
                <img
                  src="/images/sangotedo market.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                sangotedo market
                </h4>
              </Link>

              <Link to="/catalog/market/ajah-jubilee-bridge">
                <img
                  src="/images/Ajah market (by Jubilee bridge).png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">Ajah market (by Jubilee bridge)</h4>
              </Link>

              <Link to="/catalog/market/elegushi">
                <img
                  src="/images/Elegushi market.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Elegushi market
                </h4>
              </Link>

              <Link to="/catalog/market/lekki">
                <img
                  src="/images/Lekki market, Lekki pennisula II.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Lekki market, Lekki pennisula II
                </h4>
              </Link>

              <Link to="/catalog/market/new-addo">
                <img
                  src="/images/New Addo Market.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                New addo market
                </h4>
              </Link>

              <Link to="/catalog/market/new-road-lekki">
                <img
                  src="/images/New road market, Lekki Pennisula II.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                New road market, Lekki Pennisula II
                </h4>
              </Link>

              <Link to="/catalog/market/epikaizo">
                <img
                  src="/images/Epikaizo village market.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Epikaizo village market, United estate, Sangotedo
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
  )
}

export default MarketHome
