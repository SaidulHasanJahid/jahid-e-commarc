"use client";

import React, { useState } from "react";
import {
  FaGlobe,
  FaUser,
  FaChevronDown,
  FaSearch,
  FaHeart,
  FaExchangeAlt,
  FaShoppingCart,
} from "react-icons/fa";

export default function Header() {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between px-[100px] py-1 text-sm text-gray-600">
        <div>Contact & Support : 00 000 000 000</div>
        <div className="flex items-center gap-4">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <span className="flex items-center gap-1">
              <FaGlobe /> English <FaChevronDown className="text-xs" />
            </span>
            {showLanguageDropdown && (
              <ul className="absolute top-6 right-0 bg-white shadow-md rounded-md z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Bangla
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Arabic
                </li>
              </ul>
            )}
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
          >
            <span className="flex items-center gap-1">
              $ USD <FaChevronDown className="text-xs" />
            </span>
            {showCurrencyDropdown && (
              <ul className="absolute top-6 right-0 bg-white shadow-md rounded-md z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  USD
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  BDT
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  EUR
                </li>
              </ul>
            )}
          </div>
          <span className="flex items-center gap-1 cursor-pointer">
            <FaUser /> My Account
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex flex-wrap items-center justify-between px-[100px] py-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-700 flex items-center gap-2">
          <img
            src="https://eco.rafiinternational.com/assets/images/1685267209logopng.png"
            alt="logo"
            className="w-[262px] h-[40px]"
          />
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#" className="border-b-2 border-orange-400 pb-1">
            HOME
          </a>
          <div
            className="relative group cursor-pointer select-none"
            onMouseEnter={() => setShowProductDropdown(true)}
            onMouseLeave={() => setShowProductDropdown(false)}
          >
            <div className="flex items-center gap-1">
              <span className="font-semibold">PRODUCT</span>
              <FaChevronDown
                className={`transition-transform duration-300 text-sm ${
                  showProductDropdown ? "rotate-180 text-orange-500" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-[300px] transform -translate-x-1/2 top-full mt-4 bg-white shadow-xl rounded-md p-6 grid grid-cols-4 gap-6 w-[90vw] z-20 transition-all duration-300 ease-in-out origin-top ${
                showProductDropdown
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Column 1 */}
              <div>
                <h4 className="font-bold mb-2">ELECTRONIC</h4>
                <ul className="space-y-1 text-sm leading-[38px]">
                  <li className="hover:text-orange-500 transition">
                    TELEVISION
                  </li>
                  <li className="hover:text-orange-500 transition">
                    REFRIGERATOR
                  </li>
                  <li className="hover:text-orange-500 transition">
                    WASHING MACHINE
                  </li>
                  <li className="hover:text-orange-500 transition">
                    AIR CONDITIONERS
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    SPORT & OUTDOOR
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    TOYS & HOBBIES
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    OUTDOOR, RECREATION
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="font-bold mb-2">FASHION & BEAUTY</h4>
                <ul className="space-y-1 text-sm leading-[38px]">
                  <li className="hover:text-orange-500 transition">
                    ACCESSORIES
                  </li>
                  <li className="hover:text-orange-500 transition">BAGS</li>
                  <li className="hover:text-orange-500 transition">
                    CLOTHINGS
                  </li>
                  <li className="hover:text-orange-500 transition">SHOES</li>
                  <li className="font-bold hover:text-orange-500 transition">
                    JEWELRY & WATCHES
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    AUTOMOBILES
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    SURVEILLANCE SAFETY
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="font-bold mb-2">CAMERA & PHOTO</h4>
                <ul className="space-y-1 text-sm leading-[38px]">
                  <li className="hover:text-orange-500 transition">DSLR</li>
                  <li className="hover:text-orange-500 transition">
                    Camera Phone
                  </li>
                  <li className="hover:text-orange-500 transition">
                    Action Camera
                  </li>
                  <li className="hover:text-orange-500 transition">
                    Digital Camera
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    HEALTH & BEAUTY
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    HOME DECORATION
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="font-bold mb-2">SMART PHONE & TABLE</h4>
                <ul className="space-y-1 text-sm leading-[38px]">
                  <li className="hover:text-orange-500 transition">APPLE</li>
                  <li className="hover:text-orange-500 transition">SAMSUNG</li>
                  <li className="hover:text-orange-500 transition">LG</li>
                  <li className="hover:text-orange-500 transition">SONY</li>
                  <li className="font-bold hover:text-orange-500 transition">
                    BOOKS & OFFICE
                  </li>
                  <li className="font-bold hover:text-orange-500 transition">
                    PORTABLE & PERSONAL
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#">PAGES</a>
          <a href="#">BLOG</a>
          <a href="#">FAQ</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1 w-[380px]">
          <input
            type="text"
            placeholder="Search Product For"
            className="bg-transparent flex-grow px-3 outline-none text-sm"
          />
          <select className="bg-transparent text-sm outline-none">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
          </select>
          <button className="bg-black text-white rounded-full p-2">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center gap-4 ml-4">
          <div className="relative">
            <FaHeart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative">
            <FaExchangeAlt className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative">
            <FaShoppingCart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
