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
             
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
               <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email or Phone Number
              </label>
             <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            
            
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

