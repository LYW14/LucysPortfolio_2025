import React from 'react';
import type { WindowData } from './types';
import { THEME_CLASSES } from './constants';
import { WindowContentRenderer } from './WindowContentRenderer';

interface WindowProps {
  window: WindowData;
  onMouseDown: (e: React.MouseEvent, windowId: string) => void;
  onTouchStart: (e: React.TouchEvent, windowId: string) => void;
  onClose: (id: string) => void;
  onResizeMouseDown: (e: React.MouseEvent, windowId: string, direction: string) => void;
}

export const Window: React.FC<WindowProps> = ({
  window,
  onMouseDown,
  onTouchStart,
  onClose,
  onResizeMouseDown,
}) => {
  const { header, body } = THEME_CLASSES[window.theme];

  return (
    <div
      className="absolute bg-white rounded-xl shadow-2xl border-0 overflow-hidden"
      style={{
        left: `clamp(8px, ${window.x}px, calc(100vw - ${window.width}px - 8px))`,
        top: `clamp(8px, ${window.y}px, calc(100vh - ${window.height}px - 8px))`,
        width: window.width,
        height: window.height,
        maxWidth: 'calc(100vw - 16px)',
        maxHeight: 'calc(100vh - 16px)',
        zIndex: 1000,
      }}
    >
      <div
        className={`window-header flex items-center justify-between px-4 py-3 cursor-move select-none ${header} shadow-lg`}
        onMouseDown={(e) => onMouseDown(e, window.id)}
        onTouchStart={(e) => onTouchStart(e, window.id)}
      >
        <span className="font-semibold text-sm tracking-wide">{window.title}</span>
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); onClose(window.id); }}
          className="w-6 h-6 bg-red-500 hover:bg-red-400 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all duration-200 hover:scale-110 shadow-md"
        >
          ×
        </button>
      </div>

      <div className={`overflow-auto ${body}`} style={{ height: window.height - 60 }}>
        <div className="p-4">
          <WindowContentRenderer content={window.content} />
        </div>
      </div>

      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize bg-gray-400 opacity-50 hover:opacity-100"
        onMouseDown={(e) => onResizeMouseDown(e, window.id, 'se')}
      />
    </div>
  );
};