import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Game Development with Pygame',
    description: 'Developed classic games like Tetris, Snake, and Flappy Bird using Pygame, enhancing logic-building and problem-solving skills in coding.',
    img: '/images/pygame.png' ,
  },
  {
    title: 'ISTE Project Cycle – Web App for Architectural Planning',
    description: 'Led frontend development and implemented preprocessing techniques with OpenCV for a web app utilizing ML GAN models to assist in architectural planning.',
    img: '/images/archi.jpg'
  },
  {
    title: 'Acad – Online Class Platform (Ongoing)',
    description: 'Developing an online learning platform featuring video conferencing with automatic note generation, online quizzes, course material uploads, and assignment submissions.',
    img: '/images/onli.jpg'
  },
  {
    title: 'Wearable IoT for Stress & Stroke Prediction (Research Paper – Ongoing)',
    description: 'Conducting research and writing a paper on a wearable IoT device designed to detect stress and physiological indicators, aiming to predict and prevent unforeseen strokes.',
    img: '/images/iot.jpg'
  },
];

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-white p-6 w-full h-screen">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      
      {/* Outer wrapper with horizontal scrolling */}
      <div className="w-full h-[500px] overflow-auto scrollbar-thin scrollbar-thumb-[#236585] scrollbar-track-transparent">
        <div className="flex flex-nowrap space-x-6 p-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-96 h-[400px] bg-black rounded-3xl group hover:shadow-xl transition duration-200 shadow-input border border-white/[0.2] flex flex-col"
            >
              {/* Image (Top Half) */}
              <div className="w-full h-1/2 relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl"
                />
              </div>

              {/* Content (Bottom Half) */}
              <div className="p-4 flex flex-col h-1/2 justify-center">
                    <Image src="/bg.png" alt="" layout="fill" objectFit="cover" className="rounded-3xl" />
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
