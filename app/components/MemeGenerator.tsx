"use client";

import { useState } from "react";

export default function MemeGenerator() {
  const [mainText, setMainText] = useState("COIN");
  const [forText, setForText] = useState("buying");

  const displayMain = mainText.trim().toUpperCase() || "COIN";
  const displayFor = forText.trim() || "buying";

  // Scale font size for preview (square container ~500px wide)
  const previewFontSize = Math.max(
    32,
    Math.min(120, 480 / Math.max(displayMain.length, 2))
  );
  const subFontSize = Math.max(14, previewFontSize * 0.3);
  const padding = Math.round(previewFontSize * 0.4);

  const downloadMeme = async () => {
    const canvas = document.createElement("canvas");
    const S = 1080;
    canvas.width = S;
    canvas.height = S;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "#FFE000";
    ctx.fillRect(0, 0, S, S);

    await document.fonts.ready;

    const mainFontSize = Math.max(
      80,
      Math.min(220, 900 / Math.max(displayMain.length, 2))
    );
    const pad = Math.round(mainFontSize * 0.4);
    const subSize = Math.round(mainFontSize * 0.3);
    const blockHeight = mainFontSize + subSize * 1.8;
    const startY = (S - blockHeight) / 2 + mainFontSize * 0.85;

    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

    ctx.font = `900 ${mainFontSize}px Nunito, 'Arial Black', sans-serif`;
    ctx.fillText(displayMain, pad, startY);

    ctx.font = `600 ${subSize}px Nunito, Arial, sans-serif`;
    ctx.fillText(`for ${displayFor}`, pad, startY + subSize * 1.4);

    const link = document.createElement("a");
    link.download = "coin-meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Live Preview — 1:1 */}
      <div
        className="w-full bg-[#FFE000] border-4 border-black flex flex-col justify-center"
        style={{
          maxWidth: "500px",
          aspectRatio: "1 / 1",
          paddingLeft: `${padding}px`,
          paddingRight: `${padding}px`,
        }}
      >
        <h2
          className="font-black uppercase text-black leading-none"
          style={{ fontSize: `${previewFontSize}px` }}
        >
          {displayMain}
        </h2>
        <p
          className="font-semibold text-black mt-1"
          style={{ fontSize: `${subFontSize}px` }}
        >
          for {displayFor}
        </p>
      </div>

      {/* Controls */}
      <div className="w-full flex flex-col gap-4" style={{ maxWidth: "500px" }}>
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
