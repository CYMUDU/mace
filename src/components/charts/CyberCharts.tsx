import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { COLORS } from '@theme/index'

interface LineChartData {
  name: string
  value: number
}

interface BarChartData {
  name: string
  value: number
}

interface CyberLineChartProps {
  data: LineChartData[]
  height?: number
}

export const CyberLineChart: React.FC<CyberLineChartProps> = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.borders} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.muted} style={{ fontSize: '12px' }} />
        <YAxis stroke={COLORS.muted} style={{ fontSize: '12px' }} />
        <Tooltip
          contentStyle={{
            backgroundColor: COLORS.panels,
            border: `1px solid ${COLORS.borders}`,
            borderRadius: '4px',
          }}
          labelStyle={{ color: COLORS.primary }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={COLORS.primary}
          dot={{ fill: COLORS.primary, r: 4 }}
          strokeWidth={2}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

interface CyberBarChartProps {
  data: BarChartData[]
  height?: number
}

export const CyberBarChart: React.FC<CyberBarChartProps> = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.borders} vertical={false} />
        <XAxis dataKey="name" stroke={COLORS.muted} style={{ fontSize: '12px' }} />
        <YAxis stroke={COLORS.muted} style={{ fontSize: '12px' }} />
        <Tooltip
          contentStyle={{
            backgroundColor: COLORS.panels,
            border: `1px solid ${COLORS.borders}`,
            borderRadius: '4px',
          }}
          labelStyle={{ color: COLORS.primary }}
        />
        <Bar dataKey="value" fill={COLORS.primary} radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS.primary} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
