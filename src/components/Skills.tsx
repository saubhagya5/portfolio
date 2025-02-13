import React from 'react'
import Image from "next/image"
function Skills() {
  return (
    <div className="relative h-96 col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
          <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
            <div className="group-hover:translate-x-2 transition duration-200">
              <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
                Skills
              </div>

              <div className="font-sans font-normal text-sm text-neutral-300">
              I possess a diverse skill set encompassing both front-end and back-end technologies. Here are some of the key skills I bring to the table:
              </div>
              <div className='my-4 flex flex-col'>
              <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4 my-2 ">
              Responsive and dynamic front-end development
            </div>
            <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4 my-2 ">
            Back-end development with proficiency in various frameworks and libraries
            </div>
            <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4 my-2 ">
            Understanding of Data Structures and Algorithms (DSA)
            </div>
            <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4 my-2 ">
            Database management and design
            </div>
            </div>
            </div>
          </div>
  )
}

export default Skills