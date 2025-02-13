import React from 'react'
import Image from 'next/image'
function Socials() {
  return (
    <div className=" relative h-44 col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
          <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
            <div className="group-hover:translate-x-2 transition duration-200">
              <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
                Socials
              </div>
              <div className="font-sans font-normal text-xs text-neutral-300">
                <div className='relative flex justify-evenly px-10'>
                    <Image src="/logos/github.png" alt=""  width={30} height={30} className='opacity-50 m-3'/>
                    <Image src="/logos/linkedin.png" alt=""  width={30} height={30} className='opacity-50 m-3'/>
                    <Image src="/logos/email.png" alt=""  width={30} height={30} className='opacity-50 m-3'/>
                    <Image src="/logos/instagram.png" alt=""  width={30} height={30} className='opacity-50 m-3'/>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Socials