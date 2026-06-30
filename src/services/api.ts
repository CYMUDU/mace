export class ApiService {
  private baseUrl = typeof import.meta.env !== 'undefined' && import.meta.env.VITE_APP_API_URL 
    ? import.meta.env.VITE_APP_API_URL 
    : 'http://localhost:3000/api'

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`)
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)
    return response.json()
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)
    return response.json()
  }

  async put<T>(endpoint: string, data: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)
    return response.json()
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)
    return response.json()
  }
}

export const apiService = new ApiService()
