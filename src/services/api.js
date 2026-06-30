export class ApiService {
    constructor() {
        this.baseUrl = typeof import.meta.env !== 'undefined' && import.meta.env.VITE_APP_API_URL
            ? import.meta.env.VITE_APP_API_URL
            : 'http://localhost:3000/api';
    }
    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        if (!response.ok)
            throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    }
    async post(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok)
            throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    }
    async put(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok)
            throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    }
    async delete(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'DELETE',
        });
        if (!response.ok)
            throw new Error(`API Error: ${response.statusText}`);
        return response.json();
    }
}
export const apiService = new ApiService();
