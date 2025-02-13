import React from 'react'
import Image from 'next/image'
function Location() {
  return (
    <div className=" relative h-44 col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
    <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
      <div className="group-hover:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
          Location
        </div>
        <div className="font-sans font-normal text-sm text-neutral-300">
           <p>I currently reside in </p> 
           <div className='font-sans font-normal text-xs text-neutral-300 bg-darkpurple bg-opacity-30 rounded-xl my-2 px-2 flex items-center'>
           <Image src="/icons8-location-50.png" alt=""  width={25} height={25} className='opacity-50 m-2'/>
           <p>Vellore, Tamil Nadu</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Location