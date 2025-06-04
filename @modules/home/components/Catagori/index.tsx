'use client';

import './indexcatagori.css';
import Image from 'next/image';

type Category = {
  title: string;
  count: number;
  image: string;
};

const categories: Category[] = [
  {
    title: 'Electronic',
    count: 13,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059283category-12png.png',
  },
  {
    title: 'Fashion & Beauty',
    count: 9,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059291category-10png.png',
  },
  {
    title: 'Camera & Photo',
    count: 0,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059299category-13png.png',
  },
  {
    title: 'Smart Phone & Table',
    count: 1,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059270category-11png.png',
  },
  {
    title: 'Sport & Outdoor',
    count: 1,
    image: 'https://eco.rafiinternational.com/assets/images/categories/1663059162category-13png.png',
  },
  {
    title: 'Jewelry & Watches',
    count: 0,
    image: 'https://unsplash.it/400/500?image=60',
  },
];

export default function FirstCard() {
  return (
    <section className="w-[98%] mx-auto py-10 bg-white cursor-pointer">
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((item, id) => (
          <div
            key={id}
            className="relative w-[285px] h-[322px] sm:w-[50%] sm:h-[300px] md:w-[32%] lg:w-[285px] lg:h-[322px] overflow-hidden shadow-lg group hover:shadow-md transition duration-300 rounded"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 285px"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="top-[120px] absolute bottom-3 left-1/2 transform -translate-x-1/2 h-[75px] w-[90%] bg-white text-center py-2 px-3 rounded shadow-md transition-all duration-500 ease-in-out group-hover:-translate-y-1">
              <h3 className="font-semibold text-gray-900 mt-1">{item.title}</h3>
              <p className="text-gray-500">({item.count})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
