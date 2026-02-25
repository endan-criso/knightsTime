import { useEffect, useState } from "react";

interface ViewResponse {
  count: number;
}

export const useViewCount = (path: string) => {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const res = await fetch(
          `https://krishna.goatcounter.com/counter/${path}.json`
        );

        const data: ViewResponse = await res.json();
        setViews(data.count);
      } catch (error) {
        console.error("Error fetching view count:", error);
        setViews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [path]);

  return { views, loading };
};