import React from "react";
import Image from "next/image";

// Cinema-themed feature data
const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Premium Delivery",
    description: "For all orders over $200",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Satisfaction Guarantee",
    description: "Easy returns within 30 days",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "VIP Secure Checkout",
    description: "Safe & encrypted transactions",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Concierge Service",
    description: "Exclusive customer support",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="mt-5 mb-8 text-center">
        <h3 className="text-tommyzion-cinema-spotlight-gold uppercase tracking-wider font-bold text-sm sm:text-base">
          Premium Features
        </h3>
        <div className="h-px bg-tommyzion-cinema-theater-curtain w-full max-w-xs mx-auto mt-2"></div>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-7.5 xl:gap-6 mt-6">
        {featureData.map((item, key) => (
          <div
            className="flex items-center gap-4 bg-tommyzion-black-rich p-3 sm:p-4 rounded-md border border-tommyzion-metallic-silver shadow-poster relative overflow-hidden group transition-all duration-300 hover:shadow-spotlight-gold"
            key={key}
          >
            {/* Ticket perforation on the left */}
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-tommyzion-black-rich">
              <div className="h-full w-full flex flex-col items-center justify-around">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-tommyzion-cinema-theater-dark"></div>
                ))}
              </div>
            </div>
            
            <div className="ml-2">
              <Image
                src={item.img}
                alt="icons"
                width={40}
                height={41}
                className="filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </div>

            <div>
              <h3 className="font-medium text-lg text-white group-hover:text-tommyzion-cinema-spotlight-gold transition-colors">{item.title}</h3>
              <p className="text-sm text-tommyzion-cinema-film-silver">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
