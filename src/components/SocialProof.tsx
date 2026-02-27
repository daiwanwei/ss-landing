"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { useEffect, useRef } from "react";

const logos = ["TSMC", "Foxconn", "MediaTek", "ASUS", "Acer", "Delta"];

const testimonials = [
  {
    quote:
      "導入 SecureShield 後，我們的資安事件回應時間縮短了 80%，團隊可以專注在更有價值的工作上。",
    name: "陳經理",
    role: "科技業 — 資安主管",
    initial: "C",
  },
  {
    quote:
      "零信任架構讓我們在混合辦公環境下依然能確保資料安全，部署過程比預期順暢許多。",
    name: "林總監",
    role: "金融業 — IT 總監",
    initial: "L",
  },
  {
    quote:
      "合規報告功能為我們節省了大量的稽核準備時間，ISO 27001 認證過程變得輕鬆高效。",
    name: "王協理",
    role: "製造業 — 合規長",
    initial: "W",
  },
];

function BigCountUp() {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const target = 1000;
          const duration = 2000;
          const startTime = performance.now();

          function update(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            if (el) {
              el.textContent =
                Math.floor(eased * target).toLocaleString() + "+";
            }
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold"
      style={{
        background:
          "linear-gradient(135deg, var(--color-primary-start), var(--color-accent))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      0
    </div>
  );
}

export default function SocialProof() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section className="relative z-1 py-[100px]" id="proof">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <h2
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-3 fade-up"
          style={{
            background:
              "linear-gradient(135deg, var(--color-text), var(--color-accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          深受企業信賴
        </h2>

        <div className="text-center mb-12 fade-up">
          <BigCountUp />
          <p className="text-[var(--color-text-secondary)] text-[1.1rem] mt-1">
            企業正在使用 SecureShield 守護數位安全
          </p>
        </div>

        {/* Logo Strip */}
        <div className="flex items-center justify-center gap-12 flex-wrap mb-14 fade-up">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-bold text-[1.2rem] text-[var(--color-text-secondary)] opacity-40 tracking-wider transition-all duration-300 hover:opacity-100 hover:text-[var(--color-text)] cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card p-7 fade-up"
            >
              <p className="text-[0.95rem] text-[var(--color-text-secondary)] leading-relaxed mb-5 italic">
                <span className="text-[2rem] text-[var(--color-accent)] leading-none align-[-0.4em] mr-1">
                  &ldquo;
                </span>
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end))",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-[0.9rem]">{t.name}</div>
                  <div className="text-[0.8rem] text-[var(--color-text-secondary)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
