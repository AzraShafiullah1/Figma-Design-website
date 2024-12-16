

import React from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const categories = [
  { name: "Phones", icon: <CiMobile4 className="w-12 h-12 mb-3 mx-auto mr-4 left-9" /> },
  { name: "Computers", icon: <HiOutlineComputerDesktop className="w-12 h-12 mb-3 mx-auto" /> },
  { name: "SmartWatch", icon: <BsSmartwatch className="w-12 h-12 mb-3 mx-auto " /> },
  { name: "Camera", icon: <IoCameraOutline className="w-12 h-12 mb-3 mx-auto" /> },
  { name: "Headphones", icon: <MdOutlineHeadphones className="w-12 h-12 mb-3 mx-auto" /> },
  { name: "Gaming", icon: <MdOutlineVideogameAsset className="w-12 h-12 mb-3 mx-auto" /> },
];

const Herosection = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 pt-3 mx-auto">
          <div>
            {/* Title and Arrows */}
            <div className="flex justify-end items-center mb-6">
            

              <div className="flex space-x-4 justify-center items-center mb-6">
                <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 overflow-auto">
                  <FaArrowLeft className="text-gray-700 w-6 h-6 " />
                </button>
                <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 overflow-auto">
                  <FaArrowRight className="text-gray-700 w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto space-x-4 py-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-40 border-2 border-gray-200 rounded-lg text-center p-9 transform transition duration-300 ease-in-out hover:bg-[#DB4444] hover:scale-105"
                >
                  {category.icon}
                  <p className="text-xl text-gray-700">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
