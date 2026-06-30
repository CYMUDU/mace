import { create } from 'zustand';
export const useAppStore = create((set) => ({
    // System Status
    systemStatus: {
        cpu: 28,
        ram: 46,
        network: 12.4,
        battery: 84,
        voiceActive: true,
    },
    updateSystemStatus: (status) => set((state) => ({
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
    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message],
    })),
    clearMessages: () => set({ messages: [] }),
    // UI State
    sidebarOpen: true,
    toggleSidebar: () => set((state) => ({
        sidebarOpen: !state.sidebarOpen,
    })),
}));
