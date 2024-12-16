'use client';
import React, { useRef } from "react";
import ProductCard from "./ProductCard"; // Ensure this import is correct


const ProductList = () => {
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
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll the container 300px to the right
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className=" p-4 ">
      {/* Arrow buttons for scrolling positioned above the product list */}
      <div className="flex justify-end mb-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-400 hover:bg-gray-300 text-gray-800  px-4  py-2 rounded-full shadow mx-2"
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow mx-2"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>

      {/* Horizontal scroll container with hidden scrollbar */}
      <div
        ref={scrollContainerRef} // Attach the ref to the scroll container
        className="flex overflow-x-auto space-x-4  px-4 scrollbar"
        style={{ maxWidth: "100%", overflowY: "hidden", scrollbarWidth: "none" }} // Hide the vertical scrollbar and ensure it fits
      >
        <div className="flex  flex-nowrap  space-x-5  text-[13px]">

          
          {/* 5 visible product cards */}
          
           <ProductCard 
            image="/product-1.png"  // Ensure valid file path and extension
            name="HAVIT HV-G92 Gamepad"
            oldPrice={160}
             price={120}
            reviews={88}
              /> 

          <ProductCard
            image="/product-2.png" // Fixed path and extension
            name="AK-900 Wired Keyboard"
            price={89.99}
            oldPrice={109.99}
            reviews={75}
          />
          <ProductCard
            image="/product-3.png" // Correct image path with extension
            name="IPS LCD Gaming Monitor"
            price={379.99}
            oldPrice={499.99}
            reviews={99}
          />
          <ProductCard
            image="/product-4.png" // Correct image path with extension
            name="S-Series Comfort Chair "
            price={149.99}
            oldPrice={199.99}
            reviews={99}
          />
          <ProductCard
            image="/product-5.png" // Correct image path with extension
            name="S-Series Comfort Chair "
            price={39.99}
            oldPrice={59.99}
            reviews={99}
       />
        
        <ProductCard
            image="/product-6.png" // Ensure this path is correct
            name="S-Series Comfort Chair"
            price={69.99}
            oldPrice={89.99}
            reviews={99}
          />
          </div>
          </div>
    <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          View All Products
        </button>
        </div>
      </div>

  );
};

export default ProductList;


