import React from 'react';
import Image from 'next/image';
import TechStackComponent from './TechStackComponent';

function TechStack() {
  return (
    <div className="relative h-96 col-span-1 md:col-span-3 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4 min-h-fit">
        <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
      <div className="group-hover:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
          Tech Stack
        </div>
        <div className="font-sans font-normal text-sm text-neutral-300">
          I have experience working with various technologies, and I am continually learning and expanding my skills. Below is a snapshot of my current tech stack:
        </div>
        <div className='flex flex-wrap p-2'>
          <TechStackComponent src={"/logos/html-1.svg"} name={"HTML"} />
          <TechStackComponent src={"/logos/css-3.svg"} name={"CSS"} />
          <TechStackComponent src={"/logos/react-2.svg"} name={"React"} />
          <TechStackComponent src={"/logos/icons8-nodejs.svg"} name={"Node.js"} />
          <TechStackComponent src={"/logos/icons8-express-js.svg"} name={"Express.js"} />
          <TechStackComponent src={"/logos/icons8-nextjs-48.png"} name={"Next.js"} />
          <TechStackComponent src={"/logos/tailwind-css-2.svg"} name={"Tailwind"} />
          <TechStackComponent src={"/logos/fastapi-1.svg"} name={"FastApi"} />
          <TechStackComponent src={"/logos/mongodb-icon-1.svg"} name={"MongoDB"} />
          <TechStackComponent src={"/logos/logo-mysql.png"} name={"MySQL"}/>
          <TechStackComponent src={"/logos/sqla_logo.png"} name={"SQLAlchemy"} />
        </div>
      </div>
    </div>
  );
}

export default TechStack;

