declare global {
  interface Window {
    goatcounter?: {
      count: (opts?: { path?: string }) => void;
    };
  }
}

export const trackPageView = () => {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
     window.goatcounter.count({ path: window.location.pathname });
  }
};