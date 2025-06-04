'use client';

import './ind.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Best Furniture',
    discount: 'Get Up to 40% Off',
    subtitle:
      'Furniture must have personality, as well as be beautiful and make your home Gorgeous.',
    button: 'SHOP NOW',
    image: 'https://eco.rafiinternational.com/assets/images/sliders/164743050917png.png',
  },
  {
    id: 2,
    title: 'Top Picks',
    discount: 'Save Big This Season',
    subtitle: 'Stylish and comfy essentials that fit your lifestyle.',
    button: 'SHOP NOW',
    image: 'https://eco.rafiinternational.com/assets/images/sliders/16474305667png.png',
  },
  {
    id: 3,
    title: 'Top Picks',
    discount: 'Save Big This Season',
    subtitle: 'Stylish and comfy essentials that fit your lifestyle.',
    button: 'SHOP NOW',
    image: 'https://eco.rafiinternational.com/assets/images/sliders/164743055618png.png',
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-right-center flex items-center  justify-start pl-5 sm:pl-10"
              style={{ backgroundImage: `url(${slide.image})` } }
            >
              
              <div className="bg-white/0 text-black max-w-md px-5 py-3 md:ml-60">
                <h4 className="text-xl font-semibold mb-2">{slide.title}</h4>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.discount}</h1>
                <p className="text-base md:text-lg font-semibold mb-4">{slide.subtitle}</p>
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="swiper-button-prev z-50 absolute top-1/2 left-4 transform -translate-y-1/2 text-white icon-pev">
        <FaChevronLeft size={40} />

        </div>
        <div className="swiper-button-next z-50 icon-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <FaChevronRight size={50} />
        </div>
      </Swiper>

      {/* Pagination bullets customization */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          bottom: 20px !important;
          display: flex;
          justify-content: center;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }
      `}</style>
    </div>
  );
}
