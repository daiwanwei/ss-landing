"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

const steps = [
  {
    number: 1,
    title: "部署 Agent",
    description:
      "在企業端點安裝輕量化 Agent，支援 Windows、macOS、Linux 全平台。",
  },
  {
    number: 2,
    title: "智能分析",
    description:
      "AI 引擎即時分析網路流量與行為模式，自動建立安全基線。",
  },
  {
    number: 3,
    title: "自動回應",
    description:
      "偵測到威脅時自動執行隔離、封鎖與通報，大幅縮短回應時間。",
  },
];

export default function Process() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section className="relative z-1 py-[100px]" id="process">
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
          三步驟啟動防護
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] text-[1.05rem] mb-12 max-w-[560px] mx-auto fade-up">
          從部署到防護，最快只需 10 分鐘
        </p>
        <div className="flex flex-col md:flex-row items-start justify-center max-w-[900px] mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex-1 text-center px-6 py-8 relative fade-up"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[59px] h-0.5 opacity-40"
                  style={{
                    left: "calc(50% + 28px)",
                    width: "calc(100% - 56px)",
                    background:
                      "linear-gradient(90deg, var(--color-primary-start), var(--color-primary-end))",
                  }}
                />
              )}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 font-bold text-xl text-white relative z-2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end))",
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.35)",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-[1.1rem] font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
