/**
 * Theme Showcase Component
 * Displays all available themes with preview
 */

import { motion } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useAllThemes, useCurrentTheme } from '../hooks/useTheme';
import { themeManager } from '../services/ThemeManager';
import type { Theme } from '../types/theme.types';

export const ThemeShowcase = () => {
  const allThemes = useAllThemes();
  const currentTheme = useCurrentTheme();

  const handleThemeSelect = async (themeId: string) => {
    const theme = themeManager.getThemeById(themeId);
    if (theme) {
      await themeManager.applyThemeWithTransition(theme);
    }
  };

  // Group themes by type
  const stateThemes = Object.values(allThemes).filter(t => t.type === 'state');
  const topicThemes = Object.values(allThemes).filter(t => t.type === 'topic');
  const sportsThemes = Object.values(allThemes).filter(t => t.type === 'sport');
  const moodThemes = Object.values(allThemes).filter(t => t.type === 'mood');

  return (
    <div className="theme-showcase p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Palette className="w-8 h-8" />
          Theme Gallery
        </h2>
        <p className="text-text-secondary">
          Choose a theme or let AI select one based on your content
        </p>
      </div>

      {/* State Themes */}
      <ThemeSection
        title="🗺️ State Themes"
        description="Themes inspired by Indian states"
        themes={stateThemes}
        currentThemeId={currentTheme.id}
        onSelect={handleThemeSelect}
      />

      {/* Topic Themes */}
      <ThemeSection
        title="📰 Topic Themes"
        description="Themes for specific topics and interests"
        themes={topicThemes}
        currentThemeId={currentTheme.id}
        onSelect={handleThemeSelect}
      />

      {/* Sports Themes */}
      <ThemeSection
        title="⚽ Sports Themes"
        description="Dynamic themes for sports news"
        themes={sportsThemes}
        currentThemeId={currentTheme.id}
        onSelect={handleThemeSelect}
      />

      {/* Mood Themes */}
      <ThemeSection
        title="🎭 Mood Themes"
        description="Themes that match your emotional state"
        themes={moodThemes}
        currentThemeId={currentTheme.id}
        onSelect={handleThemeSelect}
      />
    </div>
  );
};

/**
 * Theme Section Component
 */
const ThemeSection = ({
  title,
  description,
  themes,
  currentThemeId,
  onSelect,
}: {
  title: string;
  description: string;
  themes: Theme[];
  currentThemeId: string;
  onSelect: (id: string) => void;
}) => {
  if (themes.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary mb-6">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <ThemeCard
            key={theme.id}
            theme={theme}
            isActive={theme.id === currentThemeId}
            onSelect={() => onSelect(theme.id)}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Theme Card Component
 */
const ThemeCard = ({
  theme,
  isActive,
  onSelect,
}: {
  theme: Theme;
  isActive: boolean;
  onSelect: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`
        relative p-4 rounded-xl cursor-pointer transition-all
        ${isActive ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}
      `}
      style={{
        background: `hsl(${theme.colors.background})`,
        border: `2px solid hsl(${theme.colors.border})`,
      }}
    >
      {/* Active Indicator */}
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: `hsl(${theme.colors.primary})` }}
        >
          <Check className="w-4 h-4 text-white" />
        </motion.div>
      )}

      {/* Theme Name */}
      <h4
        className="text-lg font-bold mb-2"
        style={{ color: `hsl(${theme.colors.text})` }}
      >
        {theme.name}
      </h4>

      {/* Theme Description */}
      {theme.metadata?.description && (
        <p
          className="text-sm mb-4"
          style={{ color: `hsl(${theme.colors.textSecondary})` }}
        >
          {theme.metadata.description}
        </p>
      )}

      {/* Color Palette Preview */}
      <div className="flex gap-2 mb-3">
        <div
          className="w-8 h-8 rounded-full"
          style={{ background: `hsl(${theme.colors.primary})` }}
          title="Primary"
        />
        <div
          className="w-8 h-8 rounded-full"
          style={{ background: `hsl(${theme.colors.secondary})` }}
          title="Secondary"
        />
        <div
          className="w-8 h-8 rounded-full"
          style={{ background: `hsl(${theme.colors.accent})` }}
          title="Accent"
        />
      </div>

      {/* Tags */}
      {theme.metadata?.tags && (
        <div className="flex flex-wrap gap-2">
          {theme.metadata.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-xs font-medium"
              style={{
                background: `hsla(${theme.colors.primary}, 0.1)`,
                color: `hsl(${theme.colors.primary})`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};
