import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Terminal, Wrench, Monitor, Wifi, Database, Network, Settings, } from 'lucide-react';
const dockItems = [
    { id: 'terminal', icon: Terminal, label: 'Terminal', active: false },
    { id: 'tools', icon: Wrench, label: 'Tools', active: false },
    { id: 'monitor', icon: Monitor, label: 'Monitor', active: false },
    { id: 'mace', icon: Wifi, label: 'MACE', active: true },
    { id: 'data', icon: Database, label: 'Data', active: false },
    { id: 'network', icon: Network, label: 'Network', active: false },
    { id: 'settings', icon: Settings, label: 'Settings', active: false },
];
export const BottomDock = ({ className = '' }) => {
    return (_jsxs("div", { className: `h-16 bg-cyber-panels border-t border-cyber-borders flex items-center justify-center gap-2 px-4 ${className}`, children: [_jsx("div", { className: "flex items-center gap-4 bg-cyber-background/50 px-4 py-2 rounded-full border border-cyber-borders", children: dockItems.map((item) => {
                    const Icon = item.icon;
                    return (_jsxs("button", { className: `p-3 rounded-lg transition-all duration-300 relative group ${item.active
                            ? 'bg-cyber-primary/20 text-cyber-primary shadow-glow-primary'
                            : 'text-cyber-muted hover:text-cyber-primary hover:bg-cyber-primary/10'}`, title: item.label, children: [_jsx(Icon, { size: 18 }), _jsx("div", { className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-cyber-background border border-cyber-borders rounded text-xs text-cyber-text opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none", children: item.label })] }, item.id));
                }) }), _jsxs("div", { className: "flex items-center gap-2 ml-4 text-cyber-muted text-xs", children: [_jsx("span", { children: "SYSTEM: STATUS" }), _jsx("span", { className: "w-2 h-2 rounded-full bg-cyber-success animate-pulse" })] })] }));
};
