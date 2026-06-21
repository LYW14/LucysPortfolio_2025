// menuHandlers.ts — no JSX. Handlers just pass WindowContent identifiers.
import type { WindowContent, WindowTheme } from './types';
import { copyEmailToClipboard, downloadResume } from './utils';

type OpenWindow = (id: string, title: string, content: WindowContent, theme: WindowTheme) => void;

interface MenuHandlersProps {
  handleOpenWindow: OpenWindow;
}

export const createMenuHandlers = ({ handleOpenWindow }: MenuHandlersProps) => ({
  handleProjectsMenu: () =>
    handleOpenWindow('projects-menu-' + Date.now(), 'My Projects', { type: 'projects-menu' }, 'cooking'),

  handlePlacesMenu: () =>
    handleOpenWindow('places-' + Date.now(), "Places I've Called Home", { type: 'places' }, 'map'),

  handleReadingMenu: () =>
    handleOpenWindow('reading-' + Date.now(), 'Major Coursework', { type: 'reading' }, 'books'),

  handleToolsMenu: () =>
    handleOpenWindow('tools-' + Date.now(), 'My Tools', { type: 'tools' }, 'tools'),

  handleMoreMenu: () =>
    handleOpenWindow('about-' + Date.now(), 'More', { type: 'more' }, 'more'),

  handleEmailClick: copyEmailToClipboard,
  handleResumeDownload: downloadResume,
});