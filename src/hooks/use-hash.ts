"use client";
import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState<string | undefined>(undefined);

  useEffect(() => {
    const updateHashState = () => setHash(window.location.hash || undefined);

    updateHashState();
    window.addEventListener("hashchange", updateHashState);

    return () => {
      window.removeEventListener("hashchange", updateHashState);
    };
  }, []);

  const updateHash = (newHash: string) => {
    const nextHash = newHash.startsWith("#") ? newHash : `#${newHash}`;
    if (typeof window === "undefined") return;

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
      setHash(nextHash);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      setHash(nextHash);
    }
  };

  return { hash, updateHash };
}
