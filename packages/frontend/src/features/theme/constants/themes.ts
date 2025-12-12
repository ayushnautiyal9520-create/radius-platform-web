/**
 * Theme Constants
 * Pre-defined themes for different contexts
 */

import type { Theme } from '../types/theme.types';

/**
 * State-based themes
 * Themes that represent Indian states with their cultural aesthetics
 */
export const STATE_THEMES: Record<string, Theme> = {
  uttarakhand: {
    id: 'state-uttarakhand',
    name: 'Uttarakhand',
    type: 'state',
    colors: {
      primary: '142 76% 36%',      // Mountain green
      secondary: '207 90% 54%',    // Sky blue
      accent: '45 93% 47%',        // Sunrise gold
      background: '120 60% 97%',   // Light mountain mist
      surface: '0 0% 100%',        // White
      text: '140 60% 15%',         // Dark green
      textSecondary: '200 18% 46%', // Gray blue
      border: '142 30% 85%',       // Light green
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '800ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Mountain-inspired theme with natural greens and blues',
      tags: ['nature', 'mountains', 'peaceful'],
    },
  },
  
  maharashtra: {
    id: 'state-maharashtra',
    name: 'Maharashtra',
    type: 'state',
    colors: {
      primary: '25 95% 53%',       // Vibrant orange
      secondary: '45 93% 47%',     // Golden yellow
      accent: '0 84% 60%',         // Red
      background: '30 100% 98%',   // Light cream
      surface: '0 0% 100%',
      text: '20 80% 20%',          // Dark brown
      textSecondary: '30 20% 40%',
      border: '30 40% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '800ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Vibrant theme inspired by Maharashtra culture',
      tags: ['vibrant', 'cultural', 'energetic'],
    },
  },

  kerala: {
    id: 'state-kerala',
    name: 'Kerala',
    type: 'state',
    colors: {
      primary: '142 71% 45%',      // Lush green
      secondary: '180 100% 35%',   // Backwater teal
      accent: '45 100% 51%',       // Golden
      background: '140 40% 96%',   // Light green
      surface: '0 0% 100%',
      text: '160 80% 15%',         // Dark green
      textSecondary: '160 20% 40%',
      border: '140 30% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '800ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Serene theme inspired by Kerala backwaters',
      tags: ['nature', 'peaceful', 'tropical'],
    },
  },

  rajasthan: {
    id: 'state-rajasthan',
    name: 'Rajasthan',
    type: 'state',
    colors: {
      primary: '0 72% 51%',        // Royal red
      secondary: '45 100% 51%',    // Desert gold
      accent: '280 60% 50%',       // Purple
      background: '30 50% 96%',    // Sand
      surface: '0 0% 100%',
      text: '0 60% 20%',           // Dark red
      textSecondary: '30 30% 40%',
      border: '30 40% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '800ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Royal theme inspired by Rajasthan heritage',
      tags: ['royal', 'desert', 'cultural'],
    },
  },
};

/**
 * Topic-based themes
 * Themes for specific topics and interests
 */
export const TOPIC_THEMES: Record<string, Theme> = {
  'harry-potter': {
    id: 'topic-harry-potter',
    name: 'Harry Potter',
    type: 'topic',
    colors: {
      primary: '0 100% 23%',       // Gryffindor red
      secondary: '45 100% 49%',    // Golden snitch
      accent: '0 0% 0%',           // Hogwarts black
      background: '30 40% 92%',    // Parchment
      surface: '40 50% 96%',       // Old paper
      text: '30 40% 15%',          // Ink brown
      textSecondary: '30 20% 40%',
      border: '30 30% 80%',
    },
    typography: {
      headingFont: 'Cinzel Decorative',
      bodyFont: 'Crimson Text',
    },
    animations: {
      duration: '800ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transition: 'magical-swirl',
    },
    metadata: {
      description: 'Magical newspaper theme inspired by Harry Potter',
      tags: ['magical', 'vintage', 'newspaper'],
    },
  },

  technology: {
    id: 'topic-technology',
    name: 'Technology',
    type: 'topic',
    colors: {
      primary: '200 100% 50%',     // Cyber blue
      secondary: '280 100% 50%',   // Neon purple
      accent: '340 100% 50%',      // Hot pink
      background: '220 40% 8%',    // Dark blue
      surface: '220 30% 12%',      // Darker blue
      text: '200 100% 90%',        // Light cyan
      textSecondary: '200 30% 60%',
      border: '220 30% 20%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '600ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Futuristic cyberpunk theme for tech news',
      tags: ['futuristic', 'cyberpunk', 'modern'],
    },
  },

  entertainment: {
    id: 'topic-entertainment',
    name: 'Entertainment',
    type: 'topic',
    colors: {
      primary: '340 82% 52%',      // Hollywood red
      secondary: '45 100% 51%',    // Gold
      accent: '280 60% 50%',       // Purple
      background: '0 0% 5%',       // Almost black
      surface: '0 0% 10%',         // Dark gray
      text: '45 100% 95%',         // Light gold
      textSecondary: '0 0% 70%',
      border: '0 0% 20%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '800ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Glamorous theme for entertainment news',
      tags: ['glamorous', 'spotlight', 'celebrity'],
    },
  },
};

