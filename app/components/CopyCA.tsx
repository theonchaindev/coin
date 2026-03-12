"use client";

import { useState } from "react";

export default function CopyCA({ ca }: { ca: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-2xl">
      <div className="bg-black/10 px-5 py-3 flex-1 font-mono text-sm text-black break-all">
        {ca}
      </div>
      <button
        onClick={copy}
        className="bg-black text-[#FFE000] font-black uppercase tracking-widest px-8 py-3 text-sm hover:bg-black/80 active:scale-95 transition-all whitespace-nowrap"
      >
        {copied ? "COPIED ✓" : "COPY CA"}
      </button>
    </div>
  );
}
