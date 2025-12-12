/**
 * Theme Manager Service
 * Handles theme detection, selection, and application
 */

import type { Theme, ThemeContext, ThemeMode } from '../types/theme.types';
import {
  ALL_THEMES,
  STATE_THEMES,
  TOPIC_THEMES,
  SPORTS_THEMES,
  MOOD_THEMES,
  DEFAULT_LIGHT_THEME,
  DEFAULT_DARK_THEME,
} from '../constants/themes';

/**
 * Theme Manager Class
 * Manages contextual theme switching and application
 */
export class ThemeManager {
  private currentTheme: Theme;
  private currentMode: ThemeMode = 'light';
  private transitionDuration = 800; // ms

  constructor() {
    this.currentTheme = DEFAULT_LIGHT_THEME;
    this.initializeTheme();
  }

  /**
   * Initialize theme from localStorage or system preference
   */
  private initializeTheme(): void {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    const savedThemeId = localStorage.getItem('theme-id');

    if (savedMode) {
      this.currentMode = savedMode;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.currentMode = 'dark';
    }

    // Apply dark class to HTML element
    const root = document.documentElement;
    if (this.currentMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (savedThemeId && ALL_THEMES[savedThemeId]) {
      this.currentTheme = ALL_THEMES[savedThemeId];
    } else {
      this.currentTheme = this.currentMode === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
    }

    this.applyTheme(this.currentTheme);
  }

  /**
   * Detect and apply theme based on content context
   */
  async detectAndApplyTheme(context: ThemeContext): Promise<void> {
    const theme = this.selectThemeFromContext(context);
    await this.applyThemeWithTransition(theme);
  }

  /**
   * Select appropriate theme based on context
   * Priority: State > Topic > Sport > Mood > Default
   */
  private selectThemeFromContext(context: ThemeContext): Theme {
    // Check for state-based theme
    if (context.state && STATE_THEMES[context.state]) {
      return STATE_THEMES[context.state];
    }

    // Check for topic-based theme
    if (context.topic && TOPIC_THEMES[context.topic]) {
      return TOPIC_THEMES[context.topic];
    }

    // Check for sports theme
    if (context.sport && SPORTS_THEMES[context.sport]) {
      return SPORTS_THEMES[context.sport];
    }

    // Check for mood theme
    if (context.mood && MOOD_THEMES[context.mood]) {
      return MOOD_THEMES[context.mood];
    }

    // Return default theme based on current mode
    return this.currentMode === 'dark' ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
  }

  /**
   * Apply theme with smooth transition
   */
  async applyThemeWithTransition(theme: Theme): Promise<void> {
    const root = document.documentElement;

    // Add transition class
    root.classList.add('theme-transitioning');

    // Apply theme
    this.applyTheme(theme);

    // Wait for transition
    await new Promise(resolve => setTimeout(resolve, this.transitionDuration));

    // Remove transition class
    root.classList.remove('theme-transitioning');

    // Save to localStorage
    localStorage.setItem('theme-id', theme.id);
  }

  /**
   * Apply theme to DOM
   */
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    // Apply color variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${this.camelToKebab(key)}`, value);
    });

    // Apply typography
    root.style.setProperty('--font-heading', theme.typography.headingFont);
    root.style.setProperty('--font-body', theme.typography.bodyFont);

    // Apply animation settings
    root.style.setProperty('--theme-transition', theme.animations.duration);

    this.currentTheme = theme;
  }

  /**
   * Toggle between light and dark mode
   */
  toggleMode(): void {
    this.currentMode = this.currentMode === 'light' ? 'dark' : 'light';
    const root = document.documentElement;

    if (this.currentMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme-mode', this.currentMode);
  }

  /**
   * Set specific theme mode
   */
  setMode(mode: ThemeMode): void {
    this.currentMode = mode;
    const root = document.documentElement;

    if (mode === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme-mode', mode);
  }

  /**
   * Get current theme
   */
  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  /**
   * Get current mode
   */
  getCurrentMode(): ThemeMode {
    return this.currentMode;
  }

  /**
   * Get theme by ID
   */
  getThemeById(id: string): Theme | undefined {
    return ALL_THEMES[id];
  }

  /**
   * Get all available themes
   */
  getAllThemes(): Record<string, Theme> {
    return ALL_THEMES;
  }

  /**
   * Convert camelCase to kebab-case
   */
  private camelToKebab(str: string): string {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  /**
   * Analyze content to extract context
   * This is a simple implementation - can be enhanced with AI
   */
  analyzeContent(content: string): ThemeContext {
    const context: ThemeContext = {};

    // Check for state mentions
    const states = Object.keys(STATE_THEMES);
    for (const state of states) {
      if (content.toLowerCase().includes(state)) {
        context.state = state;
        break;
      }
    }

    // Check for topic mentions
    const topics = Object.keys(TOPIC_THEMES);
    for (const topic of topics) {
      if (content.toLowerCase().includes(topic.replace('-', ' '))) {
        context.topic = topic;
        break;
      }
    }

    // Check for sports mentions
    const sports = Object.keys(SPORTS_THEMES);
    for (const sport of sports) {
      if (content.toLowerCase().includes(sport)) {
        context.sport = sport;
        break;
      }
    }

    return context;
  }
}

// Export singleton instance
export const themeManager = new ThemeManager();
