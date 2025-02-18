import React from 'react'
import Image from 'next/image'
const Projects = () => {
    return (<>
              
        <div className="relative col-span-1 md:col-span-5 text-white flex justify-center font-bold text-xxxl m-4">
        My Projects
              </div>
    <div className=" relative h-64 col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
    <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" /> 
      <div className="group-hover:translate-x-2 transition duration-200">
        
        <div className="font-sans font-normal text-tiny md:text-xs text-neutral-300">
        </div>
      </div>
    </div></>
  )
}

export default Projects
