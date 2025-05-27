"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          {/* Film projector light effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-gradient-radial from-white/20 to-transparent animate-projector z-10 pointer-events-none"></div>
          
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="relative inline-block bg-tommyzion-red text-white px-3 py-1 rounded-sm mb-5 shadow-spotlight">
              <span className="font-bold tracking-wider uppercase text-sm">Featured</span>
            </div>
            
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-tommyzion-cinema-spotlight-gold">
                30%
              </span>
              <span className="block text-white text-sm sm:text-custom-1 sm:leading-[24px]">
                Special
                <br />
                Offer
              </span>
            </div>

            <h1 className="font-semibold text-white text-xl sm:text-3xl mb-3 drop-shadow-md">
              <a href="#" className="hover:text-tommyzion-cinema-spotlight-gold transition-colors">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p className="text-tommyzion-cinema-film-silver">
            Experience crystal-clear sound with premium noise cancellation. The perfect companion for your daily commute or travel adventures.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md ticket-btn bg-tommyzion-red py-3 px-9 ease-out duration-200 hover:bg-tommyzion-red-bright mt-10 items-center"
            >
              <span>Get Tickets</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
              </svg>
            </a>
            
            <div className="mt-5 flex">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-tommyzion-cinema-spotlight-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-tommyzion-cinema-spotlight-gold/30 to-transparent rounded-full opacity-70"></div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
              className="relative z-10"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          {/* Film projector light effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-gradient-radial from-white/20 to-transparent animate-projector z-10 pointer-events-none"></div>
          
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="relative inline-block bg-tommyzion-cinema-spotlight-gold text-tommyzion-black px-3 py-1 rounded-sm mb-5 shadow-spotlight-gold">
              <span className="font-bold tracking-wider uppercase text-sm">Limited Edition</span>
            </div>
            
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-tommyzion-red-bright">
                30%
              </span>
              <span className="block text-white text-sm sm:text-custom-1 sm:leading-[24px]">
                Premium
                <br />
                Discount
              </span>
            </div>

            <h1 className="font-semibold text-white text-xl sm:text-3xl mb-3 drop-shadow-md">
              <a href="#" className="hover:text-tommyzion-cinema-spotlight-gold transition-colors">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p className="text-tommyzion-cinema-film-silver">
              Premium audio experience with cutting-edge technology. Limited edition model featuring enhanced bass and extended battery life.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md ticket-btn bg-tommyzion-cinema-theater-curtain py-3 px-9 ease-out duration-200 hover:bg-tommyzion-red mt-10 items-center"
            >
              <span>Premium Access</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </a>
            
            <div className="mt-5 flex">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-tommyzion-cinema-spotlight-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-tommyzion-red-light/30 to-transparent rounded-full opacity-70"></div>
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
              className="relative z-10"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
