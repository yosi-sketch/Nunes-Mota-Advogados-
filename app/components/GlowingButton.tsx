"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "silver"
    | "platinum"
    | "gold"
    | "navy"
    | "dark"
    | "white"
    | "emerald"
    | "outline"
    | "outline-dark";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "silver",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast prestige styling (Polished 3D Platinum Silver, Deep Oceanic Navy & WhatsApp Emerald)
  const variantClasses = {
    // Primary Signature: 3D Polished Metallic Platinum Silver (Nunes & Mota Advogados)
    silver:
      "relative border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#ffffff] to-[#e2e8f0] text-[#050e18] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(203,213,225,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#e2e8f0] hover:via-[#f8fafc] hover:to-[#cbd5e1] hover:text-[#050e18] " +
      "hover:shadow-[0_10px_28px_rgba(255,255,255,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(203,213,225,0.4)]",

    platinum:
      "relative border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#ffffff] to-[#e2e8f0] text-[#050e18] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(203,213,225,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#e2e8f0] hover:via-[#f8fafc] hover:to-[#cbd5e1] hover:text-[#050e18] " +
      "hover:shadow-[0_10px_28px_rgba(255,255,255,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(203,213,225,0.4)]",

    // Backward-compatible alias to signature platinum
    gold:
      "relative border border-white/90 bg-gradient-to-r from-[#cbd5e1] via-[#ffffff] to-[#e2e8f0] text-[#050e18] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(203,213,225,0.45),inset_0_1px_1px_rgba(255,255,255,0.95)] " +
      "hover:-translate-y-0.5 hover:from-[#e2e8f0] hover:via-[#f8fafc] hover:to-[#cbd5e1] hover:text-[#050e18] " +
      "hover:shadow-[0_10px_28px_rgba(255,255,255,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(203,213,225,0.4)]",

    // Secondary Accent: Deep Oceanic Navy with Silver Trim
    navy:
      "relative border border-[#cbd5e1]/40 bg-gradient-to-r from-[#050e18] via-[#0d2035] to-[#081626] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(5,14,24,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] " +
      "hover:-translate-y-0.5 hover:from-[#081626] hover:via-[#16365b] hover:to-[#0d2035] hover:border-white " +
      "hover:shadow-[0_10px_28px_-2px_rgba(203,213,225,0.3)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(5,14,24,0.4)]",

    // High-Contrast Solid Midnight Navy (ideal on Light folds)
    dark:
      "relative border border-[#16365b] bg-[#081626] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(5,14,24,0.3)] hover:-translate-y-0.5 hover:bg-[#0d2035] hover:border-[#cbd5e1] " +
      "hover:shadow-[0_10px_24px_rgba(203,213,225,0.25)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#081626] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#f8fafc] hover:border-[#cbd5e1] " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.25)]",

    // Outline on Dark Folds
    outline:
      "relative border border-[#cbd5e1]/40 bg-white/5 text-[#f1f5f9] font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-white hover:bg-white/15 hover:text-white",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-[#16365b]/25 bg-white/95 text-[#081626] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#16365b] hover:text-[#050e18] hover:bg-[#f8fafc]",

    // WhatsApp Conversion Green CTA
    emerald:
      "relative border border-[#25D366]/70 bg-gradient-to-r from-[#0b3518] via-[#128C7E] to-[#075E54] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 hover:brightness-110 " +
      "hover:shadow-[0_10px_26px_rgba(37,211,102,0.55)]",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2.5 rounded-lg font-bold uppercase transition-all duration-200 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
