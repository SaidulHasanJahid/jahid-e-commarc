"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaBalanceScale,
  FaShoppingCart,
  FaGlobe,
  FaDollarSign,
  FaUser,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [showLang, setShowLang] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);

  return (
    <div className="w-full border-b">
      {/* Top Bar */}
      <div className="flex justify-end items-center text-sm px-6 py-2">
        <div className="relative mr-4 cursor-pointer" onClick={() => setShowLang(!showLang)}>
          <div className="flex items-center gap-1">
            <FaGlobe /> English <FiChevronDown />
          </div>
          {showLang && (
            <div className="absolute bg-white shadow-md top-full left-0 w-32 z-10">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">English</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">French</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Spanish</div>
            </div>
          )}
        </div>
        <div className="relative mr-4 cursor-pointer" onClick={() => setShowCurrency(!showCurrency)}>
          <div className="flex items-center gap-1">
            <FaDollarSign /> USD <FiChevronDown />
          </div>
          {showCurrency && (
            <div className="absolute bg-white shadow-md top-full left-0 w-24 z-10">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USD</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">EUR</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">INR</div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaUser /> My Account
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <div className="text-blue-700 text-3xl font-bold flex items-center">
            <span className="bg-blue-700 text-white p-2 rounded-full">
              <FaShoppingCart />
            </span>
            eCommerce
          </div>
          <nav className="hidden md:flex gap-6 ml-8 text-sm font-semibold">
            <span className="border-b-2 border-orange-500 pb-1 cursor-pointer">HOME</span>
            <span
              onMouseEnter={() => setShowProductDropdown(true)}
              onMouseLeave={() => setShowProductDropdown(false)}
              className="relative cursor-pointer hover:text-orange-500 transition-all"
            >
              PRODUCT
              {showProductDropdown && (
              <div className="absolute top-full left-0 w-screen bg-white shadow-xl p-6 grid grid-cols-5 gap-4 z-50">

                  <div>
                    <h4 className="font-bold mb-2">ELECTRONIC</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Television</li>
                      <li>Refrigerator</li>
                      <li>Washing Machine</li>
                      <li>Air Conditioners</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">FASHION & BEAUTY</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Accessories</li>
                      <li>Bags</li>
                      <li>Clothings</li>
                      <li>Shoes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">CAMERA & PHOTO</h4>
                    <ul className="space-y-1 text-sm">
                      <li>DSLR</li>
                      <li>Camera Phone</li>
                      <li>Action Camera</li>
                      <li>Digital Camera</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">SMART PHONE & TABLE</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Apple</li>
                      <li>Samsung</li>
                      <li>LG</li>
                      <li>Sony</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">SPORT & OUTDOOR</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Toys & Hobbies</li>
                      <li>Books & Office</li>
                      <li>Portable & Personal</li>
                    </ul>
                  </div>
                </div>
              )}
            </span>
            <span className="cursor-pointer hover:text-orange-500 transition">PAGES</span>
            <span className="cursor-pointer hover:text-orange-500 transition">BLOG</span>
            <span className="cursor-pointer hover:text-orange-500 transition">FAQ</span>
            <span className="cursor-pointer hover:text-orange-500 transition">CONTACT</span>
          </nav>
        </div>

        {/* Search bar */}
        <div className="flex flex-wrap items-center mt-4 md:mt-0 gap-2 bg-gray-100 p-2 rounded-full w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Product For"
            className="bg-transparent px-4 outline-none flex-grow"
          />
          <div className="relative cursor-pointer" onClick={() => setShowCategoryOptions(!showCategoryOptions)}>
            <div className="flex items-center gap-1 px-4">
              {selectedCategory} <FiChevronDown />
            </div>
            {showCategoryOptions && (
              <div className="absolute bg-white shadow-md top-full left-0 w-40 z-10">
                {[
                  "All Categories",
                  "Smartphones",
                  "Laptops",
                  "Fashion",
                  "Home Appliances",
                ].map((category) => (
                  <div
                    key={category}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryOptions(false);
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="bg-black text-white p-2 rounded-full">
            <FaSearch />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {[FaHeart, FaBalanceScale, FaShoppingCart].map((Icon, i) => (
            <div
              key={i}
              className="relative bg-gray-100 rounded-full p-2 text-black hover:text-orange-500 transition"
            >
              <Icon size={18} />
              <span className="absolute -top-1 -right-1 text-xs bg-gray-800 text-white rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
