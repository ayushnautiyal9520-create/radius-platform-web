/**
 * News Type Definitions
 */

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content?: string;
  imageUrl?: string;
  source: string;
  author?: string;
  publishedAt: Date;
  category: NewsCategory;
  tags: string[];
  
  // Location data (for range news)
  location?: {
    latitude: number;
    longitude: number;
    address: string;
    distance?: number; // in km
  };
  
  // AI metadata
  aiScore?: number;        // AI relevance score (0-100)
  aiReason?: string;       // Why AI selected this
  sentiment?: 'positive' | 'negative' | 'neutral';
  emotions?: string[];
  
  // Theme context
  themeContext?: {
    state?: string;
    topic?: string;
    sport?: string;
  };
}

export const NewsCategory = {
  NATIONAL: 'national',
  INTERNATIONAL: 'international',
  POLITICS: 'politics',
  BUSINESS: 'business',
  TECHNOLOGY: 'technology',
  SPORTS: 'sports',
  ENTERTAINMENT: 'entertainment',
  SCIENCE: 'science',
  HEALTH: 'health',
  EDUCATION: 'education',
  ENVIRONMENT: 'environment',
  REGIONAL: 'regional',
  CURRENT_AFFAIRS: 'current-affairs',
} as const;

export type NewsCategory = typeof NewsCategory[keyof typeof NewsCategory];

export interface NewsFilters {
  category?: NewsCategory;
  search?: string;
  dateFrom?: Date;
  dateTo?: Date;
  sources?: string[];
  tags?: string[];
  location?: {
    latitude: number;
    longitude: number;
    radius: number; // in km
  };
}
