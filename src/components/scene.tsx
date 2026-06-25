// Scene.tsx
import "./scene.css";
import { useEffect } from "react";
import { useWindowManager } from './useWindowManager';
import { createMenuHandlers } from './menuHandlers';
import { Window } from './window';
import { WindowManagerContext } from './windowManagerContext';

// Asset imports
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
import reading from "../assets/fridge_menu_components/coursework.png";
import resume from "../assets/fridge_menu_components/resume_comp_copy_2.png";
import menu from "../assets/fridge_menu_components/menu.png";
import title from "../assets/fridge_menu_components/LucysWebsite.png";
import email from "../assets/fridge_menu_components/email.png";
import more from "../assets/fridge_menu_components/more_image.png";
import tools_text from "../assets/fridge_menu_components/tools_text.png";

export default function Scene() {
  const {
    windows,
    handleOpenWindow,
    handleCloseWindow,
    handleMouseDown,
    handleTouchStart,
    handleResizeMouseDown,
  } = useWindowManager();

  const {
    handleProjectsMenu,
    handlePlacesMenu,
    handleReadingMenu,
    handleToolsMenu,
    handleMoreMenu,
    handleEmailClick,
    handleResumeDownload,
  } = createMenuHandlers({ handleOpenWindow });

  // Open welcome window once on mount. handleOpenWindow is stable so this
  // effect truly runs only once — no hasShownWelcome guard needed.
  useEffect(() => {
    handleOpenWindow("welcome-window", "Welcome! 👋", { type: 'welcome' }, "default");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openProject = (projectId: string, title: string) =>
    handleOpenWindow(`project-${projectId}-${Date.now()}`, title, { type: 'project', projectId }, 'cooking');

  const openHobbyWindow = () =>
    handleOpenWindow('hobby-recipe-window', 'My Hobbies', { type: 'hobby' }, 'coffee');

  return (
    <div className="scene">
      <img src={backdrop} alt="kitchen background" className="backdrop" />

      {/* Page Title */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-[15] w-[90%] max-w-[800px] h-auto">
        <img src={title} alt="Lucy's Website" className="page-title" />
      </div>

      {/* Fridge Menu */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-[10]">
        <div className="menu-container">
          <img src={menu} alt="menu" className="absolute menu-header" />
          <img src={projects}   alt="projects"   className="absolute fridge-menu-item menu-item-1 icon" onClick={handleProjectsMenu} />
          <img src={places}     alt="places"     className="absolute fridge-menu-item menu-item-2 icon" onClick={handlePlacesMenu} />
          <img src={reading}    alt="reading"    className="absolute fridge-menu-item menu-item-3 icon" onClick={handleReadingMenu} />
          <img src={hobbies}    alt="hobbies"    className="absolute fridge-menu-item menu-item-4 icon" onClick={openHobbyWindow} />
          <img src={tools_text} alt="tools"      className="absolute fridge-menu-item menu-item-5 icon" onClick={handleToolsMenu} />
          <img src={resume}     alt="resume"     className="absolute fridge-menu-item menu-item-6 icon" onClick={handleResumeDownload} title="Download Resume" />
          <img src={email}                       className="absolute fridge-menu-item menu-item-7 icon" onClick={handleEmailClick} title="Click to copy email" />
        </div>
        <img src={more} className="absolute fridge-item extra-item-1 icon" onClick={handleMoreMenu} title="Learn More" />
      </div>

      {/* Interactive scene elements */}
      <img src={books}    alt="books"    className="books icon"    onClick={handleReadingMenu} />
      <img src={coffee}   alt="coffee"   className="coffee icon"   onClick={openHobbyWindow} />
      <img src={cooking5} alt="cooking5" className="cooking5 icon" onClick={() => openProject('project1', 'CMOVF: Computerized Mapping of Visuospatial Fields')} />
      <img src={cooking1} alt="cooking1" className="cooking1 icon" onClick={() => openProject('project2', 'Function Junction')} />
      <img src={cooking2} alt="cooking2" className="cooking2 icon" onClick={() => openProject('project3', 'LOOKSMAXX')} />
      <img src={cooking3} alt="cooking3" className="cooking3 icon" onClick={() => openProject('project4', 'Academic Performance vs. Study Habits')} />
      <img src={cooking4} alt="cooking4" className="cooking4 icon" onClick={() => openProject('project5', 'Single Cell/Goblet Cell Transcriptome Changes in Colitis')} />
      <img src={map_full} alt="map"      className="map_full icon" onClick={handlePlacesMenu} />
      <img src={shelf_full} alt="shelf"  className="shelf_full" />
      <img src={tools}    alt="tools"    className="tools icon"    onClick={handleToolsMenu} />

      {/* Windows — wrapped in context so content components can open new windows */}
      <WindowManagerContext.Provider value={{ openWindow: handleOpenWindow, closeWindow: handleCloseWindow }}>
        {windows.map((win) => (
          <Window
            key={win.id}
            window={win}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onClose={handleCloseWindow}
            onResizeMouseDown={handleResizeMouseDown}
          />
        ))}
      </WindowManagerContext.Provider>
    </div>
  );
}