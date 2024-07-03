import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../../Navbar';

const WorkstationHome = () => {
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
             Workstation
            </h4>
            {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
              <Link to="/catalog/workstation/techevery">
                <img
                  src="/images/Techevery Workstation.png"
                  alt="location"
                  className=" rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Techevery workstation , Maple plaza, sangotedo , Ajah ,
                </h4>
              </Link>

              <Link to="/catalog/workstation/thekave">
                <img
                  src="/images/The Kave workstation, Lekki.png"
                  alt="location"
                  className="  rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                The Kave workstation, Lekki
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

export default WorkstationHome
