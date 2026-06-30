import React from 'react'
import { CenterPanel } from './CenterPanel'

interface VoiceCoreProps {
  className?: string
}

export const VoiceCore: React.FC<VoiceCoreProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex flex-col bg-[#04070D] ${className}`}>
      {/* 
        M.A.C.E. OS - Primary Voice AI Module Entry Point.
        All telemetry, HUD targeting, animations, and the holographic 
        globe are encapsulated within the CenterPanel to maintain 
        strict architectural separation.
      */}
      <CenterPanel />
    </div>
  )
}