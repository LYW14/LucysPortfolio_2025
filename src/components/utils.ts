// utils.ts
import { CONTACT_INFO, WINDOW_DEFAULTS } from './constants';
import type { WindowData } from './types';

// Email utility functions
export const copyEmailToClipboard = async (): Promise<void> => {
  try {
    await navigator.clipboard.writeText(CONTACT_INFO.EMAIL);
    alert("Email copied to clipboard!");
  } catch (err) {
    // Fallback: open email client
    window.location.href = `mailto:${CONTACT_INFO.EMAIL}`;
  }
};

// Resume download utility
export const downloadResume = (): void => {
  const link = document.createElement("a");
  link.href = CONTACT_INFO.RESUME_PATH;
  link.download = CONTACT_INFO.RESUME_DOWNLOAD_NAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Window positioning utilities
export const calculateWindowPosition = (windowCount: number, isProjectWindow: boolean = false): { x: number; y: number } => {
  const count = isProjectWindow ? windowCount : windowCount;
  const offsetX = (count * WINDOW_DEFAULTS.OFFSET_INCREMENT.x) % WINDOW_DEFAULTS.MAX_OFFSET.x;
  const offsetY = (count * WINDOW_DEFAULTS.OFFSET_INCREMENT.y) % WINDOW_DEFAULTS.MAX_OFFSET.y;
  
  return {
    x: WINDOW_DEFAULTS.INITIAL_POSITION.x + offsetX,
    y: WINDOW_DEFAULTS.INITIAL_POSITION.y + offsetY
  };
};

// Constraint utilities for window positioning
export const constrainPosition = (
  x: number, 
  y: number, 
  width: number, 
  height: number
): { x: number; y: number } => {
  return {
    x: Math.max(0, Math.min(window.innerWidth - width, x)),
    y: Math.max(0, Math.min(window.innerHeight - height - WINDOW_DEFAULTS.HEADER_HEIGHT, y))
  };
};

// Video URL processing utilities
export const getEmbedUrl = (url: string): string => {
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

// Audio utilities
export const createAudioInstance = (audioSrc: string, loop: boolean = false): HTMLAudioElement => {
  const audio = new Audio(audioSrc);
  audio.loop = loop;
  return audio;
};

export const playAudio = (audio: HTMLAudioElement): Promise<void> => {
  return audio.play().catch(() => {
    console.warn('Audio playback failed - user interaction may be required');
  });
};

export const stopAudio = (audio: HTMLAudioElement): void => {
  audio.pause();
  audio.currentTime = 0;
};