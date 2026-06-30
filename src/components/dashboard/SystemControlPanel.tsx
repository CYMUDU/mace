import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react'

interface SystemControlPanelProps {
  className?: string
}

export const SystemControlPanel: React.FC<SystemControlPanelProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-4 ${className}`}
    >
      {/* Black Box Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-base p-6 border-l-4 border-l-cyber-primary hover-glow"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-cyber-primary">01 BLACK BOX</h3>
            <p className="text-xs text-cyber-muted mt-1">TASK QUEUE & PRODUCTIVITY</p>
          </div>
          <div className="bg-cyber-primary/20 px-3 py-1 rounded-full">
            <span className="text-lg font-bold text-cyber-primary">12</span>
            <span className="text-xs text-cyber-muted ml-1">TASKS</span>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { title: 'Code Review - AI Module', status: 'in-progress' },
            { title: 'Debug - Game Engine', status: 'pending' },
            { title: 'Data Analysis - Patient Set', status: 'pending' },
            { title: 'Research Paper - Quantum ML', status: 'pending' },
          ].map((task, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-cyber-muted p-2 bg-cyber-background/50 rounded">
              <div className="w-2 h-2 rounded-full bg-cyber-warning"></div>
              <span className="flex-1">{task.title}</span>
              <span className="text-cyber-primary text-xs">{task.status}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-cyber-borders flex items-center justify-between">
          <span className="text-xs text-cyber-muted">PRODUCTIVITY</span>
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-cyber-success" />
            <span className="text-sm font-semibold text-cyber-success">+23%</span>
          </div>
        </div>
      </motion.div>

      {/* Security Alerts Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-base p-6 border-l-4 border-l-cyber-danger hover-glow"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-cyber-danger">02 SECURITY ALERTS</h3>
            <p className="text-xs text-cyber-muted mt-1">THREAT & VULNERABILITY FEED</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-cyber-danger/20 flex items-center justify-center">
            <AlertCircle size={24} className="text-cyber-danger animate-pulse" />
          </div>
        </div>

        <div className="space-y-2">
          {[
            {
              title: 'Suspicious File Detected',
              time: '23:24:15',
              severity: 'high',
            },
            {
              title: 'Unauthorized Access Attempt',
              time: '23:18:42',
              severity: 'high',
            },
            {
              title: 'Database Package Detected',
              time: '23:24:33',
              severity: 'medium',
            },
          ].map((alert, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs p-2 bg-cyber-background/50 rounded"
            >
              <div className={`w-2 h-2 rounded-full ${
                alert.severity === 'high' ? 'bg-cyber-danger' : 'bg-cyber-warning'
              }`}></div>
              <span className="flex-1 text-cyber-muted">{alert.title}</span>
              <span className="text-cyber-danger text-xs">{alert.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-base p-6 border-l-4 border-l-cyber-secondary hover-glow"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-cyber-secondary">03 ARTIFICIAL INTELLIGENCE</h3>
            <p className="text-xs text-cyber-muted mt-1">AI MODELS & INNOVATION</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-cyber-success">98%</div>
            <div className="text-xs text-cyber-muted">EFFICIENCY</div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-cyber-muted">Model Training Progress</span>
              <span className="text-xs text-cyber-primary font-semibold">76%</span>
            </div>
            <div className="w-full h-1 bg-cyber-background rounded-full overflow-hidden">
              <motion.div
                animate={{ width: '76%' }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-cyber"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-cyber-borders">
            <div className="text-xs text-cyber-muted mb-2">Active Models</div>
            <div className="space-y-1">
              {['Neural Network v3.2', 'Language Model v2.1', 'Vision Processor v1.8'].map((model, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-cyber-muted p-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-success"></div>
                  <span>{model}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Read & Evolve Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="card-base p-6 border-l-4 border-l-cyber-success hover-glow"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-cyber-success">04 READ & EVOLVE</h3>
            <p className="text-xs text-cyber-muted mt-1">DUAL MODE LEARNING ENGINE</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-cyber-borders">
          <button className="px-3 py-2 text-xs font-medium text-cyber-primary border-b-2 border-cyber-primary">
            Surface Web
          </button>
          <button className="px-3 py-2 text-xs font-medium text-cyber-muted hover:text-cyber-primary">
            Dark Web
          </button>
        </div>

        {/* Research Feed */}
        <div className="space-y-2">
          {[
            'New Breakthrough in Quantum Computing',
            'AI Advances in Medical Diagnosis',
            'Cybersecurity Trends Q1 2026',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs p-2 bg-cyber-background/50 rounded hover:bg-cyber-background/70 cursor-pointer transition-colors">
              <CheckCircle2 size={14} className="text-cyber-success flex-shrink-0" />
              <span className="text-cyber-text flex-1 line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
