"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomePage() {
  return (
    <div>
      {/* Full-Width Carousel (Outside the Container) */}
      <div className="relative w-full h-[500px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/images/carousal/1.webp"
                alt="Wedding 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/images/carousal/2.webp"
                alt="Wedding 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/images/carousal/3.webp"
                alt="Wedding 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 py-12 text-center text-white shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold">Make Your Dream Wedding a Reality!</h2>
        <p className="text-lg md:text-xl mt-2">Connect with top wedding vendors and plan your perfect day effortlessly.</p>
        
        <div className="mt-6 flex justify-center">
          <a
            href="tel:+919876543210"
            className="bg-white text-blue-600 text-lg md:text-xl font-semibold px-8 py-4 rounded-lg shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Call Now: +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
}
