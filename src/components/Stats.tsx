"use client";

import { useEffect, useRef } from "react";

const stats = [
  {
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    colorClass: "bg-[rgba(59,130,246,0.15)] text-[var(--color-primary-start)]",
    target: 2847563,
    suffix: "+",
    decimals: 0,
    label: "已攔截威脅",
  },
  {
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    colorClass: "bg-[rgba(6,182,212,0.15)] text-[var(--color-primary-end)]",
    target: 0.3,
    suffix: "ms",
    decimals: 1,
    label: "平均回應時間",
  },
  {
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} />
        <line x1={2} y1={12} x2={22} y2={12} />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    colorClass: "bg-[rgba(245,158,11,0.15)] text-[var(--color-warning)]",
    target: 58000,
    suffix: "+",
    decimals: 0,
    label: "監控端點數",
  },
  {
    icon: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    colorClass: "bg-[rgba(16,185,129,0.15)] text-[var(--color-success)]",
    target: 99.99,
    suffix: "%",
    decimals: 2,
    label: "系統可用率",
  },
];

function CountUpNumber({
  target,
  suffix,
  decimals,
}: {
  target: number;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          function update(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            if (el) {
              if (target >= 10000) {
                el.textContent = Math.floor(current).toLocaleString() + suffix;
              } else {
                el.textContent = current.toFixed(decimals) + suffix;
              }
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
  }, [target, suffix, decimals]);

  return (
    <div
      ref={ref}
      className="text-[2rem] font-bold mb-1"
      style={{
        background:
          "linear-gradient(135deg, var(--color-text), var(--color-accent))",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      0
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-1 py-[100px]" id="stats">
      <div className="max-w-[1200px] mx-auto px-6">
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
          即時威脅概覽
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] text-[1.05rem] mb-12 max-w-[560px] mx-auto fade-up">
          全球部署、全天候監控，守護每個端點的安全
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-7 text-center fade-up"
            >
              <div
                className={`w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center mx-auto mb-4 ${stat.colorClass}`}
              >
                {stat.icon}
              </div>
              <CountUpNumber
                target={stat.target}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <div className="text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
