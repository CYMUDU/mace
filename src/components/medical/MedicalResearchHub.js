import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { FileText, Brain, BookOpen, Lightbulb } from 'lucide-react';
export const MedicalResearchHub = ({ className = '' }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: `card-base p-6 flex flex-col gap-4 ${className}`, children: [_jsxs("h3", { className: "text-sm font-semibold text-cyber-primary flex items-center gap-2", children: [_jsx(Brain, { size: 16 }), "MEDICAL RESEARCH"] }), _jsxs("div", { className: "border-2 border-dashed border-cyber-borders rounded-lg p-6 text-center hover:border-cyber-primary transition-colors cursor-pointer", children: [_jsx("div", { className: "text-4xl mb-2", children: "\uD83D\uDCF8" }), _jsx("p", { className: "text-xs text-cyber-muted mb-2", children: "Scan medicine or upload image" }), _jsx("input", { type: "file", className: "hidden", accept: "image/*" }), _jsx("button", { className: "text-xs px-3 py-1.5 bg-cyber-primary/20 border border-cyber-primary/50 rounded text-cyber-primary hover:bg-cyber-primary/30 transition-colors", children: "Upload" })] }), _jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                    { icon: FileText, label: 'Drug Analysis' },
                    { icon: Lightbulb, label: 'Side Effects' },
                    { icon: Brain, label: 'Interactions' },
                    { icon: BookOpen, label: 'Usage Info' },
                ].map((option, i) => {
                    const Icon = option.icon;
                    return (_jsxs("button", { className: "flex items-center gap-2 p-3 bg-cyber-background/50 border border-cyber-borders rounded-lg hover:bg-cyber-primary/10 hover:border-cyber-primary/50 transition-all group", children: [_jsx(Icon, { size: 14, className: "text-cyber-muted group-hover:text-cyber-primary" }), _jsx("span", { className: "text-xs text-cyber-muted group-hover:text-cyber-text", children: option.label })] }, i));
                }) }), _jsxs("div", { className: "border-t border-cyber-borders pt-4", children: [_jsx("p", { className: "text-xs text-cyber-muted mb-3", children: "Sub Agents" }), _jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                            { name: 'Recon Agent', status: 'idle' },
                            { name: 'Code Agent', status: 'idle' },
                            { name: 'Data Agent', status: 'active' },
                            { name: 'Sec Agent', status: 'idle' },
                            { name: 'Med Agent', status: 'active' },
                            { name: 'Doc Agent', status: 'idle' },
                        ].map((agent, i) => (_jsxs("div", { className: "flex items-center gap-1.5 p-2 bg-cyber-background/50 border border-cyber-borders rounded text-xs", children: [_jsx("div", { className: `w-1.5 h-1.5 rounded-full ${agent.status === 'active' ? 'bg-cyber-success animate-pulse' : 'bg-cyber-muted'}` }), _jsx("span", { className: "text-cyber-muted flex-1", children: agent.name })] }, i))) })] })] }));
};
