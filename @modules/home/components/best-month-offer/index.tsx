"use client";
import './best.css';
import Image from "next/image";

export default function BestMonthOffer() {
  return (
    <section className="px-4 mt-[50px] md:px-16 py-10 bg-white cursor-pointer">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Best Month Offer</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto sub-title">
          Erat pellentesque curabitur euismod dui etiam pellentesque rhoncus fermentum
          tristique lobortis lectus magnis. Consequat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Men Collection */}
        <div className="group relative overflow-hidden rounded-lg md:col-span-2 h-[500px]">
          <Image
            src="https://eco.rafiinternational.com/assets/images/arrival/166306363884png.png"
            alt="Men Collection"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 flex justify-end items-center p-4 sm:p-10">
            <div className="relative w-full sm:max-w-md px-10 py-6">
              <div className="absolute top-0 bottom-0 right-0 w-[60%] h-[300px] border-t-2 border-b-2 border-r-2 border-orange-500 pointer-events-none"></div>
              <div className="relative z-10 text-right">
                <p className="text-sm font-semibold tracking-wide card-text-first">SALE UP TO 30%</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-snug card-sec-first">
                  MEN COLLECTION
                </h3>
                <p className="text-sm text-gray-700 mt-2 uppercase card-th-first">New Autumn Arrival 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* EXO Travel Bags */}
        <div className="group relative overflow-hidden rounded-lg md:col-span-1 h-[500px]">
          <Image
            src="https://eco.rafiinternational.com/assets/images/arrival/166306365085png.png"
            alt="EXO Travel Bags"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white px-4 text-center card-text-container">
            <p className="text-sm font-semibold tracking-wider">SALE UP TO 50%</p>
            <h3 className="mt-2 cter-text">EXO TRAVEL BAGS</h3>
            <p className="mt-1 last-text">BAGS AND SHOES</p>
          </div>
        </div>

        {/* New Arrivals */}
        <div className="group relative overflow-hidden rounded-lg md:col-span-1 h-[500px]">
          <Image
            src="https://eco.rafiinternational.com/assets/images/arrival/166306009486png.png"
            alt="New Arrivals"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute top-4 left-5 third-card text-right p-4">
            <p className="text-sm text-gray-700 font-semibold tracking-wider th-first-card">SALE UP TO 70%</p>
            <h3 className="text-xl font-bold mt-1 text-gray-900 th-sec-card">NEW ARRIVALS</h3>
            <p className="text-sm text-gray-600 mt-1 th-th-card">Casual Shoes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
