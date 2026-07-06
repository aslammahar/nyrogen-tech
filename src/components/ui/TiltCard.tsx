"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glowColor?: string;
  noGlow?: boolean;
}

export function TiltCard({
  children,
  className,
  tiltAmount = 8,
  glowColor = "#d4af37",
  noGlow = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [tiltAmount, -tiltAmount]), {
    stiffness: 280, damping: 25,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-tiltAmount, tiltAmount]), {
    stiffness: 280, damping: 25,
  });

  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);
  const background = useMotionTemplate`radial-gradient(320px circle at ${glowX} ${glowY}, ${glowColor}22, transparent 70%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() { px.set(0.5); py.set(0.5); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn("relative [transform-style:preserve-3d] will-change-transform", className)}
    >
      {!noGlow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
          style={{ background }}
        />
      )}
      <div className="relative z-10 h-full" style={{ transform: "translateZ(1px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
