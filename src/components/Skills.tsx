import React from 'react'
import Image from "next/image"

function Skills() {
  return (
    <div className="relative col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4 min-h-fit overflow-hidden">
<Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />

      <div className="group-hover:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
          Skills
        </div>

        <div className="font-sans font-normal text-sm text-neutral-300">
          I specialize in building scalable web applications and have a strong understanding of both frontend and backend development, system design, and database management.
        </div>

        <div className="my-4 flex flex-col space-y-2">
          <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4">
            Frontend development and UI/UX design
          </div>
          <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4">
            Backend development and API integration
          </div>
          <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4">
            Database modeling and management
          </div>
          <div className="bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-2 px-4">
            Scalable system design and architecture
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills