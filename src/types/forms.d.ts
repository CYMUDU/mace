export interface UseFormConfig {
    defaultValues?: Record<string, unknown>;
    mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'all';
}
export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select';
    required?: boolean;
    placeholder?: string;
    options?: Array<{
        label: string;
        value: string;
    }>;
}
export interface PaginationParams {
    page: number;
    limit: number;
    sort?: string;
    order?: 'asc' | 'desc';
}
export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
}
