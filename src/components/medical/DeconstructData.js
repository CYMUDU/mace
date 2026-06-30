import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Upload, Zap, BookOpen } from 'lucide-react';
export const DeconstructData = ({ className = '' }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: `card-base p-6 flex flex-col gap-4 ${className}`, children: [_jsxs("h3", { className: "text-sm font-semibold text-cyber-primary flex items-center gap-2", children: [_jsx(Zap, { size: 16 }), "06 DECONSTRUCT DATA"] }), _jsxs("div", { className: "border-2 border-dashed border-cyber-borders rounded-lg p-6 text-center hover:border-cyber-primary transition-colors cursor-pointer", children: [_jsx(Upload, { size: 24, className: "mx-auto mb-2 text-cyber-muted" }), _jsx("p", { className: "text-xs text-cyber-muted mb-2", children: "Upload image of medicine" }), _jsx("input", { type: "file", className: "hidden", accept: "image/*" }), _jsx("button", { className: "text-xs px-3 py-1.5 bg-cyber-primary/20 border border-cyber-primary/50 rounded text-cyber-primary hover:bg-cyber-primary/30 transition-colors", children: "Select File" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "text-xs text-cyber-muted font-semibold", children: "Analysis Results" }), [
                        { label: 'Scan Medicine', status: 'ready' },
                        { label: 'Analyze Data', status: 'ready' },
                        { label: 'Generate Report', status: 'disabled' },
                    ].map((item, i) => (_jsxs("button", { className: `w-full flex items-center gap-2 p-3 rounded-lg border transition-all ${item.status === 'ready'
                            ? 'bg-cyber-background/50 border-cyber-borders hover:border-cyber-primary/50 cursor-pointer'
                            : 'bg-cyber-background/30 border-cyber-borders/50 opacity-50 cursor-not-allowed'}`, children: [_jsx(BookOpen, { size: 14, className: "text-cyber-primary" }), _jsx("span", { className: "text-xs text-cyber-text", children: item.label })] }, i)))] }), _jsx("div", { className: "border-t border-cyber-borders pt-3 text-center", children: _jsx("div", { className: "text-xs text-cyber-muted", children: "Ready for analysis" }) })] }));
};
