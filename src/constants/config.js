export const NAVIGATION_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', path: '/' },
    { id: 'agents', label: 'Agents', path: '/agents' },
    { id: 'voice', label: 'Voice Control', path: '/voice' },
    { id: 'security', label: 'Security', path: '/security' },
    { id: 'analytics', label: 'Analytics', path: '/analytics' },
];
export const AGENT_STATUSES = {
    IDLE: 'idle',
    ACTIVE: 'active',
    PROCESSING: 'processing',
    ERROR: 'error',
};
export const SYSTEM_METRICS_UPDATE_INTERVAL = 1000; // ms
export const DEFAULT_PAGE_SIZE = 20;
export const TOAST_DURATION = 3000; // ms
