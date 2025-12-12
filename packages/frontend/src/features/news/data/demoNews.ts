/**
 * Demo News Data
 * Sample news articles for demonstration
 */

import type { NewsArticle } from '../types/news.types';
import { NewsCategory } from '../types/news.types';

export const DEMO_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Uttarakhand Tourism Sees Record Growth This Season',
    description: 'The mountain state reports a 45% increase in tourist arrivals, with eco-tourism initiatives attracting nature enthusiasts from across the country.',
    content: 'Full article content here...',
    source: 'The Mountain Times',
    author: 'Priya Sharma',
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    category: NewsCategory.REGIONAL,
    tags: ['tourism', 'uttarakhand', 'eco-tourism'],
    themeContext: {
      state: 'uttarakhand',
    },
    aiScore: 92,
    aiReason: 'High relevance to regional development and tourism trends',
    sentiment: 'positive',
    emotions: ['joy', 'inspiration'],
  },
  
  {
    id: '2',
    title: 'Harry Potter Cast Reunites for 20th Anniversary Special',
    description: 'Daniel Radcliffe, Emma Watson, and Rupert Grint return to Hogwarts for an emotional reunion celebrating two decades of magic.',
    content: 'Full article content here...',
    source: 'Entertainment Weekly',
    author: 'Sarah Johnson',
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    category: NewsCategory.ENTERTAINMENT,
    tags: ['harry-potter', 'movies', 'reunion'],
    themeContext: {
      topic: 'harry-potter',
    },
    aiScore: 88,
    aiReason: 'Trending topic with high fan engagement',
    sentiment: 'positive',
    emotions: ['nostalgia', 'joy'],
  },
  
  {
    id: '3',
    title: 'India Clinches Thrilling Victory in Cricket World Cup Semi-Final',
    description: 'Team India defeats Australia by 6 wickets in a nail-biting finish, securing their spot in the World Cup final.',
    content: 'Full article content here...',
    source: 'Sports Today',
    author: 'Rahul Verma',
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
    category: NewsCategory.SPORTS,
    tags: ['cricket', 'world-cup', 'india'],
    themeContext: {
      sport: 'cricket',
    },
    aiScore: 95,
    aiReason: 'Breaking sports news with massive public interest',
    sentiment: 'positive',
    emotions: ['excitement', 'pride'],
  },
  
  {
    id: '4',
    title: 'Maharashtra Launches New Tech Hub in Pune',
    description: 'State government announces ₹5000 crore investment in technology infrastructure, expected to create 50,000 jobs.',
    content: 'Full article content here...',
    source: 'Business Standard',
    author: 'Amit Patel',
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    category: NewsCategory.BUSINESS,
    tags: ['maharashtra', 'technology', 'jobs'],
    themeContext: {
      state: 'maharashtra',
    },
    aiScore: 85,
    aiReason: 'Significant economic development news',
    sentiment: 'positive',
    emotions: ['hope', 'inspiration'],
  },
  
  {
    id: '5',
    title: 'AI Breakthrough: New Model Achieves Human-Level Reasoning',
    description: 'Researchers unveil advanced AI system capable of complex problem-solving and logical reasoning, marking a major milestone in artificial intelligence.',
    content: 'Full article content here...',
    source: 'Tech Crunch',
    author: 'Dr. Lisa Chen',
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    category: NewsCategory.TECHNOLOGY,
    tags: ['ai', 'technology', 'innovation'],
    themeContext: {
      topic: 'technology',
    },
    aiScore: 90,
    aiReason: 'Cutting-edge technology news with global impact',
    sentiment: 'positive',
    emotions: ['curiosity', 'excitement'],
  },
  
  {
    id: '6',
    title: 'Kerala Achieves 100% Literacy Rate in Rural Areas',
    description: 'State government\'s education initiative successfully brings literacy to all rural communities, setting a benchmark for the nation.',
    content: 'Full article content here...',
    source: 'Education Times',
    author: 'Meera Nair',
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    category: NewsCategory.EDUCATION,
    tags: ['kerala', 'education', 'literacy'],
    themeContext: {
      state: 'kerala',
    },
    aiScore: 87,
    aiReason: 'Inspiring educational achievement with social impact',
    sentiment: 'positive',
    emotions: ['pride', 'inspiration'],
  },
];
