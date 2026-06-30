import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useAppStore } from '@store/appStore';
export const LiveTranscriptTerminal = ({ className = '', }) => {
    const messages = useAppStore((state) => state.messages);
    const addMessage = useAppStore((state) => state.addMessage);
    const [input, setInput] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    // Simulate typing effect for responses
    useEffect(() => {
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.sender === 'mace' && isTyping) {
                let index = 0;
                const interval = setInterval(() => {
                    if (index < lastMessage.content.length) {
                        setDisplayText(lastMessage.content.substring(0, index + 1));
                        index++;
                    }
                    else {
                        setIsTyping(false);
                        clearInterval(interval);
                    }
                }, 30);
                return () => clearInterval(interval);
            }
        }
    }, [messages, isTyping]);
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = {
                id: Date.now().toString(),
                sender: 'user',
                content: input,
                timestamp: new Date(),
            };
            addMessage(userMessage);
            setInput('');
            // Simulate MACE response
            setTimeout(() => {
                const maceResponse = {
                    id: (Date.now() + 1).toString(),
                    sender: 'mace',
                    content: 'Processing your request. Standby...',
                    timestamp: new Date(),
                };
                addMessage(maceResponse);
                setDisplayText('');
                setIsTyping(true);
            }, 500);
        }
    };
    return (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, className: `card-base flex flex-col h-full overflow-hidden ${className}`, children: [_jsx("div", { className: "border-b border-cyber-borders p-4", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-cyber-success animate-pulse" }), _jsx("h2", { className: "text-sm font-semibold text-cyber-primary", children: "LIVE TRANSCRIPT TERMINAL" })] }) }), _jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 terminal-text", children: [messages.map((message, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: `flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`, children: _jsxs("div", { className: `max-w-xs px-4 py-2 rounded-lg ${message.sender === 'user'
                                ? 'bg-cyber-secondary/20 text-cyber-secondary border border-cyber-secondary/50'
                                : 'bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/50'}`, children: [_jsx("div", { className: "text-xs font-mono", children: message.content }), _jsx("div", { className: "text-xs text-cyber-muted mt-1 opacity-60", children: message.timestamp.toLocaleTimeString('en-US', { hour12: false }) })] }) }, message.id))), isTyping && (_jsx(motion.div, { className: "flex gap-2", children: _jsx("div", { className: "px-4 py-2 rounded-lg bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/50", children: _jsxs("div", { className: "flex gap-1", children: [_jsx(motion.div, { animate: { scale: [1, 1.5, 1] }, transition: { duration: 0.6, repeat: Infinity }, className: "w-1 h-1 rounded-full bg-cyber-primary" }), _jsx(motion.div, { animate: { scale: [1, 1.5, 1] }, transition: { duration: 0.6, delay: 0.1, repeat: Infinity }, className: "w-1 h-1 rounded-full bg-cyber-primary" }), _jsx(motion.div, { animate: { scale: [1, 1.5, 1] }, transition: { duration: 0.6, delay: 0.2, repeat: Infinity }, className: "w-1 h-1 rounded-full bg-cyber-primary" })] }) }) }))] }), _jsx("div", { className: "border-t border-cyber-borders p-4", children: _jsxs("form", { onSubmit: handleSendMessage, className: "flex gap-2", children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: "Say something...", className: "flex-1 bg-cyber-background border border-cyber-borders rounded-lg px-4 py-2 text-sm text-cyber-text placeholder-cyber-muted focus:outline-none focus:border-cyber-primary focus:shadow-glow-primary transition-all" }), _jsx("button", { type: "submit", className: "px-4 py-2 bg-cyber-primary/20 border border-cyber-primary/50 rounded-lg text-cyber-primary hover:bg-cyber-primary/30 transition-all duration-300 flex items-center gap-2", children: _jsx(Send, { size: 16 }) })] }) })] }));
};
