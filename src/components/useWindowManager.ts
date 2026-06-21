// useWindowManager.ts
import { useState, useEffect, useCallback } from 'react';
import type { WindowData, DragData, ResizeData } from './types';
import { WINDOW_DEFAULTS } from './constants';
import { calculateWindowPosition, constrainPosition } from './utils';

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [dragData, setDragData] = useState<DragData>({
    isDragging: false,
    windowId: '',
    startX: 0,
    startY: 0,
    windowX: 0,
    windowY: 0
  });
  const [resizeData, setResizeData] = useState<ResizeData>({
    isResizing: false,
    windowId: '',
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
    resizeDirection: ''
  });

  const handleOpenWindow = useCallback((
    id: string,
    title: string,
    content: React.ReactNode,
    theme: WindowData['theme']
  ) => {
    const existingWindow = windows.find(w => w.id === id);
    if (existingWindow) {
      setWindows(prev => [
        ...prev.filter(w => w.id !== id),
        { ...existingWindow, content, title }
      ]);
      return;
    }

    const isProjectWindow = id.startsWith('project-');
    const existingProjectWindows = windows.filter(w => w.id.startsWith('project-'));
    const windowCount = isProjectWindow ? existingProjectWindows.length : windows.length;

    const position = calculateWindowPosition(windowCount, isProjectWindow);

    const newWindow: WindowData = {
      id,
      title,
      content,
      theme,
      x: position.x,
      y: position.y,
      width: WINDOW_DEFAULTS.DEFAULT_WIDTH,
      height: WINDOW_DEFAULTS.DEFAULT_HEIGHT,
    };

    setWindows(prev => [...prev, newWindow]);
  }, [windows]);

  const handleCloseWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  // Shared position update used by both mouse and touch drag
  const updateDragPosition = useCallback((clientX: number, clientY: number) => {
    const deltaX = clientX - dragData.startX;
    const deltaY = clientY - dragData.startY;

    setWindows(prev => prev.map(w => {
      if (w.id !== dragData.windowId) return w;

      const newPosition = constrainPosition(
        dragData.windowX + deltaX,
        dragData.windowY + deltaY,
        w.width,
        w.height
      );

      return { ...w, x: newPosition.x, y: newPosition.y };
    }));
  }, [dragData]);

  const handleMouseDown = useCallback((e: React.MouseEvent, windowId: string) => {
    if (!(e.target as HTMLElement).closest('.window-header')) return;

    const win = windows.find(w => w.id === windowId);
    if (!win) return;

    setDragData({
      isDragging: true,
      windowId,
      startX: e.clientX,
      startY: e.clientY,
      windowX: win.x,
      windowY: win.y
    });

    e.preventDefault();
  }, [windows]);

  // Touch equivalent of handleMouseDown — enables drag on mobile
  const handleTouchStart = useCallback((e: React.TouchEvent, windowId: string) => {
    if (!(e.target as HTMLElement).closest('.window-header')) return;

    const touch = e.touches[0];
    const win = windows.find(w => w.id === windowId);
    if (!win) return;

    setDragData({
      isDragging: true,
      windowId,
      startX: touch.clientX,
      startY: touch.clientY,
      windowX: win.x,
      windowY: win.y
    });

    e.preventDefault();
  }, [windows]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragData.isDragging) return;
    updateDragPosition(e.clientX, e.clientY);
  }, [dragData.isDragging, updateDragPosition]);

  const handleMouseUp = useCallback(() => {
    setDragData({
      isDragging: false,
      windowId: '',
      startX: 0,
      startY: 0,
      windowX: 0,
      windowY: 0
    });
  }, []);

  const handleResizeMouseDown = useCallback((e: React.MouseEvent, windowId: string, direction: string) => {
    const win = windows.find(w => w.id === windowId);
    if (!win) return;

    setResizeData({
      isResizing: true,
      windowId,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: win.width,
      startHeight: win.height,
      resizeDirection: direction
    });

    e.preventDefault();
    e.stopPropagation();
  }, [windows]);

  const handleResizeMouseMove = useCallback((e: MouseEvent) => {
    if (!resizeData.isResizing) return;

    const deltaX = e.clientX - resizeData.startX;
    const deltaY = e.clientY - resizeData.startY;

    setWindows(prev => prev.map(w => {
      if (w.id !== resizeData.windowId) return w;

      let newWidth = resizeData.startWidth;
      let newHeight = resizeData.startHeight;
      let newX = w.x;
      let newY = w.y;

      if (resizeData.resizeDirection.includes('e')) {
        newWidth = Math.max(WINDOW_DEFAULTS.MIN_WIDTH, resizeData.startWidth + deltaX);
      }
      if (resizeData.resizeDirection.includes('w')) {
        newWidth = Math.max(WINDOW_DEFAULTS.MIN_WIDTH, resizeData.startWidth - deltaX);
        newX = Math.min(w.x + w.width - WINDOW_DEFAULTS.MIN_WIDTH, resizeData.startX - resizeData.startWidth + newWidth);
      }
      if (resizeData.resizeDirection.includes('s')) {
        newHeight = Math.max(WINDOW_DEFAULTS.MIN_HEIGHT, resizeData.startHeight + deltaY);
      }
      if (resizeData.resizeDirection.includes('n')) {
        newHeight = Math.max(WINDOW_DEFAULTS.MIN_HEIGHT, resizeData.startHeight - deltaY);
        newY = Math.min(w.y + w.height - WINDOW_DEFAULTS.MIN_HEIGHT, resizeData.startY - resizeData.startHeight + newHeight);
      }

      return { ...w, width: newWidth, height: newHeight, x: newX, y: newY };
    }));
  }, [resizeData]);

  const handleResizeMouseUp = useCallback(() => {
    setResizeData({
      isResizing: false,
      windowId: '',
      startX: 0,
      startY: 0,
      startWidth: 0,
      startHeight: 0,
      resizeDirection: ''
    });
  }, []);

  // Mouse drag listeners
  useEffect(() => {
    if (!dragData.isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      updateDragPosition(touch.clientX, touch.clientY);
      e.preventDefault(); // prevent page scroll while dragging a window
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [dragData.isDragging, handleMouseMove, handleMouseUp, updateDragPosition]);

  // Resize listeners
  useEffect(() => {
    if (resizeData.isResizing) {
      document.addEventListener('mousemove', handleResizeMouseMove);
      document.addEventListener('mouseup', handleResizeMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleResizeMouseMove);
        document.removeEventListener('mouseup', handleResizeMouseUp);
      };
    }
  }, [resizeData.isResizing, handleResizeMouseMove, handleResizeMouseUp]);

  return {
    windows,
    handleOpenWindow,
    handleCloseWindow,
    handleMouseDown,
    handleTouchStart,
    handleResizeMouseDown,
  };
};
