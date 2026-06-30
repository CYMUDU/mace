import { useEffect, useRef } from 'react';
export const useAnimationFrame = (callback) => {
    const animationIdRef = useRef();
    useEffect(() => {
        const animate = (time) => {
            callback(time);
            animationIdRef.current = requestAnimationFrame(animate);
        };
        animationIdRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [callback]);
};
