import React from 'react'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc";

const signup = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 relative">
            <Image
              src="/Side Image.png"
              alt='sideimage'
              width={800}
              height={900}
              className=" pt-[4px] right-[8px] w-[805px] h-[781px]"
            />
          </div>
          <form className="max-w-md mx-auto">
            <h1 className='font-bold text-black text-2xl'>Create an account</h1>
            <p className='text-black py-1'>Enter your details below</p>
            <div className="relative z-0 w-full mb-5 group">
            <div className='flex  flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input
                    type="name"
                    id="name"
                    name="name"
                  className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
        </div>
              <div className='flex text-3 flex-col gap-3'>
                <label htmlFor='name'>Email or Phone Number</label>
                <input
                    type="name"
                    id="name"
                    name="name"
                  className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
        </div>
        <div     className='flex text-3 flex-col gap-3'>
              
              <label htmlFor='name'>Password</label>
                <input
                    type="name"
                    id="name"
                    name="name"
                  className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
        </div>
      </div>
            
            <button type="submit" className="text-white w-[460px] h-[56px] bg-[#DB4444] hover:bg-[#ff5e5e] focus:ring-4 focus:outline-none focus:ring-white font-medium  text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-[#e6b5b5] dark:focus:ring-[#f0afaf]">Create Account</button>

            {/* Sign up with Google button */}
            <button
              type="button"
              className="text-black mt-4 border bg-white w-[460px] h-[56px] hover:bg-gray-300/90 focus:ring-4 focus:outline-none focus:ring-[#0000]/50 font-medium rounded-lg text-md px-9 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              
              <FcGoogle className="text-2xl mr-3" />
              <span className='flex-grow text-center'>Sign up with Google</span>
            
            </button>
            <p className='flex-grow text-center'>Already have account?Log in</p>
          
          </form>
        </div>
      </section>
    </div>
  )
}

export default signup

