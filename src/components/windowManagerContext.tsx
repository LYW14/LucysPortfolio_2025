import { createContext, useContext } from 'react';
import type { WindowContent, WindowTheme } from './types';

interface WindowActions {
  openWindow: (id: string, title: string, content: WindowContent, theme: WindowTheme) => void;
  closeWindow: (id: string) => void;
}

export const WindowManagerContext = createContext<WindowActions | null>(null);

/**
 * Use this inside any component that renders inside a Window to open/close windows.
 * The context is provided by Scene, which wraps all Window renders in the provider.
 */
export const useWindowActions = (): WindowActions => {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowActions must be used inside a WindowManagerContext.Provider');
  return ctx;
};