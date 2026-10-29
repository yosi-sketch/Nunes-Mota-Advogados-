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
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast prestige styling (Polished Warm Gold, Midnight Royal Navy & Silk Ivory)
  const variantClasses = {
    // Primary Signature: Polished Imperial Warm Gold (Rômulo Marini Advocacia)
    gold:
      "relative border border-[#f5d77f]/70 bg-gradient-to-r from-[#b38827] via-[#d4af37] to-[#f5d77f] text-[#040812] font-extrabold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(212,175,55,0.45),inset_0_1px_1px_rgba(255,255,255,0.7)] " +
      "hover:-translate-y-0.5 hover:from-[#c59b27] hover:via-[#fff4bd] hover:to-[#b38827] hover:text-[#040812] " +
      "hover:shadow-[0_10px_28px_rgba(212,175,55,0.65)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(212,175,55,0.4)]",

    // Secondary Accent: Midnight Royal Navy with subtle Gold Trim
    navy:
      "relative border border-[#d4af37]/40 bg-gradient-to-r from-[#040812] via-[#0c1527] to-[#070d1a] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(4,8,18,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] " +
      "hover:-translate-y-0.5 hover:from-[#070d1a] hover:via-[#121e36] hover:to-[#0c1527] hover:border-[#f5d77f] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(212,175,55,0.35)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(4,8,18,0.4)]",

    // High-Contrast Solid Midnight (ideal on Light folds)
    dark:
      "relative border border-[#121e36] bg-[#070d1a] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(4,8,18,0.3)] hover:-translate-y-0.5 hover:bg-[#0c1527] hover:border-[#d4af37] " +
      "hover:shadow-[0_10px_24px_rgba(212,175,55,0.25)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#070d1a] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:bg-[#faf8f2] hover:border-[#f5d77f] " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.25)]",

    // Outline on Dark Folds
    outline:
      "relative border border-[#d4af37]/40 bg-white/5 text-[#f5d77f] font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#f5d77f] hover:bg-[#d4af37]/15 hover:text-white",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-[#121e36]/25 bg-white/95 text-[#070d1a] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#d4af37] hover:text-[#74520a] hover:bg-[#faf8f2]",

    // WhatsApp Conversion Green CTA
    emerald:
      "relative border border-[#25D366]/70 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] text-white font-bold tracking-[0.14em] " +
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
