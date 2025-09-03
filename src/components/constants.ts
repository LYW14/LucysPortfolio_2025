// constants.ts
import type { ThemeConfig } from './types';
import type { WindowTheme } from './types';

export const THEME_CLASSES: Record<WindowTheme, ThemeConfig> = {
  coffee: { 
    header: "bg-[#5d4037] text-white", 
    body: "bg-[#efebe9] text-amber-900" 
  },
  cooking: { 
    header: "bg-gradient-to-r from-red-500 to-pink-500 text-white", 
    body: "bg-rose-50 text-red-900" 
  },
  books: { 
    header: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white", 
    body: "bg-blue-50 text-blue-900" 
  },
  map: { 
    header: "bg-gradient-to-r from-green-500 to-emerald-600 text-white", 
    body: "bg-green-50 text-green-900" 
  },
  shelf: { 
    header: "bg-gradient-to-r from-purple-500 to-violet-600 text-white", 
    body: "bg-purple-50 text-purple-900" 
  },
  tools: { 
    header: "bg-gradient-to-r from-gray-600 to-slate-700 text-white", 
    body: "bg-gray-50 text-gray-800" 
  },
  more: { 
    header: "bg-gradient-to-r from-indigo-300 via-purple-300 via-pink-300 via-rose-300 via-orange-300 via-yellow-300 to-green-300 text-white",
    body: "bg-gray-50 text-gray-800" 
  },
  default: { 
    header: "bg-gradient-to-r from-blue-500 to-teal-500 text-white", 
    body: "bg-white text-gray-700" 
  },
};

export const WINDOW_DEFAULTS = {
  MIN_WIDTH: 200,
  MIN_HEIGHT: 150,
  DEFAULT_WIDTH: 480,
  DEFAULT_HEIGHT: 380,
  HEADER_HEIGHT: 60,
  OFFSET_INCREMENT: { x: 35, y: 40 },
  MAX_OFFSET: { x: 300, y: 250 },
  INITIAL_POSITION: { x: 150, y: 80 }
};

export const CONTACT_INFO = {
  EMAIL: "lyw14@bu.edu",
  PERSONAL_EMAIL: "lucyywang9@gmail.com",
  GITHUB: "https://github.com/LYW14",
  RESUME_PATH: "/LWang - Plain Text Resume via - Lucys_Website.pdf",
  RESUME_DOWNLOAD_NAME: "LucyWang_Resume.pdf"
};