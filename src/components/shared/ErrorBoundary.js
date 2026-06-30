import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsx("div", { className: "w-screen h-screen bg-cyber-background flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold text-cyber-danger mb-2", children: "Error" }), _jsx("p", { className: "text-cyber-muted mb-4", children: this.state.error?.message }), _jsx("button", { onClick: () => window.location.reload(), className: "px-4 py-2 bg-cyber-primary/20 border border-cyber-primary/50 rounded text-cyber-primary hover:bg-cyber-primary/30", children: "Reload Application" })] }) }));
        }
        return this.props.children;
    }
}
