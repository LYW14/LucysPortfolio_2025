import React from 'react';
import { PROJECTS } from './projectData';
import { useWindowActions } from './WindowManagerContext';

/**
 * Lists all projects. Uses the window context to open individual project
 * windows without needing to prop-drill handleOpenWindow.
 */
export const ProjectsMenu: React.FC = () => {
  const { openWindow } = useWindowActions();

  const openProject = (projectId: string, title: string) => {
    openWindow(
      `project-${projectId}-${Date.now()}`,
      title,
      { type: 'project', projectId },
      'cooking'
    );
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">My Projects</h3>
      <p className="text-2xl font-mono text-center mb-4">
        <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text font-bold">
          Welcome to Lucy's Kitchen OS.
        </span>{' '}
        <span className="text-black">
          Select a stovetop dish or peek in the oven to get a taste of my{' '}
          <span className="text-yellow-400 font-semibold">projects</span>
        </span>
      </p>
      <div className="grid gap-4">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => openProject(project.id, project.title)}
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
    </div>
  );
};