import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { LayoutMode } from '../types';

interface LayoutContextType {
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
  toggleLayout: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

const LAYOUT_STORAGE_KEY = 'menu-board-layout-mode';

const getInitialLayout = (): LayoutMode => {
  if (typeof window === 'undefined') return 'grid';

  try {
    const stored = localStorage.getItem(LAYOUT_STORAGE_KEY);
    if (stored && ['grid', 'list', 'featured'].includes(stored)) {
      return stored as LayoutMode;
    }
  } catch (error) {
    console.warn('Failed to read layout mode from localStorage:', error);
  }

  return 'grid';
};

const saveLayoutToStorage = (mode: LayoutMode): void => {
  try {
    localStorage.setItem(LAYOUT_STORAGE_KEY, mode);
  } catch (error) {
    console.warn('Failed to save layout mode to localStorage:', error);
  }
};

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutMode, setLayoutModeState] = useState<LayoutMode>(getInitialLayout);

  const setLayoutMode = (mode: LayoutMode) => {
    setLayoutModeState(mode);
    saveLayoutToStorage(mode);
  };

  const toggleLayout = () => {
    const newMode = layoutMode === 'grid' ? 'list' : 'grid';
    setLayoutMode(newMode);
  };

  // Sync with localStorage changes (e.g., from other tabs)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === LAYOUT_STORAGE_KEY && event.newValue) {
        const newMode = event.newValue as LayoutMode;
        if (['grid', 'list', 'featured'].includes(newMode)) {
          setLayoutModeState(newMode);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const value: LayoutContextType = {
    layoutMode,
    setLayoutMode,
    toggleLayout,
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout(): LayoutContextType {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}