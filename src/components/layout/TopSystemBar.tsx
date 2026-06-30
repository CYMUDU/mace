import React, { useEffect, useState } from 'react'
import { Wifi, Cpu, HardDrive, Zap, Clock, Power } from 'lucide-react'
import { useAppStore } from '@store/appStore'
import { useSystemMetrics } from '@hooks/useSystemMetrics'

interface TopSystemBarProps {
  className?: string
}

export const TopSystemBar: React.FC<TopSystemBarProps> = ({ className = '' }) => {
  const systemStatus = useAppStore((state) => state.systemStatus)
  const { generateRandomMetrics } = useSystemMetrics()
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
      setDate(now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`h-16 bg-cyber-panels border-b border-cyber-borders flex items-center justify-between px-6 ${className}`}
    >
      {/* Left Section - Voice Link */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyber-success animate-pulse-glow"></div>
          <span className="text-sm font-medium text-cyber-success">VOICE-LINK: ACTIVE</span>
        </div>
      </div>

      {/* Center Section - Waveform */}
      <div className="flex items-center gap-3">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-cyber rounded-full"
            style={{
              height: `${4 + Math.sin(i * 0.5) * 8}px`,
              animation: `pulse 0.6s ease-in-out ${i * 0.1}s infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Right Section - System Info */}
      <div className="flex items-center gap-6">
        {/* CPU */}
        <div className="flex items-center gap-2">
          <Cpu size={16} className="text-cyber-primary" />
          <span className="text-xs font-mono text-cyber-muted">
            CPU <span className="text-cyber-text font-semibold">{systemStatus.cpu}%</span>
          </span>
        </div>

        {/* RAM */}
        <div className="flex items-center gap-2">
          <HardDrive size={16} className="text-cyber-primary" />
          <span className="text-xs font-mono text-cyber-muted">
            RAM <span className="text-cyber-text font-semibold">{systemStatus.ram}%</span>
          </span>
        </div>

        {/* Network */}
        <div className="flex items-center gap-2">
          <Wifi size={16} className="text-cyber-primary" />
          <span className="text-xs font-mono text-cyber-muted">
            NET <span className="text-cyber-text font-semibold">{systemStatus.network}K/s</span>
          </span>
        </div>

        {/* Battery */}
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-cyber-primary" />
          <span className="text-xs font-mono text-cyber-muted">
            BAT <span className="text-cyber-text font-semibold">{systemStatus.battery}%</span>
          </span>
        </div>

        {/* Time & Date */}
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-cyber-primary" />
          <div className="text-right">
            <div className="text-xs font-mono text-cyber-text font-semibold">{time}</div>
            <div className="text-xs font-mono text-cyber-muted">{date}</div>
          </div>
        </div>

        {/* Power */}
        <button className="ml-4 p-2 hover:bg-cyber-primary/10 rounded-lg transition-colors duration-300">
          <Power size={16} className="text-cyber-primary" />
        </button>
      </div>
    </div>
  )
}
