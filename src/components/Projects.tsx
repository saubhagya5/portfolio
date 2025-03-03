import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Pygame workshop',
    description: 'I hosted a Pygame workshop for 250 participants, teaching coding fundamentals through game development. I guided them in building a game using Pygame, making learning interactive and fun.',
    img: '/images/pygame.jpg',
    link: 'https://github.com/saubhagya5/pygame-event-ISTE'
  },
  {
    title: 'Cryptic Hunt',
    description: 'Developed the backend for Cryptic Hunt, a Treasure Hunt event app used during my college fest under ACM. Built with Go Fiber, it handled user authentication, team management, and clue progression, ensuring a seamless experience with secure APIs and real-time updates.',
    img: '/images/cryptichunt.jpg',
    link: 'https://cryptichunt.acmvit.in/'
  },
  {
    title: 'QuizMeOn',
    description: 'Built Quiz Me using Next.js and the Gemini API to generate custom quizzes. Users can create and share quizzes with friends for an interactive experience.',
    img: '/images/quizmeon.jpg',
    link: "https://quiz-me-on.vercel.app/"
  },
  {
    title: 'Udhaar - An Expense Tracker',
    description: 'Udhaar is a MERN stack-based expense-tracking app that simplifies shared spending. With Google Authentication, users can create groups, add friends, track expenses, and split costs effortlessly.',
    img: '/images/udhaar.png',
    link: "https://udhaar-d2lz.vercel.app/"
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
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-300">{project.description}</p>
              </div>

              {/* Link Icon */}
              {project.link && (
                <div className='flex justify-center align-middle w-full p-3'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/logos/link.png" 
                      alt="Project Link"  
                      width={30} 
                      height={30} 
                      className='opacity-50 hover:opacity-100 transition-opacity duration-200'
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;
