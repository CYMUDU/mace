import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Cpu,
  MessageSquare,
  Shield,
  Zap,
  FileText,
  Activity,
  Settings,
  Smartphone,
  Network
} from 'lucide-react'
import { useAppStore } from '@store/appStore'

interface LeftSidebarProps {
  className?: string
}

// Added 'path' to each item so the Router knows where to go.
// Added the new 'Agent Command' button linked to '/agents'.
const navItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { id: 'agents', icon: Network, label: 'Agent Command', path: '/agents' },
  { id: 'ai', icon: Cpu, label: 'AI Engine', path: '/ai' },
  { id: 'voice', icon: MessageSquare, label: 'Voice Control', path: '/voice' },
  { id: 'security', icon: Shield, label: 'Security', path: '/security' },
  { id: 'neural', icon: Zap, label: 'Neural Network', path: '/neural' },
  { id: 'files', icon: FileText, label: 'Files', path: '/files' },
  { id: 'analytics', icon: Activity, label: 'Analytics', path: '/analytics' },
  { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
]

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ className = '' }) => {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen)

  if (!sidebarOpen) {
    return (
      <div className={`w-20 bg-[#0B111A] border-r border-[#12202D] ${className}`}>
        <div className="flex flex-col items-center justify-center h-20 border-b border-[#12202D]">
          <div className="w-10 h-10 rounded-lg bg-[#00E5FF] flex items-center justify-center text-[#04070D] font-bold text-lg shadow-[0_0_15px_rgba(0,229,255,0.4)]">
            M
          </div>
        </div>
        <nav className="flex flex-col items-center gap-4 p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `p-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)] border border-[#00E5FF]/30'
                      : 'text-gray-500 hover:text-[#00E5FF] hover:bg-[#00E5FF]/10'
                  }`
                }
                title={item.label}
              >
                <Icon size={20} />
              </NavLink>
            )
          })}
        </nav>
      </div>
    )
  }

  return (
    <div className={`w-60 bg-[#0B111A] border-r border-[#12202D] flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <div className="h-20 border-b border-[#12202D] flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00E5FF] flex items-center justify-center text-[#04070D] font-bold shadow-[0_0_15px_rgba(0,229,255,0.4)]">
            M
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#00E5FF] tracking-wider">MACE</h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">Adaptive Core</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2 custom-scroll">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.1)] border border-[#00E5FF]/30'
                    : 'text-gray-500 hover:text-[#00E5FF] hover:bg-[#00E5FF]/5 border border-transparent'
                }`
              }
            >
              <Icon size={18} />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#12202D] p-4">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF]/20 border border-[#00E5FF]/20 transition-all duration-300">
          <Smartphone size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">Mobile Sync</span>
        </button>
      </div>
    </div>
  )
}