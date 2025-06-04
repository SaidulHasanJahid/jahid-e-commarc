"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaShoppingBag,
  FaShoppingCart,
  FaHeart,
  FaRegSmile,
  FaStar,
} from "react-icons/fa";

// Define Product type
type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  discount: string | null;
  category: string;
  image: string;
};

const tabs: string[] = ["ALL", "NEW ARRIVAL", "BEST SELLING", "TRENDING"];

const products: Product[] = [
  {
    id: 1,
    title: "Physical Product Title will be here",
    price: 345,
    oldPrice: null,
    rating: 4.5,
    reviews: 10,
    discount: null,
    category: "NEW ARRIVAL",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/16750533159Lyq1YHG.jpg",
  },
  {
    id: 2,
    title: "Physical Product Title will Be Here 102",
    price: 105,
    oldPrice: 205,
    rating: 4.2,
    reviews: 7,
    discount: "-49%",
    category: "NEW ARRIVAL",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1648013376Q0pmYfnP.jpg",
  },
  {
    id: 3,
    title: "Top Rated product title will be here according to ...",
    price: 100,
    oldPrice: 506,
    rating: 4.8,
    reviews: 21,
    discount: "-80%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1648013448fKLXa8ZZ.jpg",
  },
  {
    id: 4,
    title: "Revel - Real Estate Huuu",
    price: 315,
    oldPrice: 360,
    rating: 4.0,
    reviews: 3,
    discount: "-13%",
    category: "TRENDING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1648013500IhrIbnTy.jpg",
  },
  {
    id: 5,
    title: "Elegant Summer Hat",
    price: 45,
    oldPrice: 60,
    rating: 4.6,
    reviews: 5,
    discount: "-25%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378035XJWgisPU.jpg",
  },
  {
    id: 6,
    title: "Stylish Sneakers",
    price: 120,
    oldPrice: 150,
    rating: 4.7,
    reviews: 18,
    discount: "-20%",
    category: "TRENDING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378156sxEgX2Pk.jpg",
  },
  {
    id: 7,
    title: "Modern Glasses",
    price: 80,
    oldPrice: 110,
    rating: 4.3,
    reviews: 9,
    discount: "-27%",
    category: "NEW ARRIVAL",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639378418BxWim5Uq.jpg",
  },
  {
    id: 8,
    title: "Stylish Backpack",
    price: 150,
    oldPrice: 180,
    rating: 4.4,
    reviews: 12,
    discount: "-16%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392364Li5C3bEO.jpg",
  },
  {
    id: 9,
    title: "Cool Jacket for Men",
    price: 200,
    oldPrice: 280,
    rating: 4.1,
    reviews: 20,
    discount: "-29%",
    category: "TRENDING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/16393924528O19PHvm.jpg",
  },
  {
    id: 10,
    title: "Luxury Wrist Watch",
    price: 500,
    oldPrice: 600,
    rating: 4.9,
    reviews: 15,
    discount: "-17%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392531mZxqr9sa.jpg",
  },
  {
    id: 11,
    title: "Cool Jacket for Men",
    price: 200,
    oldPrice: 280,
    rating: 4.1,
    reviews: 20,
    discount: "-29%",
    category: "TRENDING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639392738TGJsX6up.jpg",
  },
  {
    id: 12,
    title: "Luxury Wrist Watch",
    price: 500,
    oldPrice: 600,
    rating: 4.9,
    reviews: 15,
    discount: "-17%",
    category: "BEST SELLING",
    image:
      "https://eco.rafiinternational.com/assets/images/thumbnails/1639456386BpfFKqHN.jpg",
  },
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const filtered: Product[] =
    activeTab === "ALL"
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <div className="px-4 mt-[50px] py-6 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex space-x-6 justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium border-b-2 pb-1 transition duration-300 cursor-pointer ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="h-[496px] group text-center relative overflow-hidden transition duration-300 bg-white"
          >
            {product.discount && (
              <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 z-10">
                {product.discount}
              </span>
            )}

            <div className="relative">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Icons */}
              <div className="absolute top-25 cursor-pointer right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
                <button className="bg-white p-2 hover:bg-gray-100">
                  <FaShoppingBag />
                </button>
                <button className="bg-white p-2 shadow hover:bg-gray-100">
                  <FaShoppingCart />
                </button>
                <button className="bg-white p-2 shadow hover:bg-gray-100">
                  <FaHeart />
                </button>
                <button className="bg-white p-2 shadow hover:bg-gray-100">
                  <FaRegSmile />
                </button>
              </div>
            </div>

            <h2 className="text-[15px] text-[#767678] font-medium mt-4 line-clamp-2">
              {product.title}
            </h2>
            <div className="mt-1 space-x-2 text-sm">
              <span className="text-[#767678] font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="line-through text-gray-400">
                  ${product.oldPrice}
                </span>
              )}
            </div>
            <div className="flex items-center justify-center text-sm text-yellow-500 mt-1">
              <FaStar className="mr-1" />
              {product.rating.toFixed(1)} ({product.reviews})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
