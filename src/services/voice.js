class VoiceService {
    constructor() {
        this.audioContext = null;
        this.mediaStream = null;
        this.analyser = null;
    }
    async initAudio() {
        try {
            this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);
            this.analyser = this.audioContext.createAnalyser();
            source.connect(this.analyser);
        }
        catch (error) {
            console.error('Failed to initialize audio:', error);
        }
    }
    getFrequencyData() {
        if (!this.analyser)
            return null;
        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(dataArray);
        return dataArray;
    }
    stopAudio() {
        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach((track) => track.stop());
        }
    }
}
export const voiceService = new VoiceService();
