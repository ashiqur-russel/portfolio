"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState<string | undefined>();
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const updateHashState = () => setHash(window.location.hash || undefined);

    const frame = requestAnimationFrame(updateHashState);
    window.addEventListener("hashchange", updateHashState);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", updateHashState);
    };
  }, [params]);

  const updateHash = (newHash: string) => {
    router.push(`#${newHash}`, { scroll: false });
    setHash(`#${newHash}`);
  };

  return { hash, updateHash };
}
