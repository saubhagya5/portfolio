import React from 'react';
import Image from 'next/image';

function Socials() {
  return (
    <div className="relative h-44 col-span-1 md:col-span-2 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4 overflow-hidden">
       <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
      <div className="group-hover:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-2xl text-neutral-200 mb-2 mt-2">
          Socials
        </div>
        <div className="font-sans font-normal text-xs text-neutral-300">
          <div className="relative flex items-center justify-evenly px-10">
            <a href="https://github.com/saubhagya5" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/github.png" alt="GitHub" width={30} height={30} className="opacity-50 hover:opacity-100 transition m-3" />
            </a>
            <a href="https://www.linkedin.com/in/saubhagya-tandon-861511271/" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/linkedin.png" alt="LinkedIn" width={30} height={30} className="opacity-50 hover:opacity-100 transition m-3" />
            </a>
            <a href="mailto:saubhagyatandon5@gmail.com">
              <Image src="/logos/email.png" alt="Email" width={30} height={30} className="opacity-50 hover:opacity-100 transition m-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
