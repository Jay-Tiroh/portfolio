"use client";
import React, { useEffect, useRef } from "react";

interface AnimateProps {
  type?: string;
  children: React.ReactNode;
}

export default function Animate({ type = "pop-y", children }: AnimateProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={type}>
      {children}
    </div>
  );
}
