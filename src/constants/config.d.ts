export declare const NAVIGATION_ITEMS: readonly [{
    readonly id: "dashboard";
    readonly label: "Dashboard";
    readonly path: "/";
}, {
    readonly id: "agents";
    readonly label: "Agents";
    readonly path: "/agents";
}, {
    readonly id: "voice";
    readonly label: "Voice Control";
    readonly path: "/voice";
}, {
    readonly id: "security";
    readonly label: "Security";
    readonly path: "/security";
}, {
    readonly id: "analytics";
    readonly label: "Analytics";
    readonly path: "/analytics";
}];
export declare const AGENT_STATUSES: {
    readonly IDLE: "idle";
    readonly ACTIVE: "active";
    readonly PROCESSING: "processing";
    readonly ERROR: "error";
};
export declare const SYSTEM_METRICS_UPDATE_INTERVAL = 1000;
export declare const DEFAULT_PAGE_SIZE = 20;
export declare const TOAST_DURATION = 3000;
