import React from 'react';
import Image from 'next/image';

interface TechStackProps {
  src: string;
  name: string;
}

export default function TechStackComponent({ src, name }: TechStackProps) {
  return (
    <div className="flex flex-col items-center justify-center text-white bg-darkpurple bg-opacity-30 rounded-xl w-24 h-24 p-2 m-2 transition-transform duration-200 hover:scale-105">
      <Image src={src} alt={name} width={32} height={32} className="mb-2" />
      <p className="text-xs text-center">{name}</p>
    </div>
  );
}