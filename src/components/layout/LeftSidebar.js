import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LayoutDashboard, Cpu, MessageSquare, Shield, Zap, FileText, Activity, Settings, Smartphone, } from 'lucide-react';
import { useAppStore } from '@store/appStore';
const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
    { id: 'ai', icon: Cpu, label: 'AI Engine' },
    { id: 'voice', icon: MessageSquare, label: 'Voice Control' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'neural', icon: Zap, label: 'Neural Network' },
    { id: 'files', icon: FileText, label: 'Files' },
    { id: 'analytics', icon: Activity, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
];
export const LeftSidebar = ({ className = '' }) => {
    const sidebarOpen = useAppStore((state) => state.sidebarOpen);
    if (!sidebarOpen) {
        return (_jsxs("div", { className: `w-20 bg-cyber-panels border-r border-cyber-borders ${className}`, children: [_jsx("div", { className: "flex flex-col items-center justify-center h-20 border-b border-cyber-borders", children: _jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-cyber flex items-center justify-center text-cyber-background font-bold text-lg", children: "M" }) }), _jsx("nav", { className: "flex flex-col items-center gap-4 p-4", children: navItems.map((item) => {
                        const Icon = item.icon;
                        return (_jsx("button", { className: `p-3 rounded-lg transition-all duration-300 ${item.active
                                ? 'bg-cyber-primary/20 text-cyber-primary shadow-glow-primary'
                                : 'text-cyber-muted hover:text-cyber-primary hover:bg-cyber-primary/10'}`, title: item.label, children: _jsx(Icon, { size: 20 }) }, item.id));
                    }) })] }));
    }
    return (_jsxs("div", { className: `w-60 bg-cyber-panels border-r border-cyber-borders flex flex-col overflow-hidden ${className}`, children: [_jsx("div", { className: "h-20 border-b border-cyber-borders flex items-center justify-center", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-gradient-cyber flex items-center justify-center text-cyber-background font-bold", children: "M" }), _jsxs("div", { children: [_jsx("h1", { className: "text-lg font-bold text-cyber-primary", children: "MACE" }), _jsx("p", { className: "text-xs text-cyber-muted", children: "Multi-Platform Adaptive" })] })] }) }), _jsx("nav", { className: "flex-1 overflow-y-auto p-4 space-y-2", children: navItems.map((item) => {
                    const Icon = item.icon;
                    return (_jsxs("button", { className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${item.active
                            ? 'bg-cyber-primary/20 text-cyber-primary shadow-glow-primary border border-cyber-primary/50'
                            : 'text-cyber-muted hover:text-cyber-primary hover:bg-cyber-primary/10'}`, children: [_jsx(Icon, { size: 18 }), _jsx("span", { className: "text-sm font-medium", children: item.label })] }, item.id));
                }) }), _jsx("div", { className: "border-t border-cyber-borders p-4", children: _jsxs("button", { className: "w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyber-primary/10 text-cyber-primary hover:bg-cyber-primary/20 transition-all duration-300", children: [_jsx(Smartphone, { size: 16 }), _jsx("span", { className: "text-xs font-medium", children: "Mobile Sync" })] }) })] }));
};
