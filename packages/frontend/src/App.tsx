import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Search, TrendingUp, Globe, Trophy, Briefcase, Film, Zap, Smile, Angry, Coffee, Flame
} from 'lucide-react';
import { DEMO_NEWS } from './features/news';
import './App.css';

/**
 * Radius - News Discovery Platform
 * NewsVibe-inspired design with sidebar navigation
 * ALWAYS DARK MODE
 */
import { themeManager } from './features/theme/services/ThemeManager';
import { DEFAULT_DARK_THEME } from './features/theme/constants/themes';

function App() {
  useEffect(() => {
    // Force blue theme on mount
    themeManager.setMode('dark');
    themeManager.applyThemeWithTransition(DEFAULT_DARK_THEME);
  }, []);
  
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [selectedMood, setSelectedMood] = useState('all');

  // Featured article (hero)
  // const heroArticle = DEMO_NEWS[0];
  
  // Latest news for right sidebar
  const latestNews = DEMO_NEWS.slice(0, 4);
  
  // Hot stories
  const hotStories = DEMO_NEWS.slice(0, 2);
  
  // Top story
  const topStory = DEMO_NEWS[0];

  const categories = [
    { id: 'trending', label: 'Trending', icon: TrendingUp, subtitle: 'What\'s hot' },
    { id: 'international', label: 'International', icon: Globe, subtitle: 'World news' },
    { id: 'sports', label: 'Sports', icon: Trophy, subtitle: 'Live scores' },
    { id: 'cricket', label: 'Cricket', icon: Trophy, subtitle: 'Latest matches' },
    { id: 'politics', label: 'Politics', icon: Briefcase, subtitle: 'Government' },
    { id: 'entertainment', label: 'Entertainment', icon: Film, subtitle: 'Showbiz' },
  ];

  const moods = [
    { id: 'all', label: 'All', icon: Zap },
    { id: 'happy', label: 'Happy', icon: Smile },
    { id: 'angry', label: 'Angry', icon: Angry },
    { id: 'calm', label: 'Calm', icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-background text-text flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-surface border-r border-border flex-shrink-0 overflow-y-auto custom-scrollbar">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img 
              src="/logo.svg" 
              alt="Radius Logo" 
              className="h-6 object-contain"
            />
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="flex items-center bg-background border border-border rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-text-secondary mr-2" />
              <input 
                type="text" 
                placeholder="Search news, states, topics..." 
                className="bg-transparent border-none outline-none text-sm text-text placeholder:text-text-secondary w-full"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                      : 'hover:bg-background text-text-secondary hover:text-text'
                  }`}
                >
                  <cat.icon className="w-5 h-5" />
                  <div className="flex-1 text-left">
                    <div className="text-sm font-semibold">{cat.label}</div>
                    <div className="text-xs opacity-70">{cat.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* My Mood AI */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">My Mood AI</h3>
            <div className="space-y-2">
              <div className="text-xs text-text-secondary mb-3">News tailored to your vibe</div>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all ${
                      selectedMood === mood.id
                        ? 'bg-primary text-white'
                        : 'bg-background text-text-secondary hover:bg-surface-hover'
                    }`}
                  >
                    <mood.icon className="w-3 h-3" />
                    {mood.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Nearby News */}
          <div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Nearby News</h3>
            <div className="text-xs text-text-secondary">
              <div className="mb-2">📍 Uttarakhand</div>
              <div className="text-xs opacity-70">Within 50 km radius</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl mx-auto p-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-96 rounded-3xl overflow-hidden mb-8 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  Technology
                </span>
                <span className="flex items-center gap-1 text-white/90 text-sm">
                  🚀 1 hour ago
                </span>
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                Tech Disruption: AI Breakthrough Announced
              </h1>
              
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                  Technology
                </span>
              </div>
            </div>
          </motion.div>

          {/* What's Hot Right Now */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">What's Hot Right Now</h2>
                <p className="text-sm text-text-secondary">Stay updated with the latest stories</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotStories.map((article, index) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-600 to-purple-600">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      index === 0 ? 'bg-primary' : 'bg-pink-500'
                    }`}>
                      {index === 0 ? 'UTTARAKHAND' : 'CRICKET'}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {article.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-surface border-l border-border flex-shrink-0 overflow-y-auto custom-scrollbar">
        <div className="p-6">
          {/* Header Icons */}
          <div className="flex items-center justify-end gap-3 mb-8">
            <button className="p-2 rounded-lg hover:bg-background transition-colors">
              <div className="w-5 h-5 border-2 border-text-secondary rounded" />
            </button>
            <button className="p-2 rounded-lg hover:bg-background transition-colors">
              <Search className="w-5 h-5 text-text-secondary" />
            </button>
            <button className="p-2 rounded-lg hover:bg-background transition-colors">
              <User className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Latest News */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Latest News</h3>
              <button className="text-xs text-primary hover:underline">View All</button>
            </div>

            <div className="space-y-4">
              {latestNews.map((article) => (
                <div key={article.id} className="flex gap-3 cursor-pointer group">
                  <img 
                    src={article.imageUrl || 'https://via.placeholder.com/80'} 
                    alt={article.title}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-primary font-semibold uppercase mb-1">
                      {article.category} • 2 hours ago
                    </div>
                    <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Story */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Top Story</h3>
            </div>

            <div className="relative rounded-2xl overflow-hidden cursor-pointer group">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-indigo-900">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />
              </div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary rounded-full text-xs font-bold text-white">
                  SPORTS
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-xs text-white/80 mb-2">2 hours ago</div>
                <h4 className="text-sm font-bold text-white line-clamp-2">
                  {topStory.title}
                </h4>
              </div>
            </div>

            <div className="mt-4 text-xs text-text-secondary">
              📍 50 km away
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
