/**
 * News Card Component with Contextual Theming
 * Professional design inspired by modern news platforms
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, TrendingUp, Bookmark, Share2, Eye } from 'lucide-react';
import type { NewsArticle } from '../types/news.types';
import { useContextualTheme } from '../../theme';

interface NewsCardProps {
  article: NewsArticle;
  delay?: number;
  onClick?: () => void;
}

export const NewsCard = ({ article, delay = 0, onClick }: NewsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Apply contextual theme based on article
  useContextualTheme(article.themeContext || {});

  /**
   * Format time ago
   */
  const getTimeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative bg-surface rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
    >
      {/* Card Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary to-secondary">
        {article.imageUrl ? (
          <motion.img
            src={article.imageUrl}
            alt={article.title}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
          />
        ) : (
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full flex items-center justify-center text-7xl"
          >
            {getEmojiForCategory(article.category)}
          </motion.div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide">
            {article.category}
          </span>
          
          {article.aiScore && article.aiScore > 80 && (
            <div className="px-3 py-1.5 bg-accent backdrop-blur-sm rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              AI Pick
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-colors ${
              isBookmarked 
                ? 'bg-primary text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2 leading-relaxed">
          {article.description}
        </p>

        {/* AI Reason */}
        {article.aiReason && (
          <div className="mb-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
            <p className="text-xs text-accent font-medium flex items-start gap-2">
              <span className="text-base">🤖</span>
              <span>{article.aiReason}</span>
            </p>
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium hover:bg-primary/10 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {getTimeAgo(article.publishedAt)}
            </span>
            {article.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {article.location.distance ? `${article.location.distance}km` : 'Near you'}
              </span>
            )}
          </div>

          {/* Source */}
          <span className="text-xs font-semibold text-text-secondary">
            {article.source}
          </span>
        </div>

        {/* Read More */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          className="overflow-hidden"
        >
          <button className="mt-4 w-full py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            Read Full Story
            <Eye className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.article>
  );
};

/**
 * Get emoji for news category
 */
const getEmojiForCategory = (category: string): string => {
  const emojiMap: Record<string, string> = {
    national: '🇮🇳',
    international: '🌍',
    politics: '🏛️',
    business: '💼',
    technology: '💻',
    sports: '⚽',
    entertainment: '🎬',
    science: '🔬',
    health: '🏥',
    education: '📚',
    environment: '🌱',
    regional: '🗺️',
    'current-affairs': '📰',
  };

  return emojiMap[category] || '📰';
};
