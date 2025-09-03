// menuHandlers.ts
import React from 'react';
import { copyEmailToClipboard, downloadResume } from './utils';
import { PROJECTS } from './projectData';
import { ProjectDetails } from './ProjectDetails';
import { CityTravelGuide } from './cityTravelGuide';

interface MenuHandlersProps {
    handleOpenWindow: (id: string, title: string, content: React.ReactNode, theme: any) => void;
    openHobbyWindow: () => void;
   }
   
   
   export const createMenuHandlers = ({ handleOpenWindow, openHobbyWindow }: MenuHandlersProps) => {
     const handleProjectsMenu = () => {
      handleOpenWindow(
        "projects-menu-" + Date.now(),
        "My Projects",
        <div>
          <h3 className="text-xl font-bold mb-4">My Projects</h3>
          <p className="text-2xl font-mono text-center">
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text font-bold">
              Welcome to Lucy's Kitchen OS.
            </span>{" "}
            <span className="text-black">
              Select a stovetop dish or peek in the oven to get a taste of my {" "}
              <span className="text-yellow-400 font-semibold">projects</span>
            </span>
          </p>
          <div className="grid gap-4">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() =>
                  handleOpenWindow(
                    `project-${project.id}-${Date.now()}`,
                    project.title,
                    <ProjectDetails project={project} />,
                    "cooking"
                  )
                }
                className="p-4 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-lg cursor-pointer transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{project.logo}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-red-700">{project.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{project.descriptions.short}</p>
                  </div>
                  <span className="ml-auto text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>,
        "cooking"
      );
    };
   
   
    const handlePlacesMenu = () => {
      handleOpenWindow(
        "map-" + Date.now(),
        "Places I've Called Home",
        <CityTravelGuide />,
        "map"
      );
    };
   
   
    const handleReadingMenu = () => {
      handleOpenWindow(
        "books-" + Date.now(),
        "Books",
        <div>
          <h3 className="text-lg font-bold mb-3">📚 My Reading Collection</h3>
          <p>Here are some of my favorite books and current reads...</p>
          <div className="mt-4 space-y-2">
            <div className="p-3 bg-white rounded border">
              <strong>Currently Reading:</strong><br/>
              Dreamland: The True Tale of America's Opiate Epidemic, Sam Quinones
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>All Time Favorites:</strong><br/>
              Educated, Tara Westover<br/>
              Dopesick, Beth Macy<br/>
              Bad Blood, John Carreyrou<br/>
              Crying in H Mart, Michelle Zauner<br/>
              I Am The Messenger, Markus Zusak
            </div>
          </div>
        </div>,
        "books"
      );
    };
   
   
    const handleToolsMenu = () => {
      handleOpenWindow(
        "tools-" + Date.now(),
        "My Tools",
        <div>
          <h3 className="text-lg font-bold mb-3">🔧 My Technical Toolkit</h3>
          <p>Take a look at my Projects to see where I've used some of these!</p>
          <div className="mt-4 space-y-2">
            <div className="p-3 bg-white rounded border">
              <strong>Data Analytics:</strong> SQL, Python, MongoDB, PostgreSQL
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Programming Languages:</strong> Java, Python, TypeScript, JavaScript
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Frameworks & Libraries:</strong> React, Vite, Node.js
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Styling & UI:</strong> CSS, HTML, TailwindCSS, Material UI
            </div>
          </div>
        </div>,
        "tools"
      );
    };
   
   
    const handleMoreMenu = () => {
      handleOpenWindow(
        "about-" + Date.now(),
        "More",
        <div>
          <h3 className="text-lg font-bold mb-3">👋 Hey there!</h3>
          <p className="mb-3">Thanks for wanting to learn more!</p>
         
          <div className="space-y-4">
            <div className="p-3 bg-white rounded border">
              <strong>About this site:</strong>
              <p className="mt-2">I wanted to create a website that was a little reminiscent of the Internet in the 2000s. Do you remember the first few times you ever got to use the Internet? Or play a game on the World Wide Web? Back then, I felt like I always wanted to tinker with everything and hover over every pixel to see what I could click on.</p>                     
              <p>I wanted to try to create a personal site that both felt personal and made you *want* to explore. This website doesn&apos;t tell everything about me, in fact, there&apos;s more than a few things that I left out (either by choice or they&apos;re coming soon), but I hope it made you curious to learn more!</p>
              <p>Outside of class projects, this is my first attempt at a personal website. While it&apos;s not perfect and it&apos;s still a work in progress, I&apos;m looking forward to adding more to this site and revamping it with other ideas in the future!</p>
            </div>
           
            <div className="p-3 bg-blue-50 rounded border border-blue-200">
              <strong>Let me know what you think!</strong>
              <p className="mt-2">You can send me a message at either of these emails:</p>
              <div className="mt-2 space-y-1">
                <div>📧 lyw14@bu.edu</div>
                <div>📧 lucyywang9@gmail.com</div>
              </div>
              <p className="mt-2">Or checkout my GitHub!</p>
              <div className="mt-2 space-y-1">
                {/* <div>https://github.com/LYW14</div> */}
                <div><a href="https://github.com/LYW14" rel="noreferrer">
                  https://github.com/LYW14
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        "more"
      );
    };
   
   
    return {
      handleProjectsMenu,
      handlePlacesMenu,
      handleReadingMenu,
      handleToolsMenu,
      handleMoreMenu,
      openHobbyWindow,
      handleEmailClick: copyEmailToClipboard,
      handleResumeDownload: downloadResume,
    };
   };   