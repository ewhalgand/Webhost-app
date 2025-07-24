import { useState } from "react";

type FetcherOptions = RequestInit & { skipAuth?: boolean };

export function useFetcher<T = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetcher = async (
    url: string,
    options?: FetcherOptions
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...(options?.headers || {}),
        },
        ...options,
      });

      if (!res.ok) {
        const err = await res.json();
        setError(err.error);
        return null;
      }

      const data = await res.json();
      return data as T;
    } catch (err: any) {
      setError(err.message || "Erreur réseau");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetcher, loading, error };
}
