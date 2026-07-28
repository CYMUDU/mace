import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { COLORS } from '@theme/index';
export const CyberLineChart = ({ data, height = 300 }) => {
    return (_jsx(ResponsiveContainer, { width: "100%", height: height, children: _jsxs(LineChart, { data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: COLORS.borders, vertical: false }), _jsx(XAxis, { dataKey: "name", stroke: COLORS.muted, style: { fontSize: '12px' } }), _jsx(YAxis, { stroke: COLORS.muted, style: { fontSize: '12px' } }), _jsx(Tooltip, { contentStyle: {
                        backgroundColor: COLORS.panels,
                        border: `1px solid ${COLORS.borders}`,
                        borderRadius: '4px',
                    }, labelStyle: { color: COLORS.primary } }), _jsx(Line, { type: "monotone", dataKey: "value", stroke: COLORS.primary, dot: { fill: COLORS.primary, r: 4 }, strokeWidth: 2, isAnimationActive: true })] }) }));
};
export const CyberBarChart = ({ data, height = 300 }) => {
    return (_jsx(ResponsiveContainer, { width: "100%", height: height, children: _jsxs(BarChart, { data: data, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: COLORS.borders, vertical: false }), _jsx(XAxis, { dataKey: "name", stroke: COLORS.muted, style: { fontSize: '12px' } }), _jsx(YAxis, { stroke: COLORS.muted, style: { fontSize: '12px' } }), _jsx(Tooltip, { contentStyle: {
                        backgroundColor: COLORS.panels,
                        border: `1px solid ${COLORS.borders}`,
                        borderRadius: '4px',
                    }, labelStyle: { color: COLORS.primary } }), _jsx(Bar, { dataKey: "value", fill: COLORS.primary, radius: [4, 4, 0, 0], children: data.map((entry, index) => (_jsx(Cell, { fill: COLORS.primary }, `cell-${index}`))) })] }) }));
};
