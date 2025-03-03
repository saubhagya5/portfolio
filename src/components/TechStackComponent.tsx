import React from 'react';
import Image from 'next/image';

interface TechStackProps {
  src: string;
  name: string;
}

export default function TechStackComponent({ src, name }: TechStackProps) {
  return (
    <div className='h-20 flex flex-col justify-center items-center bg-darkpurple bg-opacity-30 text-sm text-neutral-200 rounded-xl p-6 m-4 '>
      <div className='hover:translate-x-1 transition duration-200'>
        <div className='flex-grow flex flex-col items-center rel '>
          <Image src={src} alt="" width={25} height={25} className='my-2' />
        </div>
        <div className='text-tiny flex-shrink-0'>{name}</div>
      </div> 
    </div>
  );
}