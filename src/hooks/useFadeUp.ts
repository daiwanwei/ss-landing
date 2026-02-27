"use client";

import { useEffect, useRef } from "react";

export function useFadeUp<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((target, i) => {
      (target as HTMLElement).style.transitionDelay = `${i * 100}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
