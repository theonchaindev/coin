"use client";

import { useState } from "react";

export default function MemeGenerator() {
  const [mainText, setMainText] = useState("COIN");
  const [forText, setForText] = useState("buying");

  const displayMain = mainText.trim().toUpperCase() || "COIN";
  const displayFor = forText.trim() || "buying";

  // Scale font size based on text length for preview
  const previewFontSize = Math.max(
    32,
    Math.min(110, 460 / Math.max(displayMain.length, 2))
  );
  const subFontSize = Math.max(14, previewFontSize * 0.3);

  const downloadMeme = async () => {
    const canvas = document.createElement("canvas");
    const W = 1200;
    const H = 630;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d")!;

    // Background
    ctx.fillStyle = "#FFE000";
    ctx.fillRect(0, 0, W, H);

    await document.fonts.ready;

    // Main text
    const mainFontSize = Math.max(
      72,
      Math.min(200, 800 / Math.max(displayMain.length, 2))
    );
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.font = `900 ${mainFontSize}px Nunito, 'Arial Black', sans-serif`;
    ctx.fillText(displayMain, W / 2, H / 2 + mainFontSize * 0.15);

    // Subtext
    const subSize = Math.round(mainFontSize * 0.32);
    ctx.font = `600 ${subSize}px Nunito, Arial, sans-serif`;
    ctx.fillText(
      `for ${displayFor}`,
      W / 2,
      H / 2 + mainFontSize * 0.15 + subSize * 1.8
    );

    const link = document.createElement("a");
    link.download = "coin-meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Live Preview */}
      <div
        className="w-full bg-[#FFE000] flex flex-col items-center justify-center border-4 border-black"
        style={{ maxWidth: "600px", aspectRatio: "1200/630" }}
      >
        <h2
          className="font-black uppercase text-black leading-none text-center px-6"
          style={{ fontSize: `${previewFontSize}px` }}
        >
          {displayMain}
        </h2>
        <p
          className="font-semibold text-black text-center mt-3"
          style={{ fontSize: `${subFontSize}px` }}
        >
          for {displayFor}
        </p>
      </div>

      {/* Controls */}
      <div className="w-full flex flex-col gap-4" style={{ maxWidth: "600px" }}>
        <div>
          <label className="block font-black uppercase text-black text-xs tracking-widest mb-2">
            Main Text
          </label>
          <input
            type="text"
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
            placeholder="COIN"
            maxLength={20}
            className="w-full bg-black/10 border-2 border-black px-4 py-3 text-black font-black text-xl uppercase placeholder:text-black/30 outline-none focus:bg-black/20 transition-colors"
          />
        </div>
        <div>
          <label className="block font-black uppercase text-black text-xs tracking-widest mb-2">
            for ___
          </label>
          <input
            type="text"
            value={forText}
            onChange={(e) => setForText(e.target.value)}
            placeholder="buying"
            maxLength={40}
            className="w-full bg-black/10 border-2 border-black px-4 py-3 text-black font-bold text-lg placeholder:text-black/30 outline-none focus:bg-black/20 transition-colors"
          />
        </div>
        <button
          onClick={downloadMeme}
          className="w-full bg-black text-[#FFE000] font-black text-base uppercase py-4 tracking-widest hover:bg-black/80 active:scale-95 transition-all mt-2"
        >
          ↓ Download Meme
        </button>
      </div>
    </div>
  );
}
