import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Monitor, Radio, Folder, Music, Share2, Smartphone } from 'lucide-react';
const commands = [
    { icon: Monitor, label: 'Open Apps', color: 'text-cyber-primary' },
    { icon: Radio, label: 'Browse Internet', color: 'text-cyber-secondary' },
    { icon: Music, label: 'Play Media', color: 'text-cyber-success' },
    { icon: Folder, label: 'File Manager', color: 'text-cyber-warning' },
    { icon: Share2, label: 'Share Files', color: 'text-cyber-primary' },
    { icon: Smartphone, label: 'Mobile Control', color: 'text-cyber-secondary' },
];
export const DesktopCommander = ({ className = '' }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: `card-base p-6 border-l-4 border-l-cyber-warning ${className}`, children: [_jsx("h3", { className: "text-sm font-semibold text-cyber-warning mb-4 flex items-center gap-2", children: "09 DESKTOP COMMANDER AGENT" }), _jsx("p", { className: "text-xs text-cyber-muted mb-4", children: "Complete desktop task automation" }), _jsx("div", { className: "grid grid-cols-3 gap-3 mb-6", children: commands.map((cmd, i) => {
                    const Icon = cmd.icon;
                    return (_jsxs(motion.button, { whileHover: { scale: 1.05, y: -2 }, className: "flex flex-col items-center gap-2 p-4 bg-cyber-background/50 border border-cyber-borders rounded-lg hover:border-cyber-warning/50 transition-all group", children: [_jsx(Icon, { size: 20, className: `${cmd.color} group-hover:scale-110 transition-transform` }), _jsx("span", { className: "text-xs text-cyber-muted group-hover:text-cyber-text", children: cmd.label })] }, i));
                }) }), _jsxs("div", { className: "border-t border-cyber-borders pt-4", children: [_jsx("p", { className: "text-xs text-cyber-muted mb-3", children: "Supported Platforms" }), _jsx("div", { className: "flex justify-center gap-4", children: ['🪟', '🍎', '🐧', '📱'].map((icon, i) => (_jsx(motion.div, { whileHover: { scale: 1.2, rotate: 5 }, className: "text-2xl cursor-pointer", children: icon }, i))) })] }), _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "w-full mt-6 py-3 bg-gradient-cyber text-cyber-background font-bold rounded-lg shadow-glow-primary hover:shadow-lg transition-all flex items-center justify-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-cyber-success animate-pulse" }), "LAUNCH COMMANDER"] }), _jsxs("div", { className: "mt-4 text-center text-xs text-cyber-muted", children: ["Status: ", _jsx("span", { className: "text-cyber-success font-semibold", children: "Active & Ready" })] })] }));
};
