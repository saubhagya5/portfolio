"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect'

function HeroText() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-7xl md:text-9xl text-white font-bold'>Hello!</div>
        {showText && <TextGenerateEffect words="I am Saubhagya Tandon&#44; an aspiring software developer"/>}
    </div>
  )
}

export default HeroText