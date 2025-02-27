import React from 'react'
import Image from 'next/image'
function Education() {
  return (
    <div className=" relative h-64 col-span-1  bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
          <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
            <div className="group-hover:translate-x-2 transition duration-200">
              <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
                Education
              </div>
              <div className="font-sans font-normal text-neutral-300">
                <div className="bg-darkpurple bg-opacity-30 text-xs rounded-xl p-1 px-3 my-2 ">
                X from CBSE (2020)
                <div className="text-tiny">Marks scored - 91%</div>
                </div>
                <div className="bg-darkpurple bg-opacity-30 text-xs  rounded-xl p-1 px-3 my-2 ">
                XII from CBSE (2022)
                <div className="text-tiny">Marks scored - 95.6%</div>
                </div>
                <div className="bg-darkpurple bg-opacity-30 text-xs  rounded-xl p-1 px-3 my-2">
                B.Tech IT from VIT Vellore (2022-2026) 
                <div className="text-tiny">Cgpa - 8.91</div>
                </div>
                
              </div>
            </div>
          </div>
  )
}

export default Education