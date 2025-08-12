'use client'
// pages/index.js
import { useState, useRef } from "react";
import { emojiMap } from "../data/emojiMap";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const [glyphs, setGlyphs] = useState([]);
  const outputRef = useRef();

  const convert = (t) => {
    const arr = t.toUpperCase().split("").map(ch => emojiMap[ch] || (ch === " " ? " " : "" ));
    setGlyphs(arr.filter((g, i) => g !== ""));
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setText(val);
    convert(val);
  };

  const handleCopy = async () => {
    const outText = glyphs.join("");
    await navigator.clipboard.writeText(outText);
    alert("Copied emotocode!");
  };


  const clearAll = () => { setText(""); setGlyphs([]); };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-[#071029] to-[#061022]">
      <div className="w-full max-w-3xl bg-card/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/5">
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="rounded-lg">
              <rect width="24" height="24" rx="6" fill="#6EE7B7" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fill="#071029" fontWeight="700">E</text>
            </svg>
            <div>
              <h1 className="text-xl font-semibold">Emotocode</h1>
              <p className="text-sm text-white/60">Turn text into a memorable emoji language</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={clearAll} className="px-3 py-2 text-sm bg-white/5 rounded-md hover:bg-white/8">Clear</button>
            <button onClick={handleCopy} className="px-3 py-2 text-sm bg-primary/20 rounded-md hover:bg-primary/30">Copy</button>
          </div>
        </header>

        <div className=" grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Type your message</label>
            <textarea
              value={text}
              onChange={handleInput}
              placeholder="Type something like: Hello world"
              rows={6}
              className="w-full p-4 rounded-lg bg-[#06182b] border border-white/6 placeholder:text-white/40 resize-none"
            />

            <div className="mt-4">
              <label className="text-sm mb-2 block">Emoji Output</label>
              <div ref={outputRef} className="p-4 rounded-lg bg-black/20 border border-white/5 min-h-[80px]">
                <AnimatePresence>
                  <div className="flex flex-wrap gap-2 items-center">
                    {glyphs.length === 0 && <span className="text-white/40">Converted emojis will appear here</span>}
                    {glyphs.map((g, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, delay: i * 0.02 }}
                        className="text-3xl p-1 rounded hover:scale-110 transition-transform select-none"
                        title={g}
                      >
                        {g}
                      </motion.span>
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            </div>
            <hr className="my-4 border-white/5" />
          </div>

          <aside className="p-4 rounded-lg bg-[#061726] border border-white/5">
            <h3 className="font-medium">Legend</h3>
            <p className="text-sm text-white/60 mb-4">A quick lookup for A–Z mapping</p>

            <div className="grid grid-cols-3 gap-2 text-lg">
              {Object.entries(emojiMap).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2 text-sm p-2 rounded hover:bg-white/3">
                  <div className="w-8 h-8 flex items-center justify-center text-xl">{v}</div>
                  <div className="text-xs">{k}</div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-sm text-white/50">Share & experiment — turn your tweets, bios, or messages into emoji art.</p>
            </div>
          </aside>
        </div>

        <footer className="mt-6 text-sm text-white/40 flex justify-between">
          <div>Made with ♥︎ • Emotocode</div>
          <div>Tip: Try typing <code className="bg-white/5 px-2 rounded">hello emotocode</code></div>
        </footer>
      </div>
    </main>
  );
}
