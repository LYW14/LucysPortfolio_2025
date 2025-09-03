// types.ts
import React from 'react';

export interface WindowData {
  id: string;
  title: string;
  content: React.ReactNode;
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

export interface Project {
  id: string;
  title: string;
  logo: string;
  description: string;
  descriptions: {
    short: string;
    medium: string;
    long: string| React.ReactNode;
  };
  learned: string | React.ReactNode;
  media?: ProjectMedia;
}

export interface City {
  id: string;
  name: string;
  emoji: string;
  slides: (string | React.ReactNode)[];
}

export interface ThemeConfig {
  header: string;
  body: string;
}