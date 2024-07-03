import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../../Navbar'

const BeachesHome = () => {
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
 Beaches
            </h4>
            {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
              <Link to="/catalog/beaches/atican">
                <img
                  src="/images/Atican beach.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Atican beach
                </h4>
              </Link>

              <Link to="/catalog/beaches/loving-lagos">
                <img
                  src="/images/Loving Beach.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">Loving Lagos beach , Okun-Ajah Rd.</h4>
              </Link>

              <Link to="/catalog/beaches/elegushi">
                <img
                  src="/images/Elegushi Royal Beach, Lekki phase 1.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Elegushi Royal Beach, Lekki phase 1
                </h4>
              </Link>

              <Link to="/catalog/beaches/santa-cruz">
                <img
                  src="/images/Santa Cruz private beach, Abraham Adesanya,.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Santa Cruz private beach, Abraham Adesanya,
                </h4>
              </Link>

              <Link to="/catalog/beaches/mr-nollywood">
                <img
                  src="/images/Mr Nollywood beach, Lekki.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Mr Nollywood beach, Lekki/Ikate
                </h4>
              </Link>

              <Link to="/catalog/beaches/royalty">
                <img
                  src="/images/Royalty Beach.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Royalty beach resort, Okun-Ajah Rd. , Off Abraham Adesanya,
                </h4>
              </Link>

              <Link to="/catalog/beaches/kids">
                <img
                  src="/images/Kids beach Garden , Ikate.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Kids beach Garden, Ikate
                </h4>
              </Link>

              <Link to="/catalog/beaches/alpha">
                <img
                  src="/images/Alpha beach, Ikate.png"
                  alt="location"
                  className="rounded-md"
                />
                <h4 className="text-[12px] text-center uppercase">
                Alpha beach, Ikate
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

export default BeachesHome
