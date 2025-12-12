/**
 * Theme Hooks
 * React hooks for theme management
 */

import { useState, useEffect, useCallback } from 'react';
import type { Theme, ThemeContext, ThemeMode } from '../types/theme.types';
import { themeManager } from '../services/ThemeManager';

/**
 * Hook to manage theme mode (light/dark)
 */
export const useThemeMode = () => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    // Initialize from localStorage or system preference
    const saved = localStorage.getItem('theme-mode') as ThemeMode;
    if (saved) return saved;
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Apply dark class on mount and when mode changes
  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return { mode, setMode, toggleMode };
};

/**
 * Hook to get current theme
 */
export const useCurrentTheme = () => {
  const [theme, setTheme] = useState<Theme>(themeManager.getCurrentTheme());

  useEffect(() => {
    // Update theme state when it changes
    const interval = setInterval(() => {
      const currentTheme = themeManager.getCurrentTheme();
      if (currentTheme.id !== theme.id) {
        setTheme(currentTheme);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [theme.id]);

  return theme;
};

/**
 * Hook to apply contextual theme
 */
export const useContextualTheme = (context: ThemeContext) => {
  useEffect(() => {
    if (Object.keys(context).length > 0) {
      themeManager.detectAndApplyTheme(context);
    }
  }, [context]);
};

/**
 * Hook to apply theme based on content
 */
export const useContentTheme = (content: string) => {
  useEffect(() => {
    if (content) {
      const context = themeManager.analyzeContent(content);
      if (Object.keys(context).length > 0) {
        themeManager.detectAndApplyTheme(context);
      }
    }
  }, [content]);
};

/**
 * Hook to get all available themes
 */
export const useAllThemes = () => {
  return themeManager.getAllThemes();
};
