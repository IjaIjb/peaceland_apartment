import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../../Navbar";

const CinemasHome = () => {
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
                Cinemas
              </h4>
              {/* <div className='bg-amber-400 z-10 h-[6px] w-[180px] md:w-[270px]'></div> */}

              <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 z-10">
                <Link to="/catalog/cinemas/sky-cinema">
                  <img
                    src="/images/Sky cinemas, sangotedo.png"
                    alt="location"
                    className="rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Sky cinemas Sangotedo
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/genesis-cinema">
                  <img
                    src="/images/Genesis cinemas, sangotedo.png"
                    alt="location"
                    className=" rounded-md"
                  />
                  <h4 className="text-[12px] text-center uppercase">
                    Genesis cinemas, sangotedo
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/genesis-deluxe-cinema">
                  <img
                  src="/images/Genesis Deluxe cinemas, palms shopping mall, Lekki.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    Genesis Deluxe cinemas, palms shopping mall, Lekki
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/filmhouse-cinema-ikota">
                  <img
                  src="/images/Filmhouse cinemas, Ikota.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    Filmhouse cinemas, Ikota
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/filmhouse-cinema-imax">
                  <img
                  src="/images/Filmhouse cinemas, IMAX Lekki Lagos.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    Filmhouse cinemas, IMAX Lekki Lagos
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/grand-cinemas">
                  <img
                  src="/images/Grand cinemas and Arcade, Chevron drive,.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    Grand cinemas and Arcade, Chevron drive
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/silverbird">
                  <img
                  src="/images/Silverbird Galleria, VI.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    Silverbird Galleria, VI
                  </h4>
                </Link>

                <Link to="/catalog/cinemas/filmhouse-cinema-lekki">
                  <img
                  src="/images/Filmhouse.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    Filmhouse cinema, Lekki peninsula II, Lekki
                  </h4>
                </Link>

                {/* <Link to="/catalog/food-vendor/yakoyo">
                  <img
                  src="/images/China Wok Restaurant Ikoyi, Lagos.png"
                  alt="location"
                  className="rounded-md"
                />
                  <h4 className="text-[12px] text-center uppercase">
                    China Wok Restaurant
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
  );
};

export default CinemasHome;
