import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { BsQrCode } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-[#FAFAFA] body-font bg-[#000000]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-[19px] text-[#FAFAFA] tracking-widest text-sm mb-3">
                Exclusive
              </h2>
              <nav className="list-none mb-10">
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Subscribe</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA] pt-5">Get 10% off your first order</a>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-[200px] bg-[#000000] text-[#FAFAFA] border rounded-l-none"
                  />
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-20px mb-3">
                Support
              </h2>
              <nav className="list-none mb-10 gap-20">
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA] mb-5 pt-4">
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">exclusive@gmail.com</a>
                </li>
                <li>
                  <a className="text-[#FAFAFA]">+88015-88888-9999</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-20px mb-3">
                Account
              </h2>
              <nav className="list-none mb-10">
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">My Account</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Login / Register</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Cart</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Wishlist</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Shop</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-20px mb-3">
                Quick Link
              </h2>
              <nav className="list-none mb-10">
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Privacy Policy</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Terms Of Use</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">FAQ</a>
                </li>
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA]">Contact</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#FAFAFA] tracking-widest text-20px mb-3">
                Download App
              </h2>
              <nav className="list-none mb-10">
                <li className="space-y-8 mb-5">
                  <a className="text-[#FAFAFA] text-[12px]">
                    Save $3 with App New User Only
                  </a>
                </li>
                <li className="flex space-x-4 justify-center mt-5 py-3 pt-2 gap-1 mb-5">
                  <BsQrCode className="w-[80px] h-[80px]" />
                  <a>
                    <Image src="/app-play.png"  alt="app-play" width={104} height={30} className=" pt-2"/>
                    <Image src="/app-store.png" alt="app-store" width={104} height={34} />
                  </a>
                </li>
                <li className="flex space-x-4 justify-center mt-4">
                  <Link href="#">
                    <FaFacebookF className="text-white w-6 h-6 pt-1" />
                  </Link>
                  <Link href="#">
                    <FiTwitter className="text-white w-6 h-6  pt-1" />
                  </Link>
                  <Link href="#">
                    <FaInstagram className="text-white w-6 h-6 pt-1" />
                  </Link>
                  <Link href="#">
                    <FaLinkedinIn className="text-white w-6 h-6 bg-black pt-1" />
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-[#000000]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
            <p className="text-gray-500 text-sm text-center">
              Copyright Rimel 2022. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;


