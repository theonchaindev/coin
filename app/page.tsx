import MemeGenerator from "./components/MemeGenerator";
import CopyCA from "./components/CopyCA";

const CA = "8wkrBxyBRo1gKkK3AsndAZyj3CQi6iSwBySLbuNRpump";

export default function Home() {
  return (
    <main className="bg-[#FFE000] font-nunito">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16">
        <div className="select-none inline-block">
          <h1
            className="font-black leading-none tracking-tight uppercase text-black"
            style={{ fontSize: "clamp(64px, 16vw, 220px)" }}
          >
            WEBSITE
            <sup
              className="align-super font-black"
              style={{ fontSize: "0.32em" }}
            >
              ®
            </sup>
          </h1>
          <p
            className="font-semibold text-black mt-2 tracking-wide"
            style={{ fontSize: "clamp(18px, 3vw, 40px)" }}
          >
            for information
          </p>
        </div>
      </section>

      {/* CA Section */}
      <section className="py-20 px-6 border-t-4 border-black flex flex-col items-center gap-6">
        <h2
          className="font-black uppercase text-black tracking-widest text-center"
          style={{ fontSize: "clamp(16px, 2.5vw, 28px)" }}
        >
          Contract Address
        </h2>
        <CopyCA ca={CA} />
      </section>

      {/* Meme Generator */}
      <section className="py-20 px-6 border-t-4 border-black">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-black uppercase text-black tracking-widest text-center mb-12"
            style={{ fontSize: "clamp(24px, 4vw, 48px)" }}
          >
            Meme Generator
          </h2>
          <MemeGenerator />
        </div>
      </section>

      {/* X Community */}
      <section className="py-20 px-6 border-t-4 border-black flex flex-col items-center gap-8">
        <h2
          className="font-black uppercase text-black tracking-widest"
          style={{ fontSize: "clamp(16px, 2.5vw, 28px)" }}
        >
          Community
        </h2>
        <a
          href="https://x.com/i/communities/2031671566119973172"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-[#FFE000] font-black uppercase tracking-widest px-12 py-5 hover:bg-black/80 active:scale-95 transition-all"
          style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
        >
          Join on X →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black py-8 text-center">
        <p className="font-black uppercase text-black/40 text-xs tracking-widest">
          COIN © 2025
        </p>
      </footer>
    </main>
  );
}
