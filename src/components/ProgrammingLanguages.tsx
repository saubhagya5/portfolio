import React from 'react'
import Image from 'next/image'
function ProgrammingLanguages() {
  return (
    <div className=" relative h-64 col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
    <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
      <div className="group-hover:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
          Programming Languages
        </div>
        <div className="font-sans font-normal text-sm mt-4 text-neutral-300 ">
        I have experience working with a variety of programming languages, including:
        </div>
        <div className="flex my-4">
        <div className="bg-darkpurple bg-opacity-30 text-neutral-300 text- sm rounded-xl px-4 py-2 m-2">Python</div>
        <div className="bg-darkpurple bg-opacity-30 text-neutral-300 text-sm rounded-xl px-4 py-2 m-2">C/C++</div>
        <div className="bg-darkpurple bg-opacity-30 text-neutral-300 text-sm rounded-xl px-4 py-2 m-2">Java</div>
        <div className="bg-darkpurple bg-opacity-30 text-neutral-300 text-sm rounded-xl px-4 py-2 m-2">JavaScript</div>
        <div className="bg-darkpurple bg-opacity-30 text-neutral-300 text-sm rounded-xl px-4 py-2 m-2">TypeScipt</div>
        </div>
        
      </div>
    </div>

  )
}

export default ProgrammingLanguages