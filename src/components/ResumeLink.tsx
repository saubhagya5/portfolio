import React from 'react'
import Image from 'next/image'
function ResumeLink() {
  return (
    <div className=" relative h-44 col-span-1 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4">
    <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
      <div className="group-hover:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
          Resume
        </div>
        <div className="font-sans font-normal text-sm text-neutral-300 bg-darkpurple bg-opacity-30 rounded-xl  px-4 my-4">
          <a href="https://drive.google.com/file/d/13srWfaC_7PfKyzOrvxr7gdYxdI6GiQA7/view?usp=drive_link" target="_blank" className='flex items-center' >
          <Image src="/icons8-link-50.png" alt=""  width={30} height={30} className='opacity-50 m-3'/>
          <p>Link to my resume</p>
           </a>
        </div>
      </div>
    </div>
  )
}

export default ResumeLink