interface UseLocalStorageOptions {
    serialize?: (value: unknown) => string;
    deserialize?: (value: string) => unknown;
}
export declare const useLocalStorage: <T>(key: string, initialValue: T, options?: UseLocalStorageOptions) => readonly [T, (value: T | ((val: T) => T)) => void];
export declare const useAsync: <T, E = unknown>(asyncFunction: () => Promise<T>, immediate?: boolean) => {
    execute: () => Promise<T>;
    status: "idle" | "pending" | "success" | "error";
    value: T;
    error: E;
};
export {};
