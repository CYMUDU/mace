export interface NavItem {
  id: string
  label: string
  icon: string
  active?: boolean
}

export interface SystemStatus {
  cpu: number
  ram: number
  network: number
  battery: number
  voiceActive: boolean
}

export interface Message {
  id: string
  sender: 'user' | 'mace'
  content: string
  timestamp: Date
}

export interface Task {
  id: string
  title: string
  status: 'pending' | 'in-progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
}

export interface Agent {
  id: string
  name: string
  status: 'idle' | 'active' | 'processing'
  progress: number
  description: string
}

export interface SecurityAlert {
  id: string
  type: 'threat' | 'warning' | 'info'
  title: string
  timestamp: Date
  severity: 'low' | 'medium' | 'high'
}

export interface AIModel {
  id: string
  name: string
  trainingProgress: number
  efficiency: number
  active: boolean
}

export interface ChartDataPoint {
  name: string
  value: number
  timestamp?: Date
}
