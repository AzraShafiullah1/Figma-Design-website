"use client"; // Add this line to indicate that the component should be a client component

import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; 
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 items-center py-20 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              {/* Name Field */}
              <div className="p-2 w-full sm:w-[235px] md:w-[235px] lg:w-[235px]">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    defaultValue=""
                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="p-2 w-full sm:w-[235px] md:w-[235px] lg:w-[235px]">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email *"
                    defaultValue=""
                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="p-2 w-full sm:w-[235px] md:w-[235px] lg:w-[235px]">
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone *"
                    defaultValue=""
                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="p-4 w-full ">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    defaultValue=""
                    className="w-[690px] bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-[250px] text-base outline-none text-gray-700 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="p-2 flex justify-center w-full sm:w-[215px] md:w-[215px] lg:w-[215px] mx-auto">
                <button className="text-white bg-[#DB4444] border-0 py-2 px-8 focus:outline-none hover:bg-[#DB4444] rounded text-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Contact Box with Call Icon and Info - Centered (Mobile First) */}
      <div className="p-2 max-sm:hidden max-w-md mx-auto bg-white rounded-sm shadow-md py-6 sm:py-6 mt-10 sm:mt-20 absolute top-[10%] sm:top-[30%] left-1/4 sm:left-[10%] lg:left-[2%] mb-11 bottom-9 justify-center">
        {/* Call To Us */}
        <div className="md:flex sm:hidden items-center space-x-2 mb-4">
          <FaPhoneAlt className="text-white bg-[#DB4444] rounded-full text-3xl p-2" />
          <h1 className="md:text-xl sm:text-xl font-semibold">Call to Us</h1>
        </div>
        <div className="text-gray-700 mb-4 space-x-2">
          <h1>We are available 24/7, 7 days a week.</h1>
        </div>
        <div className="text-gray-700 mb-4">
          <p>Phone: <span className="font-semibold">+8801611112222</span></p>
        </div>
        
        {/* Write To Us */}
        <div className="flex items-center space-x-2 mb-4">
          <FaRegEnvelope className="text-white bg-[#DB4444] rounded-full text-3xl p-2"/>
          <h1 className="text-xl font-semibold">Write To Us</h1>
        </div>
        <p className="text-gray-700">Fill out our form and we will contact you within 24 hours.</p>
        <div className="text-gray-700 mb-4">
          <p>Email: <span className="font-semibold">customer@exclusive.com</span></p>
        </div>
        <div className="text-gray-700 mb-8">
          <p>Email: <span className="font-semibold">support@exclusive.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

