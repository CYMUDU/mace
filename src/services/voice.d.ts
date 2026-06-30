declare class VoiceService {
    private audioContext;
    private mediaStream;
    private analyser;
    initAudio(): Promise<void>;
    getFrequencyData(): Uint8Array | null;
    stopAudio(): void;
}
export declare const voiceService: VoiceService;
export {};
