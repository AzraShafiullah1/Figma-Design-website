"use client";  // Add this line at the very top of your file

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";




export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
 <div className="flex items-center justify-center h-[48px] w-full bg-[#000000] gab-90 px-4 sm:px-6 md:px-10">
    <span className="text-[#FAFAFA] text-sm sm:text-base">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <a className="mx-4 underline" href="/home">
        Shop Now
      </a>
    </span>

    <select className="bg-[#000000] text-[#FAFAFA] mx-4 text-sm sm:text-base">
      <option value="english">English</option>
    </select>
  </div>

      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex p-5 flex-col max-w-full md:flex-row items-center">
          {/* Logo/Brand */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-12 w-[128px] h-[25px] font-bold text-2xl">Exclusive</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="md:ml-auto md:mr-auto  flex-wrap items-center text-base justify-center gap-9 hidden md:flex">
            <Link href="/" className="mr-5 hover:underline cursor-pointer text-black">
              Home
            </Link>
            <Link href="/contact" className="mr-5 hover:underline cursor-pointer text-black transition-all duration-150">
              Contact
            </Link>
            <Link href="/about" className="mr-5 hover:underline cursor-pointer text-black">
              About
            </Link>
            <Link href="/signup" className="mr-5 hover:underline cursor-pointer text-black">
              Sign Up
            </Link>
          </nav>

             {/* Search, Heart, and Cart Icons */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <input
            type="text"
            placeholder="What are You Looking For?"
            className="w-[200px] sm:w-[250px] bg-[#F5F5F5] p-2 rounded-md focus:outline-none"
          />
          <IoIosSearch className="text-black text-xl" />
          <FaRegHeart className="text-black text-xl mx-2" />
          <AiOutlineShoppingCart className="text-black text-xl mx-2" />
        </div>
          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
            <svg
                xmlns="/public/Menu.gif"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            </div>
          {/* Mobile Dropdown Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white px-4 py-2`}>
          <Link href="/" className="block py-2 hover:underline">Home
          </Link>
          <Link href="/contact" className="block py-2 hover:underline">Contact
          </Link>
          <Link href="/about" className="block py-2 hover:underline">About
          </Link>
          <Link href="/signup" className="block py-2 hover:underline">Sign Up
          </Link>
        </div>
        </div>
         </header>
    </div>
  );
};




       

         