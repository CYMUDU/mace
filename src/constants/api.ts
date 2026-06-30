export const API_ENDPOINTS = {
  VOICE: '/api/voice',
  AGENTS: '/api/agents',
  MESSAGES: '/api/messages',
  SECURITY: '/api/security',
  AI: '/api/ai',
  MEDICAL: '/api/medical',
  NOTES: '/api/notes',
} as const

export const AGENT_TYPES = {
  PLANNER: 'planner',
  RESEARCH: 'research',
  CODE: 'code',
  ANALYSIS: 'analysis',
  SECURITY: 'security',
  SYNTHESIS: 'synthesis',
} as const

export const SYSTEM_STATUS = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  LISTENING: 'listening',
  PROCESSING: 'processing',
} as const
