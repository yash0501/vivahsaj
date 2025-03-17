"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { Home, Camera, Brush, Utensils, MoreHorizontal, Star } from "lucide-react";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="py-4">
      {/* Responsive Full-Width Carousel with Rounded Corners */}
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
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
              <Image
                src="/images/carousal/1.webp"
                alt="Wedding 1"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/carousal/2.webp"
                alt="Wedding 2"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/carousal/3.webp"
                alt="Wedding 3"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Full-Width CTA Section */}
      <div className="w-full py-6 md:py-8">
        <a
          href="tel:+919876543210"
          className="block w-full bg-brand-interactive text-white text-lg md:text-xl font-semibold py-4 md:py-5 rounded-lg shadow-lg text-center hover:bg-alternative-interactiveDark transition-transform transform hover:scale-105"
        >
          Plan Your Wedding
        </a>
      </div>

      {/* Categories Section - Now a Grid Layout */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Explore Categories</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <CategoryItem href="/venues" icon={<Home size={32} />} label="Venues" />
          <CategoryItem href="/photographers" icon={<Camera size={32} />} label="Photographers" />
          <CategoryItem href="/makeup-artists" icon={<Brush size={32} />} label="Makeup Artists" />
          <CategoryItem href="/caterers" icon={<Utensils size={32} />} label="Caterers" />
          <CategoryItem href="/explore" icon={<MoreHorizontal size={32} />} label="Explore" />
        </div>
      </div>

      {/* Popular Vendors Section */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-text-primary mb-4">Popular & Recommended Vendors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VendorCard
            image="/images/vendors/vendor1.webp"
            name="Rajgharana Resorts"
            category="Venue"
            rating={5}
          />
        </div>
      </div>

      {/* User Testimonials Section */}
      <div className="mt-10 py-12 bg-gradient-to-r from-background-main to-alternative-backgroundWarm rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-brand-secondary mb-6">What Our Clients Say</h2>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full max-w-3xl mx-auto"
        >
          <SwiperSlide>
            <TestimonialCard
              name="Aarav & Meera"
              image="/images/testimonials/image1.jpeg"
              review="Vivahsaj made our dream wedding a reality! The vendors were exceptional, and everything was seamless."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Raj & Simran"
              image="/images/testimonials/image2.jpg"
              review="From photographers to decorators, every vendor we booked through Vivahsaj was top-notch. Highly recommend!"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Kabir & Aisha"
              image="/images/testimonials/image3.jpg"
              review="Luxury and perfection define Vivahsaj! The customer support was phenomenal, and the entire planning process was stress-free."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

/* Category Item Component */
function CategoryItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center min-w-[100px] p-5 rounded-xl shadow-lg border border-brand-primary 
      bg-gradient-to-r from-brand-primary to-alternative-primaryLight text-white 
      hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      {icon}
      <span className="mt-2 font-medium text-sm text-center whitespace-nowrap truncate">{label}</span>
    </Link>
  );
}

/* Vendor Card Component */
function VendorCard({ image, name, category, rating }: { image: string; name: string; category: string; rating: number }) {
  return (
    <div className="relative bg-gradient-to-r from-background-main to-alternative-backgroundWarm rounded-2xl shadow-xl border-2 border-brand-primary p-5 transition-transform hover:scale-105 duration-300 ease-in-out">
      {/* Vendor Image with Gold Overlay */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-xl"></div>
      </div>

      {/* Vendor Details */}
      <h3 className="text-xl font-bold text-brand-secondary mt-4">{name}</h3>
      <p className="text-sm text-text-secondary italic">{category}</p>

      {/* Star Ratings - Gold & Elegant */}
      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={20} className={i < Math.round(rating) ? "text-brand-primary" : "text-utility-lightGray"} />
        ))}
        <span className="ml-2 text-lg font-semibold text-brand-primary">{rating}</span>
      </div>

      {/* Call to Action */}
      <button className="mt-4 w-full bg-brand-primary text-white py-2 rounded-lg font-semibold shadow-md hover:bg-alternative-primaryDark transition">
        View Profile
      </button>
    </div>
  );
}


/* Testimonial Card Component */
function TestimonialCard({ name, image, review }: { name: string; image: string; review: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 mx-4 rounded-2xl shadow-lg bg-background-card border border-brand-primary hover:scale-105 transition-transform duration-300" style={{ zIndex: 0 }}>
      {/* Quote Icon */}
      <Quote size={40} className="text-brand-primary mb-2" />

      {/* User Image - Circular */}
      <div className="w-16 h-16 aspect-square border-4 border-brand-primary rounded-full overflow-hidden shadow-lg relative">
        <Image 
          src={image} 
          alt={name} 
          width={64} 
          height={64} 
          className="rounded-full object-cover w-full h-full"
        />
      </div>

      {/* Review Text */}
      <p className="mt-4 text-text-primary text-lg italic">&quot;{review}&quot;</p>

      {/* User Name */}
      <span className="mt-2 text-brand-secondary font-semibold">{name}</span>
    </div>
  );
}