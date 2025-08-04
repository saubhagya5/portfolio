'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import TechStackComponent from './TechStackComponent';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // or use your own SVGs

const techSections = [
  {
    title: 'Frontend',
    items: [
      { src: "/logos/html-1.svg", name: "HTML" },
      { src: "/logos/css-3.svg", name: "CSS" },
      { src: "/logos/tailwind-css-2.svg", name: "Tailwind" },
      { src: "/logos/react-2.svg", name: "React.js" },
      { src: "/logos/icons8-nextjs-48.png", name: "Next.js" },
    ],
  },
  {
    title: 'Backend',
    items: [
      { src: "/logos/icons8-spring-boot-40.png", name: "SpringBoot" },
      { src: "/logos/icons8-nodejs.svg", name: "Node.js" },
      { src: "/logos/icons8-express-js.svg", name: "Express.js" },
      { src: "/logos/icons8-graphql-48.png", name: "GraphQL" },
      { src: "/logos/icons8-nextjs-48.png", name: "Next.js" },
      { src: "/logos/fastapi-1.svg", name: "FastAPI" },
    ],
  },
  {
    title: 'Databases & ORMs',
    items: [
      { src: "/logos/logo-mysql-170x115.png", name: "MySQL" },
      { src: "/logos/mongodb-icon-1.svg", name: "MongoDB" },
      { src: "/logos/sqla_logo.png", name: "SQLAlchemy" },
      { src: "/logos/Postgresql_elephant.svg.png", name: "PostgreSQL" },
      { src: "/logos/Cassandra_logo.svg.png", name: "Cassandra" },
      { src: "/logos/icons8-redis-48.png", name: "Redis" },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { src: "/logos/docker-mark-blue.png", name: "Docker" },
      { src: "/logos/icons8-kubernetes-48.png", name: "Kubernetes" },
      { src: "/logos/kafka.png", name: "Apache Kafka" },
      { src: "/logos/Apache Airflow.png", name: "Apache Airflow" },
      { src: "/logos/git.png", name: "Git" },
      { src: "/logos/icons8-aws-logo-48.png", name: "AWS" },
    ],
  },
];
function TechStack() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 1 },
  });

  return (
    <div  className="relative h-100 col-span-1 md:col-span-3 bg-black p-4 rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col space-y-4 min-h-fit">
     <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
      <div className="group-hover:translate-x-2 transition duration-200">
        <h2 className="font-sans font-bold text-xxl text-neutral-200 mb-2 mt-2">
          Tech Stack
        </h2>
        <p className="font-sans font-normal text-sm text-neutral-300 mb-4">
          I have experience working with various technologies, and I am continually learning and expanding my skills. Below is a snapshot of my current tech stack:
        </p>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {techSections.map((section, idx) => (
              <div key={idx} className="keen-slider__slide">
                <h3 className="text-xl font-semibold text-white ml-4 mb-6">{section.title}</h3>
                <div className="flex flex-wrap justify-center">
                  {section.items.map((tech, i) => (
                    <TechStackComponent key={i} src={tech.src} name={tech.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition hidden group-hover:block"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition hidden group-hover:block"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Only */}
        <div className="flex justify-center mt-4 space-x-2">
          {techSections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full transition ${
                currentSlide === idx ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;