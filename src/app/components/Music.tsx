import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <main className='w-full flex justify-center items-center mt-10 mb-1'>
  <div className='sm:w-full md:w-[80%] sm:h-400 md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center bg-black'>
        <div className='md:w-[50%] p-4'>
            <h3 className='text-green-500 font-bold'>Categories</h3>
            <h1 className='text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4'>Enhance Your </h1>
            <h1 className='text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4'> Music Experience</h1>


            {/*Timer*/}
            <div className='flex sm:flex-wrap sm:justify-start md:justify-start pt-5 pb-5 gap-4'>
                <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex-col justify-center items-center'>
                    <h1 className='font-bold text-lg  px-5 py-3 pt-3'>23</h1>
                    </div>

              <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex-col justify-center items-center'>
                    <h1 className='font-bold text-lg  px-5 py-3 pt-3'>59</h1>
                    </div>

                    <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex-col justify-center items-center'>
                    <h1 className='font-bold text-lg  px-5 py-3 pt-3'>05</h1>
                    </div>

                    <div className='bg-slate-50 w-[70px] h-[70px] rounded-[50%] flex-col justify-center items-center'>
                    <h1 className='font-bold text-lg  px-5 py-3 pt-3'>35</h1>
                    </div>
                    </div>

                    <button className='bg-green-600 hover:bg-green-800 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3'>
                        Buy Now
             </button>
             </div>
            {/*Imag */}
            <div className='sm:w-full md:w-[40%] lg:w-[40%] pl-6 justify-center items-center'>
            <Image  src="/Boombox.png" alt="Boombox" width={200} height={80}
            className='w-full h-auto shadow-md'/>
            </div>
            

        </div>
        </main>


  )
}

export default Music
