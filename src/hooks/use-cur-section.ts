"use client";
import { useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { MutableRefObject, RefObject, useEffect, useRef } from "react";

type AllowedRef<T extends Element> =
  | RefObject<T | null>
  | MutableRefObject<T | null>;

export default function useCurSection<T extends Element>(
  curSectionRef: AllowedRef<T>,
  amount: number | "all" | "some" = "all",
) {
  const isInView = useInView(curSectionRef as RefObject<Element>, { amount });
  const router = useRouter();
  const lastHashRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isInView) return;
    const sectionId = curSectionRef.current?.id;
    if (!sectionId) return;

    const nextHash = `#${sectionId}`;
    if (lastHashRef.current === nextHash || window.location.hash === nextHash) {
      lastHashRef.current = nextHash;
      return;
    }

    const timeout = setTimeout(() => {
      router.replace(nextHash, { scroll: false });
      lastHashRef.current = nextHash;
    }, 250);

    return () => clearTimeout(timeout);
  }, [isInView, router, curSectionRef]);

  return isInView;
}
