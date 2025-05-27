import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden letterbox film-grain-overlay film-strip-top-bottom pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-tommyzion-cinema-theater-dark relative">
      {/* Spotlight effects */}
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-radial from-white/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-radial from-tommyzion-cinema-spotlight-gold/10 to-transparent rounded-full blur-xl"></div>
      
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 relative z-10">
        {/* Now Showing banner */}
        <div className="bg-tommyzion-red py-2 px-4 rounded-t-md mx-auto max-w-xs text-center mb-6">
          <h2 className="text-white font-bold tracking-wider uppercase text-sm">Now Showing</h2>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="movie-theater-screen relative z-1 rounded-[10px] bg-tommyzion-black-rich overflow-hidden border-tommyzion-cinema-film-strip">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1 opacity-30"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full text-center mb-4">
                <h3 className="text-tommyzion-cinema-spotlight-gold font-bold tracking-wider uppercase text-sm">Coming Soon</h3>
                <div className="h-px bg-tommyzion-cinema-theater-curtain w-full mt-2"></div>
              </div>
              <div className="w-full relative rounded-[10px] bg-tommyzion-black-rich p-4 sm:p-7.5 shadow-poster border-2 border-tommyzion-cinema-spotlight-gold movie-poster overflow-hidden">
                <div className="absolute top-1 right-1 bg-tommyzion-red text-white text-xs px-2 py-1 rounded-sm">
                  EXCLUSIVE
                </div>
                
                <div className="flex items-center gap-8">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-white text-xl mb-16 drop-shadow-md">
                      <a href="#" className="hover:text-tommyzion-cinema-spotlight-gold transition-colors"> iPhone 14 Plus & 14 Pro Max </a>
                    </h2>

                    <div>
                      <p className="font-medium text-tommyzion-cinema-film-silver text-custom-sm mb-1.5 uppercase tracking-wider">
                        Limited Engagement
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-tommyzion-red">
                          $699
                        </span>
                        <span className="font-medium text-xl text-gray-5 line-through">
                          $999
                        </span>
                      </div>
                      
                      <div className="mt-3 flex">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-tommyzion-cinema-spotlight-gold"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-radial from-tommyzion-cinema-spotlight-gold/30 to-transparent rounded-full opacity-70"></div>
                    <Image
                      src="/images/hero/hero-02.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                      className="relative z-10"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-tommyzion-cinema-theater-seats p-4 sm:p-7.5 shadow-poster border-2 border-tommyzion-metallic-silver movie-poster overflow-hidden">
                <div className="absolute top-1 right-1 bg-tommyzion-cinema-spotlight-gold text-tommyzion-black-rich text-xs px-2 py-1 rounded-sm font-bold">
                  PREMIERE
                </div>
                
                <div className="flex items-center gap-8">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-white text-xl mb-16 drop-shadow-md">
                      <a href="#" className="hover:text-tommyzion-cinema-spotlight-gold transition-colors"> Wireless Headphone </a>
                    </h2>

                    <div>
                      <p className="font-medium text-tommyzion-cinema-film-silver text-custom-sm mb-1.5 uppercase tracking-wider">
                        Special Feature
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-tommyzion-red-bright">
                          $699
                        </span>
                        <span className="font-medium text-xl text-gray-5 line-through">
                          $999
                        </span>
                      </div>
                      
                      <div className="mt-3 flex">
                        {[1, 2, 3, 4].map((star, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-tommyzion-cinema-spotlight-gold"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-radial from-tommyzion-cinema-spotlight-red/30 to-transparent rounded-full opacity-70"></div>
                    <Image
                      src="/images/hero/hero-01.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                      className="relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features with ticket styling --> */}
      <div className="relative z-10">
        <HeroFeature />
      </div>
      
      {/* Theater curtain bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-tommyzion-cinema-theater-curtain opacity-40"></div>
    </section>
  );
};

export default Hero;
