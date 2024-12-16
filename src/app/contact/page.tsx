'use client'; // Add this line to mark this file as a client component

import React from 'react'; // Remove useState from here
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
              <div className="p-2 w-[235px] h-[50px]">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="p-2 w-[235px] h-[50px]">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email *"
                    className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="p-2 w-[235px] h-[50px]">
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone *"
                    className="w-[235px]  bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="p-4 w-full">
                <div className="relative ">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="w-[702px]  bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-[200px] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              
               {/* Submit Button */}
              <div className="p-2  flex justify   w-[215px] justify relative">
                <button className="text-white bg-[#DB4444] border-0 py-2 px-8 focus:outline-none hover:bg-[#DB4444] rounded text-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Contact Box with Call Icon and Info - Centered */}
      <div className="p-2 absolute mt-30 max-w-md mx-auto bg-gray-100 rounded-sm shadow-md py-17 top-80 left-10 mb-11 bottom-9  justify-center">
        <div className="flex items-center space-x-2 top-2 mr-1 pt-1 bottom-10 right-7 mb-34">
          <FaPhoneAlt className="text-white bg-[#DB4444] rounded-full text-xl" />
          <h1 className="text-xl font-semibold">Call to Us</h1>
        </div>
        <div className="text-gray-700 mb-4 space-x-2">
          <h1>We are available 24/7, 7 days a week.</h1>
        </div>
        <div className="text-gray-700 mb-4">
          <p>Phone: <span className="font-semibold ">+8801611112222</span></p>
        </div>
        <div className="flex items-center space-x-2 top-2 mr-1 pt-1 bottom-10 right-7 mb-34">
          <FaRegEnvelope className="text-white bg-[#DB4444] rounded-full text-xl"/>
          <h1 className="text-xl font-semibold top-1">Write To US</h1>
        </div>
        <p className='text-2 font-sans'>Fill out our form and we will contact</p>
        <h1> you within 24 hours.</h1>
        <p className='mb-8 bottom-9'>Emails: customer@exclusive.com</p>
        <p className='mb-8 bottom-9'>Emails: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default Contact;
