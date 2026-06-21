// types.ts

// --- Window content ---
// Store identifiers, not React nodes, so content stays fresh and closures don't go stale.
export type WindowContent =
  | { type: 'welcome' }
  | { type: 'hobby' }
  | { type: 'project'; projectId: string }
  | { type: 'projects-menu' }
  | { type: 'places' }
  | { type: 'reading' }
  | { type: 'tools' }
  | { type: 'more' };

export interface WindowData {
  id: string;
  title: string;
  content: WindowContent;   // was React.ReactNode
  theme: WindowTheme;
  x: number;
  y: number;
  width: number;
  height: number;
}

export type WindowTheme = "coffee" | "cooking" | "books" | "map" | "shelf" | "tools" | "more" | "default";

export interface DragData {
  isDragging: boolean;
  windowId: string;
  startX: number;
  startY: number;
  windowX: number;
  windowY: number;
}

export interface ResizeData {
  isResizing: boolean;
  windowId: string;
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
  resizeDirection: string;
}

export interface ProjectMedia {
  videos?: string[];
  files?: MediaFile[];
}

export interface MediaFile {
  name: string;
  url: string;
  type: 'pdf' | 'link' | 'doc' | string;
}

// All string fields — JSX removed. Use **bold** markers; FormattedText renders them.
export interface Project {
  id: string;
  title: string;
  logo: string;
  description: string;
  descriptions: {
    short: string;
    medium: string;
    long: string;
  };
  learned: string;
  media?: ProjectMedia;
}

export interface City {
  id: string;
  name: string;
  emoji: string;
  slides: string[];
}

export interface ThemeConfig {
  header: string;
  body: string;
}