class VoiceService {
  private audioContext: AudioContext | null = null
  private mediaStream: MediaStream | null = null
  private analyser: AnalyserNode | null = null

  async initAudio(): Promise<void> {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true })
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const source = this.audioContext.createMediaStreamSource(this.mediaStream)
      this.analyser = this.audioContext.createAnalyser()
      source.connect(this.analyser)
    } catch (error) {
      console.error('Failed to initialize audio:', error)
    }
  }

  getFrequencyData(): Uint8Array | null {
    if (!this.analyser) return null
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.getByteFrequencyData(dataArray)
    return dataArray
  }

  stopAudio(): void {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop())
    }
  }
}

export const voiceService = new VoiceService()
