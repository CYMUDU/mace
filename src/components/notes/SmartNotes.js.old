import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Globe, Youtube, BookMarked, Share2, List, Clock, Link } from 'lucide-react';
const tabItems = [
    { id: 'pdf', label: 'PDF Analysis', icon: FileText },
    { id: 'web', label: 'Website Analysis', icon: Globe },
    { id: 'youtube', label: 'YouTube Analysis', icon: Youtube },
    { id: 'notes', label: 'Lecture Notes', icon: BookMarked },
];
const features = [
    { icon: Share2, label: 'Mind Map' },
    { icon: List, label: 'Flashcards' },
    { icon: Clock, label: 'Timeline' },
    { icon: Link, label: 'References' },
];
export const SmartNotes = ({ className = '' }) => {
    const [activeTab, setActiveTab] = useState('pdf');
    return (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: `card-base p-6 flex flex-col gap-4 ${className}`, children: [_jsxs("h3", { className: "text-sm font-semibold text-cyber-primary flex items-center gap-2", children: [_jsx(BookMarked, { size: 16 }), "07 SMART NOTES"] }), _jsx("div", { className: "flex gap-2 border-b border-cyber-borders overflow-x-auto", children: tabItems.map((tab) => {
                    const Icon = tab.icon;
                    return (_jsxs("button", { onClick: () => setActiveTab(tab.id), className: `flex items-center gap-2 px-3 py-2 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                            ? 'text-cyber-primary border-cyber-primary'
                            : 'text-cyber-muted border-transparent hover:text-cyber-primary'}`, children: [_jsx(Icon, { size: 12 }), tab.label] }, tab.id));
                }) }), _jsxs("div", { children: [_jsx("p", { className: "text-xs text-cyber-muted mb-2", children: "Input Source" }), _jsx("input", { type: "text", placeholder: "Enter PDF, website, or YouTube URL...", className: "w-full px-3 py-2 bg-cyber-background border border-cyber-borders rounded-lg text-xs text-cyber-text placeholder-cyber-muted focus:outline-none focus:border-cyber-primary" })] }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (_jsxs("button", { className: "flex items-center gap-2 p-3 bg-cyber-background/50 border border-cyber-borders rounded-lg hover:border-cyber-primary/50 transition-all group", children: [_jsx(Icon, { size: 14, className: "text-cyber-muted group-hover:text-cyber-primary" }), _jsx("span", { className: "text-xs text-cyber-muted group-hover:text-cyber-text", children: feature.label })] }, i));
                }) }), _jsx("button", { className: "w-full py-2 bg-gradient-cyber text-cyber-background font-semibold text-xs rounded-lg hover:shadow-glow-primary transition-all", children: "Summarize & Learn Faster" })] }));
};
