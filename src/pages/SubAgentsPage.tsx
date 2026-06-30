import React from 'react'
import { motion } from 'framer-motion'
import { LeftSidebar } from '@components/layout/LeftSidebar'
import { TopSystemBar } from '@components/layout/TopSystemBar'
import { BottomDock } from '@components/layout/BottomDock'
import { SubAgentsNetwork } from '@components/agents/SubAgentsNetwork'

const SubAgentsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen bg-[#04070D] text-cyber-text flex flex-col overflow-hidden"
    >
      {/* Top Bar */}
      <TopSystemBar />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar remains so navigation works */}
        <LeftSidebar />

        {/* Dedicated Sub Agents Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scroll relative">
          
          {/* Subtle grid background to look like a command center */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#00E5FF] tracking-wider uppercase mb-2">
                Agent Command Center
              </h1>
              <p className="text-gray-400 text-sm">
                Monitor and deploy specialized AI sub-agents across the M.A.C.E. network.
              </p>
            </div>

            {/* The component we just upgraded */}
            <SubAgentsNetwork className="shadow-[0_0_30px_rgba(0,229,255,0.05)] rounded-xl border border-[#12202D]" />
          </div>
        </div>
      </div>

      {/* Bottom Dock */}
      <BottomDock />
    </motion.div>
  )
}

export default SubAgentsPage