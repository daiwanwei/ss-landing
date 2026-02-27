"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,14,26,0.8)] backdrop-blur-[20px] border-b border-[var(--color-card-border)]"
          : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-bold text-xl">
          <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
            <path
              d="M16 2L4 8v8c0 7.73 5.12 14.96 12 16 6.88-1.04 12-8.27 12-16V8L16 2z"
              fill="url(#shield-grad)"
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
                id="shield-grad"
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

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <a
              href="#features"
              className="text-[var(--color-text-secondary)] text-sm font-medium hover:text-[var(--color-text)] transition-colors"
            >
              功能
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="text-[var(--color-text-secondary)] text-sm font-medium hover:text-[var(--color-text)] transition-colors"
            >
              流程
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-[var(--color-text-secondary)] text-sm font-medium hover:text-[var(--color-text)] transition-colors"
            >
              方案
            </a>
          </li>
          <li>
            <a href="#cta" className="btn btn-primary !py-2.5 !px-6 !text-sm">
              免費試用
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-transparent border-none text-[var(--color-text)] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="選單"
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[rgba(10,14,26,0.95)] backdrop-blur-[20px] p-6 flex flex-col gap-5 border-b border-[var(--color-card-border)] list-none md:hidden">
            <li>
              <a
                href="#features"
                onClick={() => setMobileOpen(false)}
                className="text-[var(--color-text-secondary)] font-medium"
              >
                功能
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={() => setMobileOpen(false)}
                className="text-[var(--color-text-secondary)] font-medium"
              >
                流程
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="text-[var(--color-text-secondary)] font-medium"
              >
                方案
              </a>
            </li>
            <li>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary !text-sm"
              >
                免費試用
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
