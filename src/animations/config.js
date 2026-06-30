export const animations = {
    GLOBE_ROTATION: {
        duration: 30,
        ease: 'linear',
    },
    NEURAL_PULSE: {
        duration: 2,
        ease: 'easeInOut',
    },
    VOICE_WAVEFORM: {
        duration: 0.6,
        ease: 'easeInOut',
    },
    RADAR_SWEEP: {
        duration: 4,
        ease: 'linear',
    },
    PARTICLE_DRIFT: {
        duration: 20,
        ease: 'linear',
    },
    TERMINAL_TYPING: {
        duration: 0.05,
        ease: 'linear',
    },
    CARD_HOVER_GLOW: {
        duration: 0.3,
        ease: 'easeInOut',
    },
    STATUS_PULSE: {
        duration: 2,
        ease: 'easeInOut',
    },
    AGENT_ACTIVITY: {
        duration: 1.5,
        ease: 'easeInOut',
    },
    SECURITY_ALERT_BLINK: {
        duration: 0.5,
        ease: 'easeInOut',
    },
};
export const animationVariants = {
    globeRotate: {
        rotate: 360,
    },
    neuralPulse: {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
    },
    waveform: (index) => ({
        height: [0.5, 1, 0.5],
        transition: {
            delay: index * 0.1,
            duration: 0.6,
            repeat: Infinity,
        },
    }),
    radarSweep: {
        rotate: 360,
    },
    particleDrift: {
        y: [-10, 10, -10],
        x: [-10, 10, -10],
    },
    cardHoverGlow: {
        boxShadow: [
            '0 0 10px rgba(0, 229, 255, 0.1)',
            '0 0 20px rgba(0, 229, 255, 0.3)',
            '0 0 10px rgba(0, 229, 255, 0.1)',
        ],
    },
    statusPulse: {
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
    },
    securityAlertBlink: {
        opacity: [1, 0.3, 1],
    },
};
