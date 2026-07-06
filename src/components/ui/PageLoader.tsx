"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const steps = [15, 35, 55, 75, 90, 100];
    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setProgress(steps[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setVisible(false), 700);
        }, 300);
      }
    }, 220);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "#111827",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease-in-out",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Radial blue glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.15), transparent)",
        }}
      />

      {/* Outer spinning ring */}
      <div className="absolute" style={{ width: 220, height: 220 }}>
        <svg
          viewBox="0 0 220 220"
          className="w-full h-full"
          style={{ animation: "spin 2.4s linear infinite" }}
        >
          <circle
            cx="110" cy="110" r="100"
            fill="none"
            stroke="rgba(37,99,235,0.18)"
            strokeWidth="1"
          />
          <circle
            cx="110" cy="110" r="100"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeDasharray="60 570"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Middle spinning ring (reverse) */}
      <div className="absolute" style={{ width: 170, height: 170 }}>
        <svg
          viewBox="0 0 170 170"
          className="w-full h-full"
          style={{ animation: "spin-reverse 1.8s linear infinite" }}
        >
          <circle
            cx="85" cy="85" r="78"
            fill="none"
            stroke="rgba(59,130,246,0.12)"
            strokeWidth="1"
          />
          <circle
            cx="85" cy="85" r="78"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="35 455"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Logo */}
      <div
        className="relative z-10 flex flex-col items-center gap-6"
        style={{ animation: "fadeInUp 0.6s ease-out both" }}
      >
        <div
          className="relative"
          style={{
            filter: "drop-shadow(0 0 24px rgba(37,99,235,0.5))",
            animation: "pulse-logo 2s ease-in-out infinite",
          }}
        >
          <Image
            src="/nyrogen-logo.png"
            alt="Nyrogen Technologies"
            width={130}
            height={99}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Company name text */}
        <div className="text-center" style={{ animation: "fadeInUp 0.6s ease-out 0.15s both" }}>
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-accent-blue opacity-70">
            Loading...
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ width: 240, animation: "fadeInUp 0.6s ease-out 0.3s both" }}
      >
        <div
          className="w-full h-px rounded-full overflow-hidden"
          style={{ background: "rgba(37,99,235,0.15)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #2563EB, #60A5FA)",
              transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
              boxShadow: "0 0 10px rgba(37,99,235,0.8)",
            }}
          />
        </div>
        <span
          className="text-xs font-mono font-bold"
          style={{ color: "rgba(96,165,250,0.6)" }}
        >
          {progress}%
        </span>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-logo {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(37,99,235,0.4)); }
          50%       { filter: drop-shadow(0 0 32px rgba(37,99,235,0.8)); }
        }
      `}</style>
    </div>
  );
}
