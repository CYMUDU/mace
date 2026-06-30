import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users, Zap, Brain, Shield, RefreshCw } from 'lucide-react'

interface SubAgentsNetworkProps {
  className?: string
}

const agents = [
  { id: 'planner', name: 'Planner Agent', icon: BarChart3, status: 'Active', progress: 85 },
  { id: 'research', name: 'Research Agent', icon: Users, status: 'Active', progress: 92 },
  { id: 'code', name: 'Code Agent', icon: Zap, status: 'Active', progress: 64 },
  { id: 'analysis', name: 'Analysis Agent', icon: Brain, status: 'Active', progress: 78 },
  { id: 'security', name: 'Security Agent', icon: Shield, status: 'Active', progress: 92 },
  { id: 'synthesis', name: 'Synthesis Agent', icon: RefreshCw, status: 'Active', progress: 55 },
]

export const SubAgentsNetwork: React.FC<SubAgentsNetworkProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full h-full p-6 bg-[#04070D] ${className}`}
    >
      <h3 className="text-sm font-semibold text-[#00E5FF] mb-6 flex items-center gap-2 uppercase tracking-wider">
        <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]"></div>
        08 Sub Agents - Collaborative Intelligence Network
      </h3>

      {/* Upgraded to be fully responsive for drag-to-resize panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {agents.map((agent, index) => {
          const Icon = agent.icon
          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-[#0B111A] border border-[#12202D] rounded-lg p-5 hover:border-[#00E5FF]/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#04070D] border border-[#12202D] rounded-lg group-hover:border-[#00E5FF]/40 transition-colors">
                    <Icon size={18} className="text-[#00E5FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white tracking-wide">{agent.name}</div>
                    <div className="text-xs text-[#00E5FF]/60 uppercase tracking-widest mt-0.5">{agent.status}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 mt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Processing Load</span>
                  <span className="text-[#00E5FF] font-mono font-semibold">{agent.progress}%</span>
                </div>
                {/* Strict M.A.C.E. Cyan Progress Bar */}
                <div className="w-full h-1.5 bg-[#04070D] border border-[#12202D] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${agent.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Network Indicators - Re-themed to strictly match the UI */}
      <div className="mt-8 pt-6 border-t border-[#12202D] grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-[#0B111A] rounded-lg border border-[#12202D]">
          <div className="text-xl font-mono font-bold text-[#00E5FF]">6</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Active Nodes</div>
        </div>
        <div className="text-center p-3 bg-[#0B111A] rounded-lg border border-[#12202D]">
          <div className="text-xl font-mono font-bold text-[#00E5FF]">98%</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">System Health</div>
        </div>
        <div className="text-center p-3 bg-[#0B111A] rounded-lg border border-[#12202D]">
          <div className="text-xl font-mono font-bold text-[#00E5FF]">1,402</div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Tasks Resolved</div>
        </div>
      </div>
    </motion.div>
  )
}