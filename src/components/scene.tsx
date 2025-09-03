// Scene.tsx - Refactored Main Component
import "./scene.css";
import { useState } from "react";
import { useHobbyRecipe } from './useHobbyRecipe';
import { useWindowManager } from './useWindowManager';
import { createMenuHandlers } from './menuHandlers';
import { Window } from './window';
import { ProjectDetails } from './ProjectDetails';
// import { CityTravelGuide } from './cityTravelGuide';
import { PROJECTS } from './projectData';

// Asset imports - organized by category
import books from "../assets/books.png";
import coffee from "../assets/coffee.png";
import cooking1 from "../assets/cooking1.png";
import cooking2 from "../assets/cooking2.png";
import cooking3 from "../assets/cooking3.png";
import cooking4 from "../assets/cooking3.png";
import cooking5 from "../assets/cooking5.png";
import backdrop from "../assets/kitchen-background.png";
import map_full from "../assets/map-full.png";
import shelf_full from "../assets/shelf-complete.png";
import tools from "../assets/tools.png";

// Fridge menu assets
import projects from "../assets/fridge_menu_components/projects.png";
import places from "../assets/fridge_menu_components/places.png";
import hobbies from "../assets/fridge_menu_components/hobbies.png";
import reading from "../assets/fridge_menu_components/reading.png";
import resume from "../assets/fridge_menu_components/resume_comp_copy_2.png";
import menu from "../assets/fridge_menu_components/menu.png";
import title from "/Users/lucywang/LucysPortfolio/src/assets/fridge_menu_components/LucysWebsite.png";
import email from "../assets/fridge_menu_components/email.png";
import more from "../assets/fridge_menu_components/more_image.png";
import tools_text from "../assets/fridge_menu_components/tools_text.png";

export default function Scene() {
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);
  
  const {
    windows,
    handleOpenWindow,
    handleCloseWindow,
    handleMouseDown,
    handleResizeMouseDown,
  } = useWindowManager();

  const { openHobbyWindow } = useHobbyRecipe({ 
    handleOpenWindow, 
    currentHobbyIndex, 
    setCurrentHobbyIndex 
  });

  const {
    handleProjectsMenu,
    handlePlacesMenu,
    handleReadingMenu,
    handleToolsMenu,
    handleMoreMenu,
    handleEmailClick,
    handleResumeDownload,
  } = createMenuHandlers({ handleOpenWindow, openHobbyWindow });

  const createProjectHandler = (projectId: string) => () => {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;
    
    handleOpenWindow(
      `project-${projectId}-${Date.now()}`,
      project.title,
      <ProjectDetails project={project} />,
      "cooking"
    );
  };

  // const createStandaloneWindowHandler = (
  //   id: string,
  //   title: string,
  //   content: React.ReactNode,
  //   theme: any
  // ) => () => {
  //   handleOpenWindow(`${id}-${Date.now()}`, title, content, theme);
  // };

  return (
    <div className="scene">
      <img src={backdrop} alt="kitchen background" className="backdrop" />
      
      {/* Page Title */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-[15] w-[90%] max-w-[800px] h-auto">
        <img src={title} alt="Lucy's Website" className="page-title" />
      </div>

      {/* Fridge Menu Components */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-[10]">
        <img src={menu} alt="menu" className="menu-header mb-4" />
        
        <div className="menu-container">
          <img src={projects} alt="projects" className="absolute fridge-menu-item menu-item-1 icon" onClick={handleProjectsMenu} />
          <img src={places} alt="places" className="absolute fridge-menu-item menu-item-2 icon" onClick={handlePlacesMenu} />
          <img src={reading} alt="reading" className="absolute fridge-menu-item menu-item-3 icon" onClick={handleReadingMenu} />
          <img src={hobbies} alt="hobbies" className="absolute fridge-menu-item menu-item-4 icon" onClick={openHobbyWindow} />
          <img src={tools_text} alt="tools" className="absolute fridge-menu-item menu-item-5 icon" onClick={handleToolsMenu} />
          <img src={resume} alt="resume" className="absolute fridge-menu-item menu-item-6 icon" onClick={handleResumeDownload} title="Download Resume" />
          <img src={email} className="absolute fridge-menu-item menu-item-7 icon" onClick={handleEmailClick} title="Click to copy email to clipboard" />
        </div>

        <img src={more} className="absolute fridge-item extra-item-1 icon" onClick={handleMoreMenu} title="Learn More" />
      </div>

      {/* Interactive Scene Elements */}
      <img src={books} alt="books" className="books icon" onClick={handleReadingMenu} />
      <img src={coffee} alt="coffee" className="coffee icon" onClick={openHobbyWindow} />
      
      {/* Cooking Project Items */}
      <img src={cooking5} alt="cooking5" className="cooking5 icon" onClick={createProjectHandler('project1')} />
      <img src={cooking1} alt="cooking1" className="cooking1 icon" onClick={createProjectHandler('project2')} />
      <img src={cooking2} alt="cooking2" className="cooking2 icon" onClick={createProjectHandler('project3')} />
      <img src={cooking3} alt="cooking3" className="cooking3 icon" onClick={createProjectHandler('project4')} />
      <img src={cooking4} alt="cooking4" className="cooking4 icon" onClick={createProjectHandler('project5')} />

      {/* Other Interactive Elements */}
      <img src={map_full} alt="map" className="map_full icon" onClick={handlePlacesMenu} />
      <img 
        src={shelf_full} 
        alt="shelf" 
        // className="shelf_full icon" //temporary disabled
        className="shelf_full" 
        // onClick={createStandaloneWindowHandler(
        //   "shelf",
        //   "Collections",
        //   <div>
        //     <h3 className="text-lg font-bold mb-3">📦 My Collections</h3>
        //     <p>Things I collect and treasure...</p>
        //     <div className="mt-4 space-y-2">
        //       <div className="p-3 bg-white rounded border">
        //         <strong>Vinyl Records:</strong> 47 albums and counting
        //       </div>
        //       <div className="p-3 bg-white rounded border">
        //         <strong>Vintage Cameras:</strong> 8 working film cameras
        //       </div>
        //       <div className="p-3 bg-white rounded border">
        //         <strong>Art Supplies:</strong> Way too many watercolor sets
        //       </div>
        //     </div>
        //   </div>,
        //   "shelf"
        // )}
      />
      <img src={tools} alt="tools" className="tools icon" onClick={handleToolsMenu} />

      {/* Render Open Windows */}
      {windows.map((window) => (
        <Window 
          key={window.id} 
          window={window}
          onMouseDown={handleMouseDown}
          onClose={handleCloseWindow}
          onResizeMouseDown={handleResizeMouseDown}
        />
      ))}
    </div>
  );
}