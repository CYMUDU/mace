import React from 'react'
import { motion } from 'framer-motion'
import { Upload, Zap, BookOpen } from 'lucide-react'

interface DeconstructDataProps {
  className?: string
}

export const DeconstructData: React.FC<DeconstructDataProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`card-base p-6 flex flex-col gap-4 ${className}`}
    >
      <h3 className="text-sm font-semibold text-cyber-primary flex items-center gap-2">
        <Zap size={16} />
        06 DECONSTRUCT DATA
      </h3>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-cyber-borders rounded-lg p-6 text-center hover:border-cyber-primary transition-colors cursor-pointer">
        <Upload size={24} className="mx-auto mb-2 text-cyber-muted" />
        <p className="text-xs text-cyber-muted mb-2">Upload image of medicine</p>
        <input type="file" className="hidden" accept="image/*" />
        <button className="text-xs px-3 py-1.5 bg-cyber-primary/20 border border-cyber-primary/50 rounded text-cyber-primary hover:bg-cyber-primary/30 transition-colors">
          Select File
        </button>
      </div>

      {/* Analysis Results */}
      <div className="space-y-2">
        <h4 className="text-xs text-cyber-muted font-semibold">Analysis Results</h4>
        {[
          { label: 'Scan Medicine', status: 'ready' },
          { label: 'Analyze Data', status: 'ready' },
          { label: 'Generate Report', status: 'disabled' },
        ].map((item, i) => (
          <button
            key={i}
            className={`w-full flex items-center gap-2 p-3 rounded-lg border transition-all ${
              item.status === 'ready'
                ? 'bg-cyber-background/50 border-cyber-borders hover:border-cyber-primary/50 cursor-pointer'
                : 'bg-cyber-background/30 border-cyber-borders/50 opacity-50 cursor-not-allowed'
            }`}
          >
            <BookOpen size={14} className="text-cyber-primary" />
            <span className="text-xs text-cyber-text">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Status */}
      <div className="border-t border-cyber-borders pt-3 text-center">
        <div className="text-xs text-cyber-muted">Ready for analysis</div>
      </div>
    </motion.div>
  )
}
