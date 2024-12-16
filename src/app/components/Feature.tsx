import React from 'react'
import Image from "next/image"

const Feature = () => {
  return (
    <div className='w-full flex justify-center items-center pt-10'>
        <div className='w-[80%]'>
          

      {/* left container*/}

      <div className='flex sm:flex-col md:flex-row gap-x-5 gap-y-5  text-white pt-4'>
        <div className='bg-black sm:w-full md:w-[100%] relative'>
            <div className='absolute left-4 bottom-3 text-white'>

                <h1 className='sm:text-lg font-bold md:text-xl'>PlayStation 5</h1>
                <p className='relative bottom-0 text-xs py-1'>
                    Black and White version of the PS5 coming out on sale.
                    </p>
                    <button className='text-md font-sans underline underline-offset-8 hover:font-bold'>
                        Show Now
                        </button>
                        </div>

                {/*Image*/}
              <Image 
              src="/PlayStation.png"
              alt='PlayStation'
              width={900}
              height={500}
              className='object-cover mt-9'
            />
        
          </div>
            {/* right container*/}
            <div className='flex flex-col gap-y-5'>
                <div className='bg-black relative h-300'>
                    <div className='absolute left-4 bottom-3'>

            <h1 className='sm:text-lg font-bold md:text-xl'>Women’s Collections</h1>
                <p className='relative bottom-0 text-xs py-1'>
                Featured woman collections that give you another vibe.
                    </p>
                    <button className='text-md font-sans underline underline-offset-8 hover:font-bold'>
                        Show Now
                        </button>   

                </div>

              {/*Image*/}
              <Image 
              src="/Woman.png"
              alt='Women'
              width={690}
              height={300}
              className='object-cover'
            />
          </div>

             {/*speaker*/}

             <div className='flex gap-x-5'>
                <div className='bg-black relative flex justify-center'>
                    <div className='absolute left-4 bottom-3'>
                        <h1 className='sm:text-sm font-bold md:text-xl'>Speakers</h1>
                        <p className='relative bottom-0 text-xs md:py1'>Amazon wireless speakers</p>
                        <button className='sm:text-sm md:text-md font-sans underline underline-offset-8 hover: font-bold'>
                            Shop Now
                        </button>
                    </div>
                    <Image 
              src="/Speaker.png"
              alt='PlayStation'
              width={200}
              height={150}
              className='object-cover'
            />
          </div>

          <div className='bg-black relative flex justify-center'>
                    <div className='absolute left-4 bottom-3'>
                        <h1 className='sm:text-sm font-bold md:text-xl'>Perfume</h1>
                        <p className='relative bottom-0 text-xs md:py1'>GUCCI INTENSE OUD EDP</p>
                        <button className='sm:text-sm md:text-md font-sans underline underline-offset-8 hover: font-bold'>
                            Shop Now
                        </button>
                    </div>
                    <Image 
              src="/Perfume.png"
              alt='PlayStation'
              width={200}
              height={150}
              className='object-cover'
            />
          </div>
          </div>
         </div>
      </div>
           <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-between -m-2">
                      {/* First Box */}
                      <div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                      <div className='flex flex-col items-center justify-center rounded-lg  px-6 py-6'>
                          <Image src="/icon-delivery.png" alt='icon-delivery' width={50} height={70} className='bg-black size-10 rounded-full'/>
                          <div className="mt-4 ">
                          <p className="font-bold  text-black  text-sm ">FREE AND FAST DELIVERY</p>
                          <p className="relative bottom-0 text-xs md:py1">Free delivery for all orders over $140</p>
                         
                          </div>
                        </div>
                      </div>
                        {/* Second Box */}
                                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex">
                                    <div className="flex flex-col items-center justify-center  border-gray-200 px-6 py-6 w-100 h-100 rounded-lg">
                                    <Image src="/Icon-Customer.png" alt='icon-Customer' width={50} height={70} className='bg-black size-10 rounded-full' style={{ fontSize: '2rem' }}  />
                      
                                      <div className="mt-4 text-center">
                                        <h2 className="font-medium text-sm text-black">24/7 CUSTOMER SERVICE</h2>
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
  )
}

export default Feature