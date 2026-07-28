import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
export const LoadingSpinner = ({ size = 'md', fullScreen = false }) => {
    const sizeMap = {
        sm: 'w-6 h-6',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };
    const spinner = (_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 2, repeat: Infinity, ease: 'linear' }, className: `${sizeMap[size]} border-2 border-cyber-borders border-t-cyber-primary rounded-full` }));
    if (fullScreen) {
        return (_jsx("div", { className: "fixed inset-0 bg-cyber-background/50 flex items-center justify-center", children: spinner }));
    }
    return spinner;
};
export const Toast = ({ message, type = 'info', duration = 3000 }) => {
    const typeStyles = {
        success: 'bg-cyber-success/20 border-cyber-success text-cyber-success',
        error: 'bg-cyber-danger/20 border-cyber-danger text-cyber-danger',
        warning: 'bg-cyber-warning/20 border-cyber-warning text-cyber-warning',
        info: 'bg-cyber-primary/20 border-cyber-primary text-cyber-primary',
    };
    return (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, className: `fixed top-4 right-4 px-4 py-3 rounded-lg border ${typeStyles[type]} text-sm font-medium`, children: message }));
};
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs(_Fragment, { children: [_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: onClose, className: "fixed inset-0 bg-black/50" }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, className: "fixed inset-0 flex items-center justify-center pointer-events-none", children: _jsxs("div", { className: "card-base w-full max-w-md mx-4 pointer-events-auto", children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-cyber-borders", children: [_jsx("h2", { className: "text-lg font-semibold text-cyber-primary", children: title }), _jsx("button", { onClick: onClose, className: "text-cyber-muted hover:text-cyber-primary transition-colors", children: "\u2715" })] }), _jsx("div", { className: "p-6", children: children }), footer && _jsx("div", { className: "border-t border-cyber-borders p-6", children: footer })] }) })] })) }));
};