/**
 * Sports-specific themes
 */
export const SPORTS_THEMES: Record<string, Theme> = {
  cricket: {
    id: 'sport-cricket',
    name: 'Cricket',
    type: 'sport',
    colors: {
      primary: '142 76% 36%',      // Cricket green
      secondary: '0 0% 100%',      // Cricket ball white
      accent: '0 84% 60%',         // Stumps red
      background: '140 30% 95%',   // Light green
      surface: '0 0% 100%',
      text: '140 80% 15%',         // Dark green
      textSecondary: '140 20% 40%',
      border: '140 30% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '600ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Cricket field inspired theme',
      tags: ['sports', 'cricket', 'energetic'],
    },
  },

  football: {
    id: 'sport-football',
    name: 'Football',
    type: 'sport',
    colors: {
      primary: '142 76% 36%',      // Field green
      secondary: '0 0% 100%',      // White
      accent: '45 100% 51%',       // Yellow card
      background: '140 30% 95%',
      surface: '0 0% 100%',
      text: '140 80% 15%',
      textSecondary: '140 20% 40%',
      border: '140 30% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '600ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    metadata: {
      description: 'Football stadium theme',
      tags: ['sports', 'football', 'dynamic'],
    },
  },
};

/**
 * Mood-based themes
 */
export const MOOD_THEMES: Record<string, Theme> = {
  happy: {
    id: 'mood-happy',
    name: 'Happy',
    type: 'mood',
    colors: {
      primary: '45 100% 51%',      // Bright yellow
      secondary: '340 82% 52%',    // Pink
      accent: '160 84% 39%',       // Green
      background: '50 100% 98%',   // Light yellow
      surface: '0 0% 100%',
      text: '45 80% 20%',          // Dark yellow
      textSecondary: '45 30% 40%',
      border: '45 40% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '500ms',
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bouncy
    },
    metadata: {
      description: 'Bright and cheerful theme',
      tags: ['happy', 'cheerful', 'positive'],
    },
  },

  calm: {
    id: 'mood-calm',
    name: 'Calm',
    type: 'mood',
    colors: {
      primary: '180 100% 35%',     // Teal
      secondary: '200 100% 40%',   // Light blue
      accent: '142 71% 45%',       // Green
      background: '180 40% 96%',   // Very light teal
      surface: '0 0% 100%',
      text: '180 80% 15%',         // Dark teal
      textSecondary: '180 20% 40%',
      border: '180 30% 85%',
    },
    typography: {
      headingFont: 'Poppins',
      bodyFont: 'Inter',
    },
    animations: {
      duration: '1000ms',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Smooth
    },
    metadata: {
      description: 'Peaceful and calming theme',
      tags: ['calm', 'peaceful', 'relaxing'],
    },
  },
};

/**
 * Default themes
 */
export const DEFAULT_LIGHT_THEME: Theme = {
  id: 'default-light',
  name: 'Light',
  type: 'default-light',
  colors: {
    primary: '59 130 246',       // Blue #3B82F6
    secondary: '147 51 234',     // Purple #9333EA
    accent: '59 130 246',        // Blue #3B82F6
    background: '248 250 252',   // Slate 50
    surface: '255 255 255',      // White
    text: '15 23 42',            // Slate 900
    textSecondary: '71 85 105',  // Slate 600
    border: '226 232 240',       // Slate 200
  },
  typography: {
    headingFont: 'Space Grotesk',
    bodyFont: 'Inter',
  },
  animations: {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const DEFAULT_DARK_THEME: Theme = {
  id: 'default-dark',
  name: 'Dark',
  type: 'default-dark',
  colors: {
    primary: '59 130 246',         // Blue #3B82F6
    secondary: '147 51 234',       // Purple #9333EA
    accent: '59 130 246',          // Blue #3B82F6
    background: '2 6 23',          // Slate 950 #020617
    surface: '15 23 42',           // Slate 900 #0F172A
    surfaceHover: '30 41 59',      // Slate 800 #1E293B
    text: '248 250 252',           // Slate 50 #F8FAFC
    textSecondary: '148 163 184',  // Slate 400 #94A3B8
    border: '30 41 59',            // Slate 800 #1E293B
  },
  typography: {
    headingFont: 'Space Grotesk',
    bodyFont: 'Inter',
  },
  animations: {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

/**
 * All themes combined
 */
export const ALL_THEMES: Record<string, Theme> = {
  ...STATE_THEMES,
  ...TOPIC_THEMES,
  ...SPORTS_THEMES,
  ...MOOD_THEMES,
  'default-light': DEFAULT_LIGHT_THEME,
  'default-dark': DEFAULT_DARK_THEME,
};
