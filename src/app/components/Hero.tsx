import React from 'react'
import { FaApple, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
     return (
    <div className="flex justify-center items-center py-20">
      {/*Container Max-width*/}
      <div className="border p-4 w-[300px] gap-16 rounded shadow text-sm">
        {/* Left Side: Navigation Menue*/}
        <div className="border-r-2  border-neutral-100 p-10 hidden md:block">
          <ul className="space-y-3">
            {[
              "Woman’s Fashion",
              "Men’s Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((category, index) => (
              <li
                key={index}
                className="text-slate-900 flex justify-between items-center leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150"
              >
                <span>{category}</span>
                {index < 2 && <IoIosArrowForward className="text-lg ml-2" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
       <section  className="text-gray-600 body-font container px-[300px] "> 
      

  
      {/* Sidebar */}
      <div className="w-[2[17px] h-[344px] pt-9 pl-9 gap-[16px] flex ">
      
      
      <div className="items-center justify-items bg-black rounded-md  p-1 pt-8 container px-[100px] py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        
      <div className="text-white flex flex-col justify-end  sm:w-[400px] rounded-lg overflow-hidden sm:mr-10">
      
      
          <div className="flex items-center gap-2">
            <FaApple className="sm:text-1xl md:text-4xl" />
            <span className="sm:text-sm md:text-base font-light">
              iPhone 14 Series
            </span>
          </div>
          <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Up to 10% off Voucher
          </h1>
          <Link
            href={"#products"}
            className="underline underline-offset-4 hover:font-semibold flex items-center gap-2"
          >
            Shop Now
            <FaArrowRight />
          </Link>
        </div>
        <div className="ml-auto top-8">
          <Image src="/images1.jpg" alt="images1" width={300} height={500} />
        </div>
        </div>
      </div>
      </section>
    </div>
    
  );
}


 

