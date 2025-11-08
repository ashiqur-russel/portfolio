"use client";
import { useInView } from "framer-motion";
import { MutableRefObject, RefObject, useEffect } from "react";

type AllowedRef<T extends Element> =
  | RefObject<T | null>
  | MutableRefObject<T | null>;

export default function useCurSection<T extends Element>(
  curSectionRef: AllowedRef<T>,
  amount: number | "all" | "some" = "some",
) {
  const isInView = useInView(curSectionRef as RefObject<Element>, { amount });

  useEffect(() => {
    if (!isInView) return;
    const sectionId = curSectionRef.current?.id;
    if (!sectionId) return;

    const nextHash = `#${sectionId}`;

    const timeout = setTimeout(() => {
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, "", nextHash);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [isInView, curSectionRef]);

  return isInView;
}
