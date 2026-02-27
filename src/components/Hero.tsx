"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function Hero() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section className="relative z-1 min-h-screen flex items-center justify-center text-center px-6 pt-[120px] pb-20">
      <div className="max-w-[720px]" ref={ref}>
        {/* Shield Icon */}
        <div
          className="w-[120px] h-[120px] mx-auto mb-8 flex items-center justify-center fade-up"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end))",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 12px 48px rgba(59, 130, 246, 0.35)",
            animation: "shieldPulse 3s ease-in-out infinite",
          }}
        >
          <svg
            width={56}
            height={56}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>

        <h1
          className="text-[clamp(2.25rem,6vw,3.5rem)] font-bold leading-tight mb-5 fade-up"
          style={{
            background: "linear-gradient(135deg, #fff, var(--color-accent))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          守護你的數位世界
        </h1>

        <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-[var(--color-text-secondary)] mb-9 leading-relaxed fade-up">
          以 AI 驅動的新世代資安防護，為您的企業提供全方位的威脅偵測、端點保護與合規管理，讓安全不再是負擔。
        </p>

        <div className="flex gap-4 justify-center flex-wrap fade-up">
          <a href="#cta" className="btn btn-primary">
            開始免費試用
          </a>
          <a href="#features" className="btn btn-secondary">
            了解更多
          </a>
        </div>
      </div>
    </section>
  );
}
