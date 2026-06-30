import { useCallback } from 'react';
export const useAudioWaveform = () => {
    const generateWaveformData = useCallback((audioContext) => {
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        return Array.from(dataArray);
    }, []);
    return { generateWaveformData };
};
