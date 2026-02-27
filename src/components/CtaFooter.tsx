"use client";

import { useFadeUp } from "@/hooks/useFadeUp";

export default function CtaFooter() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <>
      {/* CTA Section */}
      <section className="relative z-1 py-[100px]" id="cta">
        <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
          <div
            className="text-center py-16 px-10 relative overflow-hidden fade-up"
            style={{
              borderRadius: "var(--radius-xl)",
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid var(--color-card-border)",
            }}
          >
            {/* Radial glow behind */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(59,130,246,0.08) 0%, transparent 60%)",
              }}
            />
            <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold mb-4 relative">
              準備好守護你的數位世界了嗎？
            </h2>
            <p className="text-[var(--color-text-secondary)] text-[1.05rem] mb-8 max-w-[480px] mx-auto relative">
              立即開始 14 天免費試用，無需綁定信用卡，體驗全方位的資安防護。
            </p>
            <a href="#" className="btn btn-primary relative">
              立即免費試用
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-1 py-10 border-t border-[var(--color-card-border)]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 font-bold text-base">
            <svg width={24} height={24} viewBox="0 0 32 32" fill="none">
              <path
                d="M16 2L4 8v8c0 7.73 5.12 14.96 12 16 6.88-1.04 12-8.27 12-16V8L16 2z"
                fill="url(#shield-grad-footer)"
              />
              <path
                d="M13 16l2 2 4-4"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="shield-grad-footer"
                  x1={4}
                  y1={2}
                  x2={28}
                  y2={26}
                >
                  <stop stopColor="#3b82f6" />
                  <stop offset={1} stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            SecureShield
          </a>
          <ul className="flex gap-6 list-none">
            <li>
              <a
                href="#"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                隱私政策
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                服務條款
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                聯繫我們
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                部落格
              </a>
            </li>
          </ul>
          <span className="text-xs text-[var(--color-text-secondary)]">
            &copy; 2026 SecureShield. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
