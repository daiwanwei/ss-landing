"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx={12} cy={12} r={3} />
      </svg>
    ),
    title: "即時威脅偵測",
    description:
      "採用先進 AI 模型進行異常行為分析，即時識別已知與未知威脅，將攻擊阻斷於萌芽階段。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={3} width={20} height={14} rx={2} />
        <line x1={8} y1={21} x2={16} y2={21} />
        <line x1={12} y1={17} x2={12} y2={21} />
      </svg>
    ),
    title: "端點防護",
    description:
      "輕量化 Agent 部署於所有裝置，提供全面的端點管理與保護，確保每個接入點的安全。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={3} y={11} width={18} height={11} rx={2} />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx={12} cy={16} r={1} />
      </svg>
    ),
    title: "零信任架構",
    description:
      "基於最小權限原則與持續驗證機制，確保每次存取都經過身份確認與權限審核。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "合規報告",
    description:
      "一鍵產出符合 ISO 27001、SOC2 等國際標準的合規報告，輕鬆應對稽核與審查需求。",
  },
];

export default function Features() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section className="relative z-1 py-[100px]" id="features">
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
          核心防護功能
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] text-[1.05rem] mb-12 max-w-[560px] mx-auto fade-up">
          從偵測到回應，全面覆蓋企業資安需求
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-8 fade-up"
            >
              <div
                className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end))",
                  boxShadow: "0 4px 16px rgba(59, 130, 246, 0.3)",
                }}
              >
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon.props.children}
                </svg>
              </div>
              <h3 className="text-[1.2rem] font-semibold mb-2.5">
                {feature.title}
              </h3>
              <p className="text-[0.95rem] text-[var(--color-text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
