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
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  discount: string | null;
  category: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  galaryimage?: { link: string }[]; // <-- now optional
};


const tabs: string[] = ["ALL", "NEW ARRIVAL", "BEST SELLING", "TRENDING"];
 
export const products: Product[] = [
  {
    id: 1,
    title: "Physical Product Title will be here",
    slug: "physical-product-title-will-be-here",
    price: 345,
    oldPrice: null,
    rating: 4.5,
    reviews: 10,
    discount: null,
    category: "NEW ARRIVAL",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/16750533159Lyq1YHG.jpg",
    image1: "https://source.unsplash.com/random/400x400?product1",
    image2: "https://source.unsplash.com/random/400x400?product2",
    image3: "https://source.unsplash.com/random/400x400?product3",
    galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product1",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product2",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product3",
      }
    ]
  },
  {
    id: 2,
    title: "Physical Product Title will Be Here 102",
    slug: "physical-product-title-will-be-here-102",
    price: 105,
    oldPrice: 205,
    rating: 4.2,
    reviews: 7,
    discount: "-49%",
    category: "NEW ARRIVAL",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1648013376Q0pmYfnP.jpg",
    image1: "https://source.unsplash.com/random/400x400?product4",
    image2: "https://source.unsplash.com/random/400x400?product5",
    image3: "https://source.unsplash.com/random/400x400?product6",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product4",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product5",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product6",
      }
    ]
  },
  {
    id: 3,
    title: "Top Rated product title will be here according to ...",
    slug: "top-rated-product-title-will-be-here-according-to",
    price: 100,
    oldPrice: 506,
    rating: 4.8,
    reviews: 21,
    discount: "-80%",
    category: "BEST SELLING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1648013448fKLXa8ZZ.jpg",
    image1: "https://source.unsplash.com/random/400x400?product7",
    image2: "https://source.unsplash.com/random/400x400?product8",
    image3: "https://source.unsplash.com/random/400x400?product9",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product7",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product8",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product9",
      }
    ]
  },

  {
    id: 4,
    title: "Revel - Real Estate Huuu",
    slug: "revel-real-estate-huuu",
    price: 315,
    oldPrice: 360,
    rating: 4.0,
    reviews: 3,
    discount: "-13%",
    category: "TRENDING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1648013500IhrIbnTy.jpg",
    image1: "https://source.unsplash.com/random/400x400?product10",
    image2: "https://source.unsplash.com/random/400x400?product11",
    image3: "https://source.unsplash.com/random/400x400?product12",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product10",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product11",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product12",
      }
    ]
  },
  {
    id: 5,
    title: "Elegant Summer Hat",
    slug: "elegant-summer-hat",
    price: 45,
    oldPrice: 60,
    rating: 4.6,
    reviews: 5,
    discount: "-25%",
    category: "BEST SELLING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639378035XJWgisPU.jpg",
    image1: "https://source.unsplash.com/random/400x400?product13",
    image2: "https://source.unsplash.com/random/400x400?product14",
    image3: "https://source.unsplash.com/random/400x400?product15",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product13",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product14",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product15",
      }
    ]
  },
  {
    id: 6,
    title: "Stylish Sneakers",
    slug: "stylish-sneakers",
    price: 120,
    oldPrice: 150,
    rating: 4.7,
    reviews: 18,
    discount: "-20%",
    category: "TRENDING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639378156sxEgX2Pk.jpg",
    image1: "https://source.unsplash.com/random/400x400?product16",
    image2: "https://source.unsplash.com/random/400x400?product17",
    image3: "https://source.unsplash.com/random/400x400?product18",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product16",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product17",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product18",
      }
    ]
  },
  {
    id: 7,
    title: "Modern Glasses",
    slug: "modern-glasses",
    price: 80,
    oldPrice: 110,
    rating: 4.3,
    reviews: 9,
    discount: "-27%",
    category: "NEW ARRIVAL",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639378418BxWim5Uq.jpg",
    image1: "https://source.unsplash.com/random/400x400?product19",
    image2: "https://source.unsplash.com/random/400x400?product20",
    image3: "https://source.unsplash.com/random/400x400?product21",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product19",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product20",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product21",
      }
    ]
  },
  {
    id: 8,
    title: "Stylish Backpack",
    slug: "stylish-backpack",
    price: 150,
    oldPrice: 180,
    rating: 4.4,
    reviews: 12,
    discount: "-16%",
    category: "BEST SELLING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639392364Li5C3bEO.jpg",
    image1: "https://source.unsplash.com/random/400x400?product22",
    image2: "https://source.unsplash.com/random/400x400?product23",
    image3: "https://source.unsplash.com/random/400x400?product24",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product22",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product23",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product24",
      }
    ]
  },
  {
    id: 9,
    title: "Cool Jacket for Men",
    slug: "cool-jacket-for-men",
    price: 200,
    oldPrice: 280,
    rating: 4.1,
    reviews: 20,
    discount: "-29%",
    category: "TRENDING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/16393924528O19PHvm.jpg",
    image1: "https://source.unsplash.com/random/400x400?product25",
    image2: "https://source.unsplash.com/random/400x400?product26",
    image3: "https://source.unsplash.com/random/400x400?product27",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product25",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product26",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product28",
      }
    ]
  },
  {
    id: 10,
    title: "Luxury Wrist Watch",
    slug: "luxury-wrist-watch",
    price: 500,
    oldPrice: 600,
    rating: 4.9,
    reviews: 15,
    discount: "-17%",
    category: "BEST SELLING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639392531mZxqr9sa.jpg",
    image1: "https://source.unsplash.com/random/400x400?product28",
    image2: "https://source.unsplash.com/random/400x400?product29",
    image3: "https://source.unsplash.com/random/400x400?product30",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product28",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product29",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product30",
      }
    ]
  },
  {
    id: 11,
    title: "Cool Jacket for Men",
    slug: "cool-jacket-for-men-2",
    price: 200,
    oldPrice: 280,
    rating: 4.1,
    reviews: 20,
    discount: "-29%",
    category: "TRENDING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639392738TGJsX6up.jpg",
    image1: "https://source.unsplash.com/random/400x400?product31",
    image2: "https://source.unsplash.com/random/400x400?product32",
    image3: "https://source.unsplash.com/random/400x400?product33",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product31",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product32",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product33",
      }
    ]
  },
  {
    id: 12,
    title: "Luxury Wrist Watch",
    slug: "luxury-wrist-watch-2",
    price: 500,
    oldPrice: 600,
    rating: 4.9,
    reviews: 15,
    discount: "-17%",
    category: "BEST SELLING",
    image: "https://eco.rafiinternational.com/assets/images/thumbnails/1639456386BpfFKqHN.jpg",
    image1: "https://source.unsplash.com/random/400x400?product34",
    image2: "https://source.unsplash.com/random/400x400?product35",
    image3: "https://source.unsplash.com/random/400x400?product36",
      galaryimage:[
      {
        link:"https://source.unsplash.com/random/400x400?product34",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product35",
      },
      {
        link:"https://source.unsplash.com/random/400x400?product36",
      }
    ]
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
           <Link href={`/product/${product.slug}`}>
            
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

            </Link>
          </div>
        ))}
       </div>
        
        
    </div>
  );
}
