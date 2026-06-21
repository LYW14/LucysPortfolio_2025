import React from 'react';
import type { WindowContent } from './types';
import { PROJECTS } from './projectData';
import { WelcomeWindow } from './welcomeWindow';
import { HobbyRecipe } from './HobbyRecipe';
import { ProjectsMenu } from './ProjectsMenu';
import { ProjectDetails } from './ProjectDetails';
import { CityTravelGuide } from './cityTravelGuide';
import { ReadingWindow } from './ReadingWindow';
import { ToolsWindow } from './ToolsWindow';
import { MoreWindow } from './MoreWindow';

interface WindowContentRendererProps {
  content: WindowContent;
}

/**
 * Renders the correct component for a given WindowContent identifier.
 * Adding a new window type means: add a case here + add to the WindowContent union in types.ts.
 */
export const WindowContentRenderer: React.FC<WindowContentRendererProps> = ({ content }) => {
  switch (content.type) {
    case 'welcome':
      return <WelcomeWindow />;

    case 'hobby':
      return <HobbyRecipe />;

    case 'projects-menu':
      return <ProjectsMenu />;

    case 'project': {
      const project = PROJECTS.find(p => p.id === content.projectId);
      if (!project) return <p className="text-red-500">Project not found.</p>;
      return <ProjectDetails project={project} />;
    }

    case 'places':
      return <CityTravelGuide />;

    case 'reading':
      return <ReadingWindow />;

    case 'tools':
      return <ToolsWindow />;

    case 'more':
      return <MoreWindow />;

    default:
      // TypeScript exhaustiveness check
      content satisfies never;
      return null;
  }
};