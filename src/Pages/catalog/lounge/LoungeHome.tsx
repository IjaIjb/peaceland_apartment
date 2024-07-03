import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../Navbar';

const LoungeHome = () => {
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
             Lounge
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/lounge/splash-bar">
                  <img
                    src="/images/Splash bar and Lounge.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                  Splash bar and Lounge
                  </h4>
                </Link>

                {/* <Link to="/catalog/supermarket/skymart">
                  <img
                    src="/images/Skymart.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">Skymart</h4>
                </Link> */}

                <Link to="/catalog/lounge/yaBas-kitchen">
                  <img
                    src="/images/YaBas kitchen Lounge.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                  YaBas kitchen and sports Bar/Rooftop Lounge
                  </h4>
                </Link>

                <Link to="/catalog/lounge/shades-excecutives">
                  <img
                    src="/images/40 Shades Executive Lounge & Club.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                  40 Shades Executive Lounge & Club
                  </h4>
                </Link>

                <Link to="/catalog/lounge/ebony">
                  <img
                    src="/images/Ebony Lounge.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                  Ebony lounge
                  </h4>
                </Link>

                {/* <Link to="/catalog/supermarket/ebeano">
                  <img
                    src="/images/Ebeano Supermarket.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Ebeano Supermarket
                  </h4>
                </Link> */}
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

export default LoungeHome
