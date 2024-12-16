'use client';
import React, { useRef } from "react";
import ProductCard from "./ProductCard";// Ensure this import is 



const ExploreProduct = () => {
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
    <div className="p-8">
      {/* Arrow buttons for scrolling positioned above the product list */}
      <div className="flex justify-end mb-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-400 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full shadow mx-2"
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-400 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-full shadow mx-2"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>

      {/* Horizontal scroll container with hidden scrollbar */}
      <div
        ref={scrollContainerRef} // Attach the ref to the scroll container
        className="flex overflow-x-auto space-x-4 px-4 scrollbar"
        style={{ maxWidth: "100%", overflowY: "hidden", scrollbarWidth: "none" }} // Hide the vertical scrollbar and ensure it fits
      >

         <div className="flex flex-wrap space-x-3 text-sm">
          {/* 5 visible product cards */}
          <ProductCard
            image="/Dog.jpg"  // Ensure valid file path and extension
            name="Breed Dry Dog Food"
            oldPrice={160}
            price={100}
            reviews={88}
          />

          <ProductCard
            image="/Camera.png" // Fixed path and extension
            name="CANON EOS DSLR Camera"
            price={360}
            oldPrice={109.99}
            reviews={75}
          />
          <ProductCard
            image="/Laptop.png" // Correct image path with extension
            name="ASUS FHD Gaming Laptop"
            price={379.99}
            oldPrice={499.99}
            reviews={99}
          />
          <ProductCard
            image="/product Set.png" // Correct image path with extension
            name="ASUS FHD Gaming Laptop"
            price={149.99}
            oldPrice={199.99}
            reviews={99}
          />
          <ProductCard
            image="/Car.png" // Correct image path with extension
            name="Kids Electric Car"
            price={39.99}
            oldPrice={59.99}
            reviews={99}
          />
          <ProductCard
            image="/Cleats.png" // Ensure this path is correct
            name="Jr. Zoom Soccer Cleats"
            price={69.99}
            oldPrice={89.99}
            reviews={99}
          />
          <ProductCard
            image="/Gamepad.png" // Ensure this path is correct
            name="GP11 Shooter USB Gamepad"
            price={660}
            oldPrice={89.99}
            reviews={99}
          />
          <ProductCard
            image="/Jacket.png" // Ensure this path is correct
            name="Quilted Satin Jacket"
            price={660}
            oldPrice={59.99}
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

export default ExploreProduct;
