# M.A.C.E. Frontend Project Structure

## Directory Organization

```
MACE/
└── frontend/
    ├── .gitignore                          # Git ignore rules
    ├── .env.example                        # Environment template
    ├── .prettierrc                         # Code formatting config
    ├── index.html                          # Entry HTML
    ├── package.json                        # Dependencies & scripts
    ├── tsconfig.json                       # TypeScript base config
    ├── tsconfig.app.json                   # TypeScript app config
    ├── tsconfig.node.json                  # TypeScript node config
    ├── vite.config.ts                      # Vite configuration
    ├── tailwind.config.ts                  # TailwindCSS configuration
    ├── postcss.config.js                   # PostCSS configuration
    ├── README.md                           # Project documentation
    ├── COMPONENT_ARCHITECTURE.md           # Component hierarchy
    ├── public/                             # Static assets
    │   └── [images, favicons, etc.]
    │
    └── src/
        ├── main.tsx                        # React entry point
        ├── App.tsx                         # Root component with routing
        ├── vite-env.d.ts                   # Vite environment types
        │
        ├── assets/                         # Static resources
        │   ├── icons/                      # Icon assets
        │   ├── images/                     # Image assets
        │   ├── logos/                      # Logo assets
        │   ├── sounds/                     # Audio assets
        │   └── animations/                 # Animation data
        │
        ├── components/                     # React components
        │   ├── layout/
        │   │   ├── LeftSidebar.tsx        # Side navigation
        │   │   ├── TopSystemBar.tsx       # Top status bar
        │   │   └── BottomDock.tsx         # Bottom dock
        │   │
        │   ├── dashboard/
        │   │   └── SystemControlPanel.tsx # Main control panel
        │   │
        │   ├── voice/
        │   │   └── VoiceCore.tsx          # Central voice interface
        │   │
        │   ├── terminal/
        │   │   └── LiveTranscriptTerminal.tsx # Message transcript
        │   │
        │   ├── agents/
        │   │   └── SubAgentsNetwork.tsx   # Agent management
        │   │
        │   ├── medical/
        │   │   ├── MedicalResearchHub.tsx # Medical research tools
        │   │   └── DeconstructData.tsx    # Data analysis
        │   │
        │   ├── notes/
        │   │   └── SmartNotes.tsx         # Note-taking system
        │   │
        │   ├── desktop/
        │   │   └── DesktopCommander.tsx   # Desktop automation
        │   │
        │   ├── charts/
        │   │   └── CyberCharts.tsx        # Chart components
        │   │
        │   ├── security/                   # Security components
        │   ├── ai/                         # AI components
        │   │
        │   └── shared/                     # Shared components
        │       ├── ErrorBoundary.tsx      # Error handling
        │       └── Common.tsx             # Common UI utilities
        │
        ├── pages/
        │   └── Dashboard.tsx               # Main dashboard page
        │
        ├── routes/
        │   └── index.tsx                   # Router configuration
        │
        ├── store/
        │   └── appStore.ts                 # Zustand state management
        │
        ├── hooks/
        │   ├── useAudioWaveform.ts         # Audio visualization hook
        │   ├── useAnimationFrame.ts        # Animation frame hook
        │   ├── useSystemMetrics.ts         # System metrics hook
        │   └── useStorage.ts               # Local storage hooks
        │
        ├── services/
        │   ├── api.ts                      # API service
        │   └── voice.ts                    # Voice service
        │
        ├── utils/
        │   └── helpers.ts                  # Utility functions
        │
        ├── constants/
        │   ├── api.ts                      # API constants
        │   └── config.ts                   # Configuration constants
        │
        ├── types/
        │   ├── index.ts                    # Main types
        │   ├── forms.ts                    # Form types
        │   └── react-compat.ts             # React compatibility types
        │
        ├── theme/
        │   └── index.ts                    # Theme configuration
        │
        ├── animations/
        │   └── config.ts                   # Animation configurations
        │
        └── styles/
            └── index.css                   # Global styles
```

## File Statistics

- **Total Configuration Files**: 8
- **Total Component Files**: 12
- **Total Utility Files**: 8
- **Total Store Files**: 1
- **Total Hook Files**: 4
- **Total Service Files**: 2
- **Total Type Files**: 3
- **Total Asset Directories**: 5

## Total Files: 47+

## Key Design Principles

1. **Modular Architecture**: Each component is self-contained and reusable
2. **Type Safety**: Full TypeScript support with strict mode enabled
3. **Performance**: Code splitting, lazy loading, and optimized animations
4. **State Management**: Centralized Zustand store with subscriptions
5. **Styling**: TailwindCSS with custom theme and animations
6. **Documentation**: Component architecture and configuration files
7. **Error Handling**: ErrorBoundary wrapper for graceful error recovery
8. **Accessibility**: Semantic HTML and ARIA labels
9. **Code Quality**: Prettier formatting, consistent naming conventions
10. **Scalability**: Folder structure supports easy feature expansion

## Development Workflow

1. Components organized by feature domain
2. Shared utilities in separate folders
3. Type definitions colocated with features
4. Services for external integrations
5. Hooks for reusable logic
6. Centralized store for global state
7. Theme system for consistent styling
8. Animation configurations for consistent effects

## Building & Deployment

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Browser Targets

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern ES2020 JavaScript
