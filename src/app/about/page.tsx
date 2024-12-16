
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineDollar } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">Our Story</h1>
              <p className="leading-relaxed mb-4">
                Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
              </p>
              <p>Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer goods to electronics.</p>
            </div>
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-right rounded"
              src="/Aboutpic-1.jpg"
              width={705}
              height={609}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Box */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
              <div className='flex flex-col items-center justify-center rounded-lg border px-7 py-6 w-45 h-50'>
                <Image src="/icon_shop.png" alt='icon_shop' width={50} height={70} className='bg-black size-10 rounded-full' style={{ fontSize: '2rem' }}  />
                <div className="mt-4 text-center">
                  <h2 className=" font-medium text-3xl text-gray-900">10.5K</h2>
                  <p className="leading-relaxed text-sm">Sellers active on our site</p>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
              <div className="flex flex-col items-center justify-center border-2 border-gray-200 px-6 py-6 w-100 h-100 rounded-lg">
                <AiOutlineDollar className='text-black size-10'/>

                <div className="mt-4 text-center">
                  <h2 className="font-medium text-3xl text-gray-900">33K</h2>
                  <p className="leading-relaxed">Monthly Product Sale</p>
                </div>
              </div>
            </div>

            {/* Third Box */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
              <div className="flex flex-col items-center justify-center border-2 border-gray-200 px-6 py-6 w-50 h-50 rounded-lg">
                <Image src="/Icon-bag.png" alt='iconimage' width={40} height={40} className='bg-black rounded-full' />
                <div className="mt-4 text-center">
                  <h2 className="title-font font-medium text-3xl text-gray-900">45.5K</h2>
                  <p className="leading-relaxed">Customers active on our site</p>
                </div>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
              <div className="flex flex-col items-center justify-center border-2 border-gray-200 px-6 py-6 w-50 h-50 rounded-lg">
                <Image src="/Money-bag.png" alt="Money-bag" width={40} height={40} className='bg-black rounded-full' />
                <div className="mt-4 text-center">
                  <h2 className="title-font font-medium text-3xl text-gray-900">25K</h2>
                  <p className="leading-relaxed">Annual gross sales on our site</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap -mt-4">
        {/* Team Member 1 */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Image
              className="rounded object-cover object-center mb-6"
              src="/image-Tom.png"
              alt="image"
              width={236}
              height={391}
            />
            <h3 className="tracking-widest text-black text-2xl font-bold title-font">Tom Cruise</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Founder & Chairman</h2>
            <li className="flex space-x-4 mt-4">
              <Link href="#">
                <FiTwitter className="text-black w-6 h-6 pt-1" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-black w-6 h-6 pt-1" />
              </Link>
              <Link href="#">
                <RiLinkedinLine className="text-black w-6 h-6 pt-1" />
              </Link>
            </li>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Image
              className="rounded object-cover object-center mb-6"
              src="/image-Emma.png"
              alt="image"
              width={294}
              height={397}
            />
            <h3 className="tracking-widest text-black text-2xl font-bold title-font">Emma Watson</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Managing Director</h2>
            <li className="flex space-x-4 mt-4">
              <Link href="#">
                <FiTwitter className="text-black w-6 h-6 pt-1" />
              </Link>
              <Link href="#">
                <FaInstagram className="text-black w-6 h-6 pt-1" />
              </Link>
              <Link href="#">
                <RiLinkedinLine className="text-black w-6 h-6 pt-1" />
              </Link>
            </li>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              className="rounded object-cover object-center mb-6"
              src="/image-Will.png"
              alt="image"
              width={326}
              height={392}
            />
            <h3 className="tracking-widest text-black text-2xl font-bold title-font">Will Smith</h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Product Designer</h2>
            <li className="flex space-x-4 mt-4">
              <Link href="#">
                <FiTwitter className="text-black w-6 h-6 pt-1"/>
              </Link>
              <Link href="#">
                <FaInstagram className="text-black w-6 h-6 pt-1"/>
              </Link>
              <Link href="#">
                <RiLinkedinLine className="text-black w-6 h-6 pt-1"/>
              </Link>
            </li>
          </div>
        </div> 

        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-between -m-2">
            {/* First Box */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex ">
            <div className='flex flex-col items-center justify-center rounded-lg  px-6 py-6'>
                <Image src="/icon-delivery.png" alt='icon-delivery' width={50} height={70} className='bg-black size-10 rounded-full'/>
                <div className="mt-4 text-center">
                <p className="font-bold  text-black  text-sm ">FREE AND FAST DELIVERY</p>
                <p className="relative bottom-0 text-xs md:py1">Free delivery for all orders over $140</p>
               
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
              <div className="flex flex-wrap items-center justify-center  px-6 py-6 w-100 h-100 rounded-lg">
              <Image src="/Icon-Customer.png" alt='icon-Customer' width={50} height={70} className='bg-black size-10 rounded-full' style={{ fontSize: '2rem' }}  />

                <div className="mt-4 text-center">
                  <h2 className="font-bold  text-black  text-sm ">24/7 CUSTOMER SERVICE</h2>
                  <p className="relative bottom-0 text-xs md:py1">Friendly 24/7 customer support</p>
                </div>
              </div>
            </div>

            {/* Third Box */}
             <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
                                                           <div className="flex flex-col items-center justify-center  px-6 py-6 w-50 h-50 rounded-lg">
                                                             <Image src="/shield-tick.png" alt='shield-tick' width={40} height={40} className='bg-black rounded-full' />
                                                             <div className="mt-4 text-center">
                                                               <h2 className="title-font font-medium text-sm text-black">MONEY BACK GUARANTEE</h2>
                                                               <p className="relative bottom-0 text-xs md:py1">We reurn money within 30 days</p>
                                                             </div>
                                                           </div>
                                                         </div>

            
          </div>
        </div>
      </section>
 </div>
    </div>
  );
}

export default About;