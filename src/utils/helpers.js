export const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};
export const formatNumber = (num, decimals = 2) => {
    return num.toFixed(decimals);
};
export const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
};
export const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};
export const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
export const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};
export const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
};
