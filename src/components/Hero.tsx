"use client"
import React, { useState , useEffect} from 'react'
import { WavyBackground } from './ui/wavy-background'
import HeroText from './HeroText'


import MagicButton from './ui/magin-button'


function Hero() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
      <WavyBackground colors={["#6eaff0","#8b59ab","#074c91","#7a5cb5","#3a3987"]} className='flex flex-col  max-w-full justify-center items-center'>
        <HeroText/>
          {showButton && <MagicButton />}
      </WavyBackground>
  )
}

export default Hero