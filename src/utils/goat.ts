declare global {
  interface Window {
    goatcounter?: {
      count: (opts?: { path?: string }) => void;
    };
  }
}

export const trackPageView = (path: string) => {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path });
  }
};