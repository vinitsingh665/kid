"use client";

import { useState } from "react";

const ageOptions = ["3-5", "6-8", "9-12"];

export default function WorksheetGenerator() {
  const [selectedAge, setSelectedAge] = useState("6-8");
  const [topic, setTopic] = useState("Maths");
  const [subTopic, setSubTopic] = useState("Addition");
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <section
      id="worksheet-generator"
      className="py-14 relative overflow-hidden bg-white"
      aria-labelledby="generator-heading"
    >
      {/* Decorative confetti / doodle elements */}
      {/* Top-left star */}
      <div className="absolute top-6 left-6 text-yellow-400 text-3xl star-spin opacity-80 select-none pointer-events-none">✦</div>
      {/* Bottom-left star */}
      <div className="absolute bottom-6 left-10 text-yellow-300 text-xl star-spin opacity-60 select-none pointer-events-none" style={{ animationDelay: "1s" }}>★</div>
      {/* Top-right squiggle */}
      <svg
        className="absolute top-4 right-12 opacity-30 pointer-events-none"
        width="80" height="40" viewBox="0 0 80 40" fill="none"
      >
        <path d="M4 20 Q20 4 36 20 Q52 36 68 20 Q76 12 80 16" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
      {/* Bottom right confetti ring */}
      <svg className="absolute bottom-8 right-8 opacity-20 pointer-events-none" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="24" stroke="#FF6B9D" strokeWidth="3" fill="none" strokeDasharray="8 6"/>
      </svg>
      {/* Mid-left small squiggle */}
      <svg
        className="absolute left-1/4 bottom-4 opacity-25 pointer-events-none"
        width="60" height="30" viewBox="0 0 60 30" fill="none"
      >
        <path d="M2 15 Q12 2 22 15 Q32 28 42 15 Q50 5 58 10" stroke="#4ECDC4" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
      {/* Top center small star */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-pink-300 text-lg opacity-50 floating select-none pointer-events-none">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* ── Left: Text + CTA ── */}
          <div className="flex-1 text-center lg:text-left max-w-sm mx-auto lg:mx-0">
            <h2
              id="generator-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-snug"
            >
              Create Your Own
              <br />
              <span className="text-gradient-primary">Worksheets &amp; Activities</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Your child&apos;s personalized learning materials in seconds.
            </p>
            <button
              id="generator-cta-btn"
              className="btn-primary mt-7 px-7 py-3.5 text-sm"
            >
              Generate Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* ── Right: Generator Card ── */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-5 sm:gap-8">

                {/* Step 1 — Choose Age */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0"
                      style={{ background: "#FF6B35" }}
                    >
                      1
                    </div>
                    <span className="text-xs font-bold text-gray-600 leading-tight">Choose Age</span>
                  </div>

                  {/* All 3 age pills in ONE row */}
                  <div className="flex items-center gap-1.5 flex-nowrap">
                    {ageOptions.map((age) => (
                      <button
                        key={age}
                        id={`age-btn-${age}`}
                        onClick={() => setSelectedAge(age)}
                        className="px-2.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border-2 whitespace-nowrap"
                        style={{
                          background: selectedAge === age ? "#FF6B35" : "#FFF3EE",
                          color: selectedAge === age ? "white" : "#FF6B35",
                          borderColor: selectedAge === age ? "#FF6B35" : "#FFD4C2",
                          boxShadow: selectedAge === age ? "0 2px 8px rgba(255,107,53,0.35)" : "none",
                        }}
                      >
                        {age}
                      </button>
                    ))}
                  </div>

                  {/* Decorative squiggle under age */}
                  <svg className="mt-4 opacity-50" width="70" height="20" viewBox="0 0 70 20" fill="none">
                    <path d="M2 10 Q14 2 26 10 Q38 18 50 10 Q60 4 68 8" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>

                {/* Step 2 — Select Topic */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0"
                      style={{ background: "#4ECDC4" }}
                    >
                      2
                    </div>
                    <span className="text-xs font-bold text-gray-600 leading-tight">Select Topic</span>
                  </div>

                  {/* Real select dropdowns stacked */}
                  <div className="space-y-2">
                    <div className="relative">
                      <select
                        id="topic-select-main"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#4ECDC4] pr-7 cursor-pointer"
                      >
                        <option>Maths</option>
                        <option>English</option>
                        <option>Science</option>
                        <option>Art</option>
                      </select>
                      <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <div className="relative">
                      <select
                        id="topic-select-subtopic"
                        value={subTopic}
                        onChange={(e) => setSubTopic(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#4ECDC4] pr-7 cursor-pointer"
                      >
                        <option>Addition</option>
                        <option>Subtraction</option>
                        <option>Multiplication</option>
                        <option>Division</option>
                      </select>
                      <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <div className="relative">
                      <select
                        id="topic-select-difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-gray-700 focus:outline-none focus:border-[#4ECDC4] pr-7 cursor-pointer"
                      >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                      <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Step 3 — Generate (worksheet preview) */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-6 h-6 rounded-full text-white text-xs font-black flex items-center justify-center shrink-0"
                      style={{ background: "#A855F7" }}
                    >
                      3
                    </div>
                    <span className="text-xs font-bold text-gray-600 leading-tight">Generate</span>
                  </div>

                  {/* Mini worksheet paper preview */}
                  <div
                    className="rounded-2xl overflow-hidden border border-gray-150"
                    style={{ background: "#f9fafb", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
                  >
                    {/* Paper header */}
                    <div className="bg-white px-3 py-2 border-b border-gray-100">
                      <div className="flex gap-1 items-center">
                        <div className="w-3 h-1 bg-gray-200 rounded-full" />
                        <div className="w-8 h-1 bg-gray-200 rounded-full" />
                        <div className="w-5 h-1 bg-gray-200 rounded-full" />
                      </div>
                    </div>
                    {/* Equations */}
                    <div className="p-3 space-y-2">
                      {[
                        { eq: "3 + 2 =", ans: "5" },
                        { eq: "6 − 1 =", ans: "5" },
                        { eq: "4 + 2 =", ans: "6" },
                      ].map(({ eq, ans }, i) => (
                        <div key={i} className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold text-gray-700 whitespace-nowrap">{eq}</span>
                          <div className="flex-1 h-px bg-gray-200" />
                          <div
                            className="w-6 h-5 rounded-md border border-gray-200 bg-white flex items-center justify-center text-[10px] font-bold text-gray-400"
                          >
                            {ans}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
