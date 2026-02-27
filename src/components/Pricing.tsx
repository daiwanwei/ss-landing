"use client";

import { useState } from "react";
import { useFadeUp } from "@/hooks/useFadeUp";

const CheckIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-success)"
    strokeWidth={2}
    className="shrink-0"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const plans = [
  {
    name: "Basic",
    desc: "適合小型團隊與新創公司",
    monthly: 29,
    yearly: 23,
    features: ["最多 50 個端點", "即時威脅偵測", "基本合規報告", "Email 支援"],
    featured: false,
    cta: "開始試用",
    ctaStyle: "btn-secondary",
  },
  {
    name: "Pro",
    desc: "適合中型企業與成長團隊",
    monthly: 79,
    yearly: 63,
    features: [
      "最多 500 個端點",
      "AI 異常行為分析",
      "零信任架構",
      "ISO 27001 / SOC2 報告",
      "24/7 優先支援",
    ],
    featured: true,
    cta: "開始試用",
    ctaStyle: "btn-primary",
  },
  {
    name: "Enterprise",
    desc: "適合大型企業與客製需求",
    monthly: null,
    yearly: null,
    features: [
      "無限端點",
      "全功能存取",
      "客製化整合 (SIEM/SOAR)",
      "專屬客戶成功經理",
      "SLA 保證 99.99%",
    ],
    featured: false,
    cta: "聯繫業務",
    ctaStyle: "btn-secondary",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section className="relative z-1 py-[100px]" id="pricing">
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
          選擇適合的方案
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] text-[1.05rem] mb-12 max-w-[560px] mx-auto fade-up">
          靈活方案，從新創到大型企業都能找到最佳選擇
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12 fade-up">
          <span
            className={`text-[0.95rem] font-medium transition-colors ${
              !isYearly
                ? "text-[var(--color-text)]"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            月繳
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-[52px] h-7 rounded-full relative cursor-pointer border border-[var(--color-card-border)] transition-all duration-300 ${
              isYearly
                ? "bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-end)]"
                : "bg-[rgba(255,255,255,0.1)]"
            }`}
          >
            <div
              className="w-[22px] h-[22px] rounded-full bg-white absolute top-[2px] left-[2px] shadow transition-transform duration-300"
              style={{
                transform: isYearly ? "translateX(24px)" : "translateX(0)",
                transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              }}
            />
          </button>
          <span
            className={`text-[0.95rem] font-medium transition-colors ${
              isYearly
                ? "text-[var(--color-text)]"
                : "text-[var(--color-text-secondary)]"
            }`}
          >
            年繳
            <small className="text-[var(--color-success)] ml-1">省 20%</small>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[400px] md:max-w-none mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-9 relative overflow-hidden fade-up ${
                plan.featured
                  ? "border-transparent"
                  : ""
              }`}
              style={
                plan.featured
                  ? {
                      background:
                        "linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end)) border-box",
                      border: "2px solid transparent",
                    }
                  : undefined
              }
            >
              {plan.featured && (
                <div
                  className="absolute top-4 right-[-28px] text-white text-xs font-semibold py-1 px-9 rotate-45"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end))",
                  }}
                >
                  推薦
                </div>
              )}
              <div className="text-[1.1rem] font-semibold mb-2">
                {plan.name}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] mb-5">
                {plan.desc}
              </div>
              {plan.monthly !== null ? (
                <div className="text-[2.5rem] font-bold mb-1">
                  <span className="text-[1.2rem] align-super">$</span>
                  {isYearly ? plan.yearly : plan.monthly}
                  <span className="text-sm font-normal text-[var(--color-text-secondary)]">
                    {" "}
                    / 月
                  </span>
                </div>
              ) : (
                <div className="text-[2rem] font-bold mb-1">聯繫我們</div>
              )}
              <ul className="list-none my-6 space-y-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-[0.9rem] text-[var(--color-text-secondary)] py-1"
                  >
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`btn w-full mt-2 ${plan.ctaStyle}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
