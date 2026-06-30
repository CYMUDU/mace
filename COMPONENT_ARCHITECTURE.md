# Component Hierarchy & Architecture

## Component Structure

### Layout Components (Base Layer)

```
LeftSidebar
  ├── Navigation Items
  ├── Logo Area
  └── Footer Controls

TopSystemBar
  ├── Voice Link Status
  ├── Waveform Visualizer
  ├── System Metrics (CPU, RAM, Network, Battery)
  ├── Clock & Date
  └── Power Button

BottomDock
  ├── Tool Icons
  └── System Status Indicator
```

### Dashboard Components (Content Layer)

```
Dashboard (Main Container)
  ├── TopSystemBar
  ├── LeftSidebar
  ├── Main Content Area
  │   ├── VoiceCore (Center)
  │   ├── LiveTranscriptTerminal (Right)
  │   └── SystemControlPanel (Far Right)
  ├── Bottom Section
  │   ├── SubAgentsNetwork
  │   ├── MedicalResearchHub
  │   ├── DeconstructData
  │   ├── SmartNotes
  │   └── DesktopCommander
  └── BottomDock
```

### Feature Components (Feature Layer)

#### Voice Control

```
VoiceCore
  ├── Status Banner
  ├── Central Globe Container
  │   ├── Outer Rings (Animated)
  │   ├── Central Sphere
  │   ├── Pulsing Microphone
  │   └── Orbiting Nodes
  ├── Waveform Visualizer
  ├── Status Text
  └── Floating Particles
```

#### Terminal & Messages

```
LiveTranscriptTerminal
  ├── Header (Status Indicator)
  ├── Messages Area
  │   ├── User Messages
  │   ├── MACE Responses
  │   └── Typing Indicator
  └── Input Form
      ├── Text Input
      └── Send Button
```

#### System Control

```
SystemControlPanel
  ├── BlackBox Card
  │   ├── Task Count Badge
  │   ├── Task List
  │   └── Productivity Metrics
  ├── SecurityAlerts Card
  │   ├── Alert Count
  │   ├── Alert List
  │   └── Severity Indicators
  ├── AI Card
  │   ├── Training Progress
  │   ├── Model List
  │   └── Efficiency Metrics
  └── ReadEvolve Card
      ├── Tab Navigation
      └── Research Feed
```

#### Agents Network

```
SubAgentsNetwork
  ├── Agent Grid (3x2)
  │   ├── Agent Cards
  │   │   ├── Agent Icon
  │   │   ├── Status Indicator
  │   │   └── Progress Bar
  │   └── Network Indicators
```

#### Medical Research

```
MedicalResearchHub
  ├── Upload Section
  ├── Analysis Options Grid
  └── Sub Agents List

DeconstructData
  ├── Upload Area
  ├── Analysis Results
  └── Status Indicator
```

#### Smart Notes

```
SmartNotes
  ├── Tab Navigation (4 tabs)
  ├── Input Source
  ├── Features Grid (4 features)
  └── Process Button
```

#### Desktop Commander

```
DesktopCommander
  ├── Command Grid (6 commands)
  ├── Platform Icons
  └── Launch Button
```

## Component Communication

### State Flow

```
App (ErrorBoundary wrapper)
  └── Dashboard (Page)
      ├── [Zustand Store: useAppStore]
      │   ├── systemStatus
      │   ├── isListening
      │   ├── messages[]
      │   └── sidebarOpen
      │
      └── [Components using store]
          ├── TopSystemBar (reads: systemStatus)
          ├── LiveTranscriptTerminal (reads/writes: messages)
          ├── LeftSidebar (reads/writes: sidebarOpen)
          └── VoiceCore (reads: isListening)
```

### Props Flow

```
Dashboard
  ├── LeftSidebar (className)
  ├── TopSystemBar (className)
  ├── VoiceCore (className)
  ├── LiveTranscriptTerminal (className)
  ├── SystemControlPanel (className)
  ├── SubAgentsNetwork (className)
  ├── MedicalResearchHub (className)
  ├── DeconstructData (className)
  ├── SmartNotes (className)
  ├── DesktopCommander (className)
  └── BottomDock (className)
```

## Performance Optimizations

- Memoization of expensive components (motion components)
- Lazy animation triggers with Framer Motion
- TailwindCSS tree-shaking for minimal CSS
- Code splitting via Vite
- GPU-accelerated animations via transform and opacity
- Efficient re-render via Zustand subscriptions

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast cyber theme
- Screen reader friendly

## Responsiveness

- Mobile-first approach (not fully implemented - focus on desktop for this design)
- Flexible grid layouts
- Adaptive component sizes
- Breakpoint system via TailwindCSS

## Animation System

### Global Animations

- Pulse glow (2s repeat)
- Spin slow (20s repeat)
- Spin reverse (30s repeat)
- Float (3s repeat)
- Shimmer (2s repeat)
- Radar sweep (4s repeat)

### Component-Specific Animations

- Globe rotation (30s linear)
- Neural pulse (2s easeInOut)
- Voice waveform (0.6s easeInOut)
- Card hover glow (0.3s easeInOut)
- Status pulse (2s easeInOut)
- Security alert blink (0.5s easeInOut)
