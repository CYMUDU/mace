import React from 'react';
interface LineChartData {
    name: string;
    value: number;
}
interface BarChartData {
    name: string;
    value: number;
}
interface CyberLineChartProps {
    data: LineChartData[];
    height?: number;
}
export declare const CyberLineChart: React.FC<CyberLineChartProps>;
interface CyberBarChartProps {
    data: BarChartData[];
    height?: number;
}
export declare const CyberBarChart: React.FC<CyberBarChartProps>;
export {};
