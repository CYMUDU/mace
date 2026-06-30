# M.A.C.E. OS - Frontend Dashboard

Multi-Platform Adaptive Control Engine Dashboard - A production-grade React frontend for the M.A.C.E. intelligence system.

## Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icons
- **Zustand** - State Management
- **React Router** - Routing
- **Recharts** - Charts & Visualization
- **React Hook Form** - Form Management

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Icons, images, logos, sounds, animations
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Sidebar, TopBar, Dock)
│   │   ├── dashboard/    # Dashboard components
│   │   ├── voice/        # Voice control components
│   │   ├── terminal/     # Terminal & transcript
│   │   ├── agents/       # Sub-agents network
│   │   ├── medical/      # Medical research modules
│   │   ├── notes/        # Smart notes
│   │   ├── security/     # Security components
│   │   ├── ai/           # AI-related components
│   │   ├── desktop/      # Desktop commander
│   │   ├── charts/       # Chart components
│   │   └── shared/       # Shared components
│   ├── pages/            # Page components
│   ├── routes/           # Router configuration
│   ├── store/            # Zustand stores
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API & external services
│   ├── utils/            # Utility functions
│   ├── constants/        # Constants & enums
│   ├── types/            # TypeScript types
│   ├── theme/            # Theme configuration
│   ├── animations/       # Animation configurations
│   └── styles/           # Global styles
├── index.html            # Entry HTML
├── package.json          # Dependencies
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── postcss.config.js     # PostCSS configuration
```

## Installation

```bash
cd MACE/frontend
npm install
```

## Development

```bash
npm run dev
```

Starts development server at `http://localhost:5173`

## Build

```bash
npm run build
```

Produces optimized production build in `dist/`

## Preview

```bash
npm run preview
```

Previews production build locally.

## Type Checking

```bash
npm run type-check
```

## Features

### Core Components

- **LeftSidebar** - Navigation and system controls
- **TopSystemBar** - System metrics and time
- **VoiceCore** - Central voice control interface with animated globe
- **LiveTranscriptTerminal** - Real-time message transcript
- **SystemControlPanel** - Control cards for system status
- **SubAgentsNetwork** - Agent management interface
- **MedicalResearchHub** - Medical research tools
- **SmartNotes** - Intelligent note-taking system
- **DesktopCommander** - Desktop automation controls
- **BottomDock** - Quick access dock

### Theme System

Cyber tactical intelligence interface with color scheme:

- Primary: `#00E5FF`
- Secondary: `#00A3FF`
- Danger: `#FF3D3D`
- Success: `#00FF88`
- Warning: `#FFB800`
- Background: `#04070D`

### Animations

- Globe rotation (30s cycle)
- Neural pulse effects
- Voice waveform visualization
- Radar sweep animations
- Particle drift effects
- Terminal typing effect
- Card hover glow
- Status pulse indicators
- Agent activity animations
- Security alert blink

### State Management

Zustand stores for:

- Application state
- System status
- Voice control state
- Messages
- UI state

## Environment Variables

Create `.env.local`:

```env
VITE_APP_API_URL=http://localhost:3000/api
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

- Code splitting enabled
- Lazy loading for routes
- Optimized animations with GPU acceleration
- TailwindCSS purging for minimal bundle

## License

Proprietary - M.A.C.E. OS
