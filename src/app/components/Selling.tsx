
'use client';

import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import React, { useRef } from "react";

// ProductCard Component
const ProductCard = ({
  image,
  name,
  price,
  oldPrice,
  reviews,
}: {
  image: string;
  name: string;
  price: number;
  oldPrice: number;
  reviews: number;
}) => {
  return (
    <div className="border p-4 w-[300px] h-[300px] gap-16 rounded shadow">
      <div className="relative">
        {/* Use width and height properties for next/image */}
        <Image
          src={image}
          alt={name}
          width={200} // Specify width
          height={280} // Specify height
          className="object-cover rounded items-center"
        />
     
        <span className="absolute top-2 right-0 text-black text-xs px-2 py-1 rounded">
          <FaRegHeart className="text-xl bg-white p-1 rounded-full shadow-md" />
          <MdOutlineRemoveRedEye className="text-xl bg-white p-1 rounded-full shadow-md" />
        </span>
      </div>
      <h3 className="text-md font-semibold mt-3">{name}</h3>
      <p className="text-gray-600 text-sm">
        <span className="text-red-500">${price}</span>
        {oldPrice > 0 && <span className="line-through">${oldPrice}</span>}
      </p>
      <div className="flex items-center mt-2">
        <div className="flex">
          <span className="text-yellow-400">⭐</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-gray-300">⭐</span>
        </div>
        <span className="text-sm ml-2">({reviews})</span>
      </div>
    </div>
  );
};

const Selling = () => {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll left by a fixed amount
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll the container 300px to the left
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right by a fixed amount
 

  return (
    <div className="p-4">
      {/* Arrow buttons for scrolling positioned above the product list */}
      <div className="flex justify-end mb-4">
        <button
        
          onClick={scrollLeft}
          className="bg-[#DB4444] hover:bg-[#DB4444] text-white px-4 py-2 rounded shadow mx-2"
        >
          View All
      
        </button>
      
      </div>
       <div
        ref={scrollContainerRef} // Attach the ref to the scroll container
        className="flex overflow-x-auto space-x-4 px-4"
        style={{ maxWidth: "100%", overflowY: "hidden", scrollbarWidth: "none" }} // Hide the vertical scrollbar and ensure it fits
      >

     <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="  left-2 ml-3 font-bold text-red-500 size-13 px-2 py-1 rounded">This Month</span>
      </div>
      <div className='flex'>
      <h2 className="text-4xl pt-8 ml-4 font-bold mb-3">Best Selling Products</h2>
      
  
</div>


        <div className="flex flex-nowrap space-x-5 text-[13px]">
          {/* 4 visible product cards */}
          <ProductCard
            image="/coat.png" // Ensure valid file path and extension
            name="The North Coat"
            oldPrice={160}
            price={260}
            reviews={360}

        
          />
          <ProductCard
            image="/Gucci bag.png" // Fixed path and extension
            name="Gucci Duffle Bag"
            price={960}
            oldPrice={1160}
            reviews={75}
          />
          <ProductCard
            image="/CPU.png" // Correct image path with extension
            name="RGB Liquid CPU Cooler"
            price={379.99}
            oldPrice={499.99}
            reviews={99}
          />
          <ProductCard 
            image="/BookSelf.png" // Correct image path with extension
            name="S-Series Comfort Chair"
            price={360}
            oldPrice={100}
            reviews={99}
          />
        </div>
      </div>
    </div>

    </div>
    
    
  
  );
};

export default Selling;

