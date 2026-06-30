import type { SystemStatus, Message } from '@/types';
interface AppState {
    systemStatus: SystemStatus;
    updateSystemStatus: (status: Partial<SystemStatus>) => void;
    isListening: boolean;
    setIsListening: (listening: boolean) => void;
    messages: Message[];
    addMessage: (message: Message) => void;
    clearMessages: () => void;
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}
export declare const useAppStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AppState>>;
export {};
