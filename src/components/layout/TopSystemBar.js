import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Wifi, Cpu, HardDrive, Zap, Clock, Power } from 'lucide-react';
import { useAppStore } from '@store/appStore';
import { useSystemMetrics } from '@hooks/useSystemMetrics';
export const TopSystemBar = ({ className = '' }) => {
    const systemStatus = useAppStore((state) => state.systemStatus);
    const { generateRandomMetrics } = useSystemMetrics();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
            setDate(now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: `h-16 bg-cyber-panels border-b border-cyber-borders flex items-center justify-between px-6 ${className}`, children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-cyber-success animate-pulse-glow" }), _jsx("span", { className: "text-sm font-medium text-cyber-success", children: "VOICE-LINK: ACTIVE" })] }) }), _jsx("div", { className: "flex items-center gap-3", children: [...Array(8)].map((_, i) => (_jsx("div", { className: "w-1 bg-gradient-cyber rounded-full", style: {
                        height: `${4 + Math.sin(i * 0.5) * 8}px`,
                        animation: `pulse 0.6s ease-in-out ${i * 0.1}s infinite`,
                    } }, i))) }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Cpu, { size: 16, className: "text-cyber-primary" }), _jsxs("span", { className: "text-xs font-mono text-cyber-muted", children: ["CPU ", _jsxs("span", { className: "text-cyber-text font-semibold", children: [systemStatus.cpu, "%"] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(HardDrive, { size: 16, className: "text-cyber-primary" }), _jsxs("span", { className: "text-xs font-mono text-cyber-muted", children: ["RAM ", _jsxs("span", { className: "text-cyber-text font-semibold", children: [systemStatus.ram, "%"] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Wifi, { size: 16, className: "text-cyber-primary" }), _jsxs("span", { className: "text-xs font-mono text-cyber-muted", children: ["NET ", _jsxs("span", { className: "text-cyber-text font-semibold", children: [systemStatus.network, "K/s"] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Zap, { size: 16, className: "text-cyber-primary" }), _jsxs("span", { className: "text-xs font-mono text-cyber-muted", children: ["BAT ", _jsxs("span", { className: "text-cyber-text font-semibold", children: [systemStatus.battery, "%"] })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { size: 16, className: "text-cyber-primary" }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-xs font-mono text-cyber-text font-semibold", children: time }), _jsx("div", { className: "text-xs font-mono text-cyber-muted", children: date })] })] }), _jsx("button", { className: "ml-4 p-2 hover:bg-cyber-primary/10 rounded-lg transition-colors duration-300", children: _jsx(Power, { size: 16, className: "text-cyber-primary" }) })] })] }));
};
