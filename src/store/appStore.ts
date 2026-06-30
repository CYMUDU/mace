import { create } from 'zustand'
import type { SystemStatus, Message } from '@/types'

interface AppState {
  // System Status
  systemStatus: SystemStatus
  updateSystemStatus: (status: Partial<SystemStatus>) => void

  // Voice Control
  isListening: boolean
  setIsListening: (listening: boolean) => void

  // Messages
  messages: Message[]
  addMessage: (message: Message) => void
  clearMessages: () => void

  // UI State
  sidebarOpen: boolean
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>((set) => ({
  // System Status
  systemStatus: {
    cpu: 28,
    ram: 46,
    network: 12.4,
    battery: 84,
    voiceActive: true,
  },
  updateSystemStatus: (status) =>
    set((state) => ({
      systemStatus: { ...state.systemStatus, ...status },
    })),

  // Voice Control
  isListening: true,
  setIsListening: (listening) => set({ isListening: listening }),

  // Messages
  messages: [
    {
      id: '1',
      sender: 'mace',
      content: 'MACE online. Awaiting your command, Boss.',
      timestamp: new Date(),
    },
  ],
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  clearMessages: () => set({ messages: [] }),

  // UI State
  sidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    })),
}))
