import { useEffect, useState } from "react";
import { trackPageView } from "../utils/goat";

interface ViewResponse {
  count: number;
}

export const useViewCount = () => {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {      
        await trackPageView();

        const path = window.location.pathname;
        const encoded = encodeURIComponent(path);

        const res = await fetch(
          `https://krishna.goatcounter.com/counter/${encoded}.json`,
          { cache: "no-store" }
        );

        const data: ViewResponse = await res.json();
        setViews(data.count);
      } catch (err) {
        console.error("GoatCounter fetch failed:", err);
        setViews(0);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return { views, loading };
};