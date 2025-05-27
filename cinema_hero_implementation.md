# Cinema-Themed Hero Section Implementation

This guide provides a detailed implementation plan for transforming the current Hero section into a cinematic, movie-themed component while maintaining its product showcasing functionality.

## Current vs. Proposed Hero Structure

The current Hero component primarily showcases products in a carousel. The proposed cinema-themed Hero will maintain this carousel functionality but add cinematic visual elements to create a more immersive, theater-like experience.

## Implementation Details

### 1. Component Structure Changes

```tsx
import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const CinemaHero = () => {
  return (
    <section className="relative letterbox film-grain-overlay">
      {/* Spotlight effect overlays */}
      <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-radial from-white/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-radial from-tommyzion-cinema-spotlight-gold/10 to-transparent rounded-full blur-xl"></div>
      
      {/* Theater curtain sides (decorative) */}
      <div className="hidden lg:block absolute top-0 left-0 w-16 h-full bg-tommyzion-cinema-theater-curtain opacity-40"></div>
      <div className="hidden lg:block absolute top-0 right-0 w-16 h-full bg-tommyzion-cinema-theater-curtain opacity-40"></div>
      
      {/* Film strip top border */}
      <div className="absolute top-0 left-0 w-full h-8 bg-film-strip"></div>
      
      {/* Main content */}
      <div className="container px-4 sm:px-8 xl:px-0 relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            {/* Now Showing banner */}
            <div className="bg-tommyzion-red py-2 px-4 rounded-t-md mx-auto max-w-xs text-center mb-6">
              <h2 className="text-white font-bold tracking-wider uppercase text-sm">Now Showing</h2>
            </div>
            
            {/* Main Hero Carousel with movie-poster styling */}
            <div className="movie-theater-screen">
              <HeroCarousel />
            </div>
            
            {/* Featured products with cinema ticket styling */}
            <div className="mt-8 relative">
              <HeroFeature />
            </div>
          </div>
        </div>
      </div>
      
      {/* Film strip bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-film-strip"></div>
    </section>
  );
};

export default CinemaHero;
```

### 2. CSS Classes to Add

Add these classes to your CSS or as Tailwind components:

```css
/* Add to your CSS file or in a styled-component */
.movie-theater-screen {
  @apply relative rounded-md overflow-hidden shadow-xl;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
}

.movie-theater-screen::before {
  content: '';
  @apply absolute inset-0 border-8 border-solid border-tommyzion-cinema-film-strip z-10 pointer-events-none;
  border-image: url('/images/textures/film-strip.png') 12 repeat;
}

.bg-film-strip {
  background-color: #333;
  background-image: url('/images/textures/film-strip.png');
  background-size: auto 100%;
  background-repeat: repeat-x;
}

/* For radial gradient support */
@layer utilities {
  .bg-gradient-radial {
    background-image: radial-gradient(var(--tw-gradient-stops));
  }
}
```

### 3. HeroCarousel Component Updates

Update the existing HeroCarousel component with these cinema-themed styles:

```tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";

// Import your carousel data
import { heroData } from "./heroData";

const HeroCarousel = () => {
  return (
    <div className="hero-carousel relative overflow-hidden rounded-md">
      {/* Film projector light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-md bg-gradient-radial from-white/20 to-transparent animate-projector z-10 pointer-events-none"></div>
      
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {heroData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative xl:h-[600px] lg:h-[500px] sm:h-[450px] h-[350px]">
              <Image
                className="w-full h-full object-cover"
                src={slide.img}
                alt={slide.title}
                width={1200}
                height={600}
              />
              
              {/* Content overlay with cinema-themed styling */}
              <div className="absolute inset-0 flex items-center">
                <div className="container">
                  <div className="max-w-[538px] ml-4 sm:ml-10 xl:ml-0">
                    {/* Spotlight effect on subtitle */}
                    <span className="relative inline-block text-xs sm:text-sm font-bold text-white uppercase tracking-wider px-2.5 py-1.5 bg-tommyzion-red rounded-sm mb-4 shadow-spotlight">
                      {slide.meta}
                    </span>
                    
                    {/* Movie-title inspired heading */}
                    <h1 className="text-heading-1 text-2xl sm:text-4xl md:text-5xl font-extrabold text-tommyzion-black mb-4 sm:mb-6 leading-tight tracking-wide drop-shadow-md">
                      {slide.title}
                    </h1>
                    
                    <p className="text-base sm:text-lg text-body mb-6 sm:mb-8 max-w-[400px]">
                      {slide.description}
                    </p>
                    
                    {/* Cinema ticket-styled button */}
                    <Link
                      href={slide.buttonLink}
                      className="ticket-btn inline-flex items-center gap-2.5 text-white font-medium text-center"
                    >
                      {slide.buttonText}
                      <span className="ml-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.8335 3.33398H4.16683C3.24593 3.33398 2.5 4.07992 2.5 5.00065V15.0007C2.5 15.9214 3.24593 16.6673 4.16683 16.6673H15.8335C16.7542 16.6673 17.5 15.9214 17.5 15.0007V5.00065C17.5 4.07992 16.7542 3.33398 15.8335 3.33398Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.5 8.33398H17.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.33333 16.6673V8.33398"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Cinema-styled pagination */}
      <style jsx global>{`
        .hero-carousel .swiper-pagination-bullet {
          @apply h-1 w-4 rounded-[11px] bg-[#DDD] opacity-70;
        }
        
        .hero-carousel .swiper-pagination-bullet-active {
          @apply w-5.5 bg-tommyzion-cinema-spotlight-gold opacity-100;
        }
        
        .hero-carousel .swiper-pagination {
          @apply xl:!bottom-5;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
```

### 4. HeroFeature Component Updates

Update the existing HeroFeature component with cinema ticket styling:

```tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroFeature = () => {
  return (
    <div className="flex flex-wrap -mx-4 gap-y-6">
      {/* Coming Soon Label */}
      <div className="w-full px-4 mb-4">
        <div className="flex items-center">
          <div className="h-px bg-gray-3 flex-1"></div>
          <h3 className="text-dark font-semibold px-4 uppercase text-sm tracking-wider">Coming Soon</h3>
          <div className="h-px bg-gray-3 flex-1"></div>
        </div>
      </div>
      
      {/* Feature Item 1 */}
      <div className="w-full md:w-1/2 lg:w-1/3 px-4">
        <div className="cinema-feature-item group">
          <div className="relative overflow-hidden rounded-md shadow-poster transition-all duration-300 group-hover:shadow-spotlight-gold">
            <Image
              src="/images/products/product-1.jpg"
              alt="Feature"
              width={300}
              height={200}
              className="w-full"
            />
            <div className="absolute top-0 left-0 p-2">
              <span className="inline-block bg-tommyzion-cinema-spotlight-gold text-tommyzion-black text-xs px-2 py-1 rounded">PREMIERE</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <Link href="/shop-details" className="text-white text-sm font-medium p-4 block w-full">
                View Details
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="text-dark font-semibold">Product Name</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-tommyzion-red font-medium">$99.00</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
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
        </div>
      </div>
      
      {/* Repeat for other feature items */}
    </div>
  );
};

export default HeroFeature;
```

## Required Assets

1. Film strip texture: `/images/textures/film-strip.png`
2. Spotlight gradient (can be CSS-based)
3. Theater curtain texture: `/images/textures/theater-curtain.png`

## Visual Impact Preview

When implemented, the Hero section will have:

1. A letterboxed, cinematic presentation with black bars
2. Film strip borders at top and bottom
3. Decorative theater curtains on the sides
4. Spotlight effects highlighting important content
5. Movie-poster styling for featured products
6. Ticket-styled buttons for calls to action
7. Star rating displays similar to movie ratings
8. "Now Showing" and "Coming Soon" section titles
9. Subtle film grain overlay for vintage cinema feel

## Responsive Considerations

- Theater curtains only show on larger screens
- Film strip borders adapt to screen width
- Spotlight effects scale appropriately
- Text sizes adjust for readability on smaller screens
- Film grain effect is more subtle on mobile

## Implementation Steps

1. Create the required texture assets
2. Add the new CSS classes to your stylesheet
3. Update the Hero component with the cinema-themed markup
4. Modify the HeroCarousel component with the new styles
5. Update the HeroFeature component with cinema ticket styling
6. Test responsiveness and adjust as needed