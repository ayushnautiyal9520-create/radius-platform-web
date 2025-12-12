/**
 * Theme Type Definitions
 * Defines all theme-related types for Radius
 */

/**
 * Base theme structure
 */
export interface Theme {
  id: string;
  name: string;
  type: ThemeType;
  colors: ThemeColors;
  typography: ThemeTypography;
  animations: ThemeAnimations;
  metadata?: ThemeMetadata;
}

/**
 * Theme types
 */
export type ThemeType = 
  | 'default-light'
  | 'default-dark'
  | 'state'
  | 'topic'
  | 'sport'
  | 'mood'
  | 'custom';

/**
 * Theme colors using HSL values
 */
export interface ThemeColors {
  primary: string;        // RGB format: "59 130 246"
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  surfaceHover?: string;
  text: string;
  textSecondary: string;
  border: string;
}

/**
 * Typography configuration
 */
export interface ThemeTypography {
  headingFont: string;
  bodyFont: string;
  fontSize?: {
    xs?: string;
    sm?: string;
    base?: string;
    lg?: string;
    xl?: string;
  };
}

/**
 * Animation configuration
 */
export interface ThemeAnimations {
  duration: string;
  easing: string;
  transition?: string;
}

/**
 * Theme metadata
 */
export interface ThemeMetadata {
  description?: string;
  tags?: string[];
  author?: string;
  createdAt?: Date;
}

/**
 * Context for theme selection
 */
export interface ThemeContext {
  state?: string;          // e.g., "uttarakhand", "maharashtra"
  topic?: string;          // e.g., "harry-potter", "technology"
  sport?: string;          // e.g., "cricket", "football"
  mood?: UserMood;
  category?: string;
}

/**
 * User mood types
 */
export const UserMood = {
  HAPPY: 'happy',
  SAD: 'sad',
  ANGRY: 'angry',
  CALM: 'calm',
  CURIOUS: 'curious',
  ENERGETIC: 'energetic',
  STRESSED: 'stressed',
  INSPIRED: 'inspired',
  BORED: 'bored',
  FOCUSED: 'focused',
} as const;

export type UserMood = typeof UserMood[keyof typeof UserMood];

/**
 * Theme mode (light/dark)
 */
export type ThemeMode = 'light' | 'dark' | 'auto';
