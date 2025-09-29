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
        "Major Coursework",
        <div>
          <h3 className="text-lg font-bold mb-3">📚 Coursework: </h3>
          <p>A list of my college coursework. Note: not all courses were taken at the same school, hence they may have different course code formats.</p>
          <div className="mt-4 space-y-2">
            <div className="p-3 bg-white rounded border">
              <strong>Programming/Data Science</strong><br/>
                <strong>QST BA576:</strong> Machine Learning for Business Analytics <br/>
                <strong>CDS CS519:</strong> Spark! Software Engineering Practicum <br/>
                <strong>CDS DS430:</strong> Introduction to Bioinformatics and Computational Biology<br/>
                <strong>CDS DS340:</strong> Introduction to Machine Learning and Artificial Intelligence<br/>
                <strong>CDS DS497:</strong> Data Science of the Mind<br/>
                <strong>CDS DS320:</strong> Algorithms for Data Science<br/>
                <strong>CDS DS310:</strong> Data Mechanics <br/>
                <strong>SCI CS0445:</strong> Data Structures and Algorithms I<br/>
                <strong>SCI CMPINF401:</strong> Intermediate Programming<br/>
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Math/Statistics: </strong><br/>
                <strong>MATH0230:</strong> Analytic Geometry and Calculus II <br/>
                <strong>DS122:</strong> Foundations of Data Science III <br/>
                <strong>MA213:</strong> Basic Statistics and Probability <br/>
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Public Health: </strong><br/>
                <strong>SPH PH510:</strong> Essentials of Public Health <br/>
                <strong>SAR HS325:</strong> Introduction to Global Health
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Math Education: </strong><br/>
                <strong>WED ME501:</strong> Methods for Tutoring Math Students <br/>
                <strong>WED ME500:</strong> Introduction to Mathematics Education <br/>
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