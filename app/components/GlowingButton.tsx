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
    | "ruby"
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
  variant = "ruby",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  }[size];

  // High-contrast prestige styling (Carmine Ruby, Graphite Obsidian & Platinum Silk)
  const variantClasses = {
    // Primary Signature: Carmine Ruby Red (Dra. Ângela Maria Gonçalves Rabelo)
    ruby:
      "relative border border-[#dc2626]/40 bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#9e0b19] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(184,20,36,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] " +
      "hover:-translate-y-0.5 hover:from-[#9e0b19] hover:via-[#c01525] hover:to-[#7a0812] hover:text-white " +
      "hover:shadow-[0_10px_28px_rgba(184,20,36,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(184,20,36,0.4)]",

    // Alias for compatibility if variant='gold' is called
    gold:
      "relative border border-[#dc2626]/40 bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#9e0b19] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_22px_-2px_rgba(184,20,36,0.45),inset_0_1px_1px_rgba(255,255,255,0.35)] " +
      "hover:-translate-y-0.5 hover:from-[#9e0b19] hover:via-[#c01525] hover:to-[#7a0812] hover:text-white " +
      "hover:shadow-[0_10px_28px_rgba(184,20,36,0.6)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(184,20,36,0.4)]",

    // Secondary Accent: Executive Charcoal Graphite Slate
    navy:
      "relative border border-slate-700/60 bg-gradient-to-r from-[#0a0d12] via-[#1a202c] to-[#0f141d] text-white font-bold tracking-[0.14em] " +
      "shadow-[0_6px_20px_-2px_rgba(15,23,42,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] " +
      "hover:-translate-y-0.5 hover:from-[#111827] hover:via-[#2b3544] hover:to-[#0f172a] " +
      "hover:shadow-[0_10px_28px_-2px_rgba(71,85,105,0.5)] " +
      "active:translate-y-0 active:shadow-[0_3px_10px_rgba(15,23,42,0.4)]",

    // High-Contrast Solid Midnight (ideal on White folds)
    dark:
      "relative border border-slate-800 bg-[#0a0d12] text-white font-bold tracking-[0.13em] " +
      "shadow-[0_6px_18px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#141922] hover:border-[#b81424] " +
      "hover:shadow-[0_10px_24px_rgba(184,20,36,0.25)]",

    // High-Contrast Pure White (ideal on Dark folds)
    white:
      "relative border border-white bg-white text-[#0a0d12] font-bold tracking-[0.13em] " +
      "shadow-[0_6px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:bg-[#f8fafc] hover:border-slate-200 " +
      "hover:shadow-[0_10px_26px_rgba(255,255,255,0.2)]",

    // Outline on Dark Folds
    outline:
      "relative border border-white/25 bg-white/5 text-white font-bold tracking-[0.13em] backdrop-blur-md " +
      "hover:-translate-y-0.5 hover:border-[#dc2626] hover:bg-white/10 hover:text-white",

    // Outline on Light Folds
    "outline-dark":
      "relative border border-slate-300 bg-white/95 text-[#0a0d12] font-bold tracking-[0.13em] " +
      "hover:-translate-y-0.5 hover:border-[#b81424] hover:text-[#b81424] hover:bg-slate-50",

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
