import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Navbar from '../../Navbar';

const MandarinChinese = () => {
  return (
    <div>
    <Navbar />
    <div className="relative h-full">
      <div className="h-full  pb-20  w-full ">
        <img
          src="/images/bg.jpg"
          alt=""
          className=" absolute w-full h-full"
        />
        <div className="max-w-screen-xl px-3 lg:px-14  mx-auto lg:gap-8 xl:gap-12 ">
          <div className="flex flex-col gap-2  h-full text-white">
            <h4 className="text-amber-400 md:pt-[130px] pt-[100px] z-10 text-[30px] md:text-[45px] font-[600]">
            01MANDARIN CHINESE TAKEAWAY

            </h4>
            {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

            <div className="z-10">
              <img
                                   src="/images/01MANDARIN CHINESE TAKEAWAY.png"

                alt="location"
                className="  rounded-md"
              />
              {/* <h4 className='text-[12px] text-center uppercase'>yakoyo abula joint</h4> */}
            </div>

            <div className="flex flex-col gap-4 pt-4 z-10">
              <div className="flex items-center gap-2">
                <IoPersonCircleSharp className="text-amber-400 w-8 h-8" />
                +2349068734726
              </div>
              {/* <div className='flex items-center gap-2'>
<GrLocation className="text-amber-400 w-8 h-8"/>
Sango Itedo
</div> */}
              <a
                href="https://g.co/kgs/AUjDg7P"
                target="_blank"
                className="flex items-center gap-2"
              >
                <GrLocation className="text-amber-400 w-8 h-8" />
                01MANDARIN CHINESE TAKEAWAY

              </a>
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

export default MandarinChinese
