"use client";

import Image from "next/image";
import { useState } from "react";

const CA = "8wkrBxyBRo1gKkK3AsndAZyj3CQi6iSwBySLbuNRpump";
const SHORT_CA = `${CA.slice(0, 6)}...${CA.slice(-4)}`;

export default function Navbar() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFE000] border-b-4 border-black px-6 h-16 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/coin-logo.png"
          alt="COIN"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
          priority
        />
      </div>

      {/* CA + X */}
      <div className="flex items-center gap-3">
        <button
          onClick={copy}
          className="flex items-center gap-2 bg-black/10 border-2 border-black px-3 py-1.5 hover:bg-black/20 transition-colors"
        >
          <span className="font-mono text-xs text-black hidden sm:block">
            {SHORT_CA}
          </span>
          <span className="font-black uppercase text-black text-xs tracking-widest">
            {copied ? "✓" : "CA"}
          </span>
        </button>

        <a
          href="https://x.com/i/communities/2031671566119973172"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-[#FFE000] font-black uppercase text-xs tracking-widest px-4 py-2 hover:bg-black/80 transition-colors"
        >
          X Comm
        </a>
      </div>
    </nav>
  );
}
