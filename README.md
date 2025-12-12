# Radius - News in your circle. Vibe in your theme. 🚀

> AI-powered news application with contextual dynamic theming and Gen-Z amazing design

## 🌟 Features

### ✨ Implemented (Phase 1)
- ✅ **Monorepo Setup** - pnpm workspaces with feature-based structure
- ✅ **Gen-Z Amazing Design** - Modern, vibrant UI with smooth animations
- ✅ **Dark/Light Mode Toggle** - Smooth theme transitions
- ✅ **Responsive Layout** - Mobile-first design
- ✅ **Glassmorphism Effects** - Modern frosted glass UI elements
- ✅ **Animated Gradients** - Dynamic background animations
- ✅ **Demo News Cards** - Preview of contextual theming

### 🚧 Coming Soon
- 🎭 **Contextual Dynamic Theming** - Themes change based on news content
  - State-based themes (Uttarakhand, Maharashtra, etc.)
  - Topic-based themes (Harry Potter, Sports, etc.)
  - Mood-based themes
- 📍 **Location-Based Range News** - Find news within 5-200km radius
- 😊 **Mood AI** - Personalized news based on your emotional state
- 📚 **Current Affairs Section** - UPSC/SSC exam preparation
- 👤 **Profile Section** - Reading history and AI insights
- 🤖 **AI Assistant** - Chat with AI about news

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library
- **TanStack Query** - Data fetching (coming soon)
- **Zustand** - State management (coming soon)

### Backend (Coming Soon)
- **Node.js** - Runtime
- **Express** - Web framework
- **AI Integration** - Gemini/OpenAI
- **News API** - News data source

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

```bash
# Navigate to project
cd radius

# Install dependencies
pnpm install

# Start frontend dev server
cd packages/frontend
pnpm dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
radius/
├── packages/
│   ├── frontend/              # React application
│   │   ├── src/
│   │   │   ├── features/      # Feature modules (coming soon)
│   │   │   ├── shared/        # Shared components & utilities
│   │   │   ├── core/          # Core app setup
│   │   │   └── assets/        # Static assets
│   │   ├── tailwind.config.js # Tailwind configuration
│   │   └── package.json
│   │
│   ├── backend/               # Node.js API (coming soon)
│   └── shared/                # Shared types (coming soon)
│
├── pnpm-workspace.yaml
└── package.json
```

## 🎨 Design Philosophy

### Gen-Z Amazing
- **Bold & Vibrant** - Eye-catching colors and gradients
- **Smooth Animations** - Everything feels alive
- **Glassmorphism** - Modern frosted glass effects
- **Micro-interactions** - Delightful hover and click effects
- **Dynamic Layouts** - Content that adapts and flows

### Contextual Theming
Themes automatically transform based on what you're reading:
- **Uttarakhand News** → Mountain theme with greens and blues
- **Harry Potter News** → Magical newspaper with vintage aesthetics
- **Sports News** → Energetic theme with team colors

## 📝 Development Rules

- ❌ **No inline CSS** - All styles in Tailwind or CSS modules
- ✅ **Proper documentation** - Every function is commented
- ✅ **Barrel exports** - Centralized exports from feature folders
- ✅ **TypeScript strict mode** - No `any` types
- ✅ **Performance first** - Lazy loading, code splitting, optimization

## 🎯 Roadmap

### Phase 1: Foundation ✅ (Completed)
- Monorepo setup
- Core UI components
- Dark/light mode
- Gen-Z design system

### Phase 2: Contextual Theming (Next)
- State-based themes
- Topic-based themes
- Smooth theme transitions
- Theme persistence

### Phase 3: Location & Mood
- Geolocation integration
- Range selector
- Mood AI system
- Mood-based curation

### Phase 4: Current Affairs
- UPSC/SSC section
- Filtering system
- Flashcard mode
- PDF generation

### Phase 5: Backend & AI
- Node.js API
- AI integration
- News data fetching
- Database setup

## 📖 Documentation

- [Implementation Plan](../../brain/890af272-fa2f-4008-91c1-95b04c2e700d/radius-news-plan.md)
- [Enhanced Features](../../brain/890af272-fa2f-4008-91c1-95b04c2e700d/radius-enhanced-features.md)
- [Development Rules](../../brain/890af272-fa2f-4008-91c1-95b04c2e700d/radius-rules.md)

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome!

## 📄 License

MIT License - feel free to use this project as inspiration!

---

**Made with ❤️ for Gen-Z news enthusiasts**

*News in your circle. Vibe in your theme.*
