export declare const animations: {
    readonly GLOBE_ROTATION: {
        readonly duration: 30;
        readonly ease: "linear";
    };
    readonly NEURAL_PULSE: {
        readonly duration: 2;
        readonly ease: "easeInOut";
    };
    readonly VOICE_WAVEFORM: {
        readonly duration: 0.6;
        readonly ease: "easeInOut";
    };
    readonly RADAR_SWEEP: {
        readonly duration: 4;
        readonly ease: "linear";
    };
    readonly PARTICLE_DRIFT: {
        readonly duration: 20;
        readonly ease: "linear";
    };
    readonly TERMINAL_TYPING: {
        readonly duration: 0.05;
        readonly ease: "linear";
    };
    readonly CARD_HOVER_GLOW: {
        readonly duration: 0.3;
        readonly ease: "easeInOut";
    };
    readonly STATUS_PULSE: {
        readonly duration: 2;
        readonly ease: "easeInOut";
    };
    readonly AGENT_ACTIVITY: {
        readonly duration: 1.5;
        readonly ease: "easeInOut";
    };
    readonly SECURITY_ALERT_BLINK: {
        readonly duration: 0.5;
        readonly ease: "easeInOut";
    };
};
export declare const animationVariants: {
    readonly globeRotate: {
        readonly rotate: 360;
    };
    readonly neuralPulse: {
        readonly scale: readonly [1, 1.05, 1];
        readonly opacity: readonly [0.8, 1, 0.8];
    };
    readonly waveform: (index: number) => {
        height: number[];
        transition: {
            delay: number;
            duration: number;
            repeat: number;
        };
    };
    readonly radarSweep: {
        readonly rotate: 360;
    };
    readonly particleDrift: {
        readonly y: readonly [-10, 10, -10];
        readonly x: readonly [-10, 10, -10];
    };
    readonly cardHoverGlow: {
        readonly boxShadow: readonly ["0 0 10px rgba(0, 229, 255, 0.1)", "0 0 20px rgba(0, 229, 255, 0.3)", "0 0 10px rgba(0, 229, 255, 0.1)"];
    };
    readonly statusPulse: {
        readonly scale: readonly [1, 1.2, 1];
        readonly opacity: readonly [0.6, 1, 0.6];
    };
    readonly securityAlertBlink: {
        readonly opacity: readonly [1, 0.3, 1];
    };
};
