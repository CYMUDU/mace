import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Brain, BookOpen, Lightbulb } from 'lucide-react'

interface MedicalResearchHubProps {
  className?: string
}

export const MedicalResearchHub: React.FC<MedicalResearchHubProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`card-base p-6 flex flex-col gap-4 ${className}`}
    >
      <h3 className="text-sm font-semibold text-cyber-primary flex items-center gap-2">
        <Brain size={16} />
        MEDICAL RESEARCH
      </h3>

      {/* Upload Section */}
      <div className="border-2 border-dashed border-cyber-borders rounded-lg p-6 text-center hover:border-cyber-primary transition-colors cursor-pointer">
        <div className="text-4xl mb-2">📸</div>
        <p className="text-xs text-cyber-muted mb-2">Scan medicine or upload image</p>
        <input type="file" className="hidden" accept="image/*" />
        <button className="text-xs px-3 py-1.5 bg-cyber-primary/20 border border-cyber-primary/50 rounded text-cyber-primary hover:bg-cyber-primary/30 transition-colors">
          Upload
        </button>
      </div>

      {/* Analysis Options */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: FileText, label: 'Drug Analysis' },
          { icon: Lightbulb, label: 'Side Effects' },
          { icon: Brain, label: 'Interactions' },
          { icon: BookOpen, label: 'Usage Info' },
        ].map((option, i) => {
          const Icon = option.icon
          return (
            <button
              key={i}
              className="flex items-center gap-2 p-3 bg-cyber-background/50 border border-cyber-borders rounded-lg hover:bg-cyber-primary/10 hover:border-cyber-primary/50 transition-all group"
            >
              <Icon size={14} className="text-cyber-muted group-hover:text-cyber-primary" />
              <span className="text-xs text-cyber-muted group-hover:text-cyber-text">{option.label}</span>
            </button>
          )
        })}
      </div>

      {/* Sub Agents */}
      <div className="border-t border-cyber-borders pt-4">
        <p className="text-xs text-cyber-muted mb-3">Sub Agents</p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Recon Agent', status: 'idle' },
            { name: 'Code Agent', status: 'idle' },
            { name: 'Data Agent', status: 'active' },
            { name: 'Sec Agent', status: 'idle' },
            { name: 'Med Agent', status: 'active' },
            { name: 'Doc Agent', status: 'idle' },
          ].map((agent, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 p-2 bg-cyber-background/50 border border-cyber-borders rounded text-xs"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  agent.status === 'active' ? 'bg-cyber-success animate-pulse' : 'bg-cyber-muted'
                }`}
              ></div>
              <span className="text-cyber-muted flex-1">{agent.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
