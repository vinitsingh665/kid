"use client";
import { useState } from "react";

export default function MediaLibraryPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Images", "PDFs", "Videos", "ZIP Files"];

  const media = [
    { name: "dinosaur-quiz-cover.jpg", type: "Image", size: "240 KB", emoji: "🦖", bg: "bg-green-100", date: "Sep 28, 2025" },
    { name: "coloring-pages-pack.pdf", type: "PDF", size: "4.2 MB", emoji: "📄", bg: "bg-red-50", date: "Sep 27, 2025" },
    { name: "math-worksheets.pdf", type: "PDF", size: "1.8 MB", emoji: "🧮", bg: "bg-yellow-100", date: "Sep 26, 2025" },
    { name: "space-adventure-bg.png", type: "Image", size: "890 KB", emoji: "🚀", bg: "bg-indigo-900", date: "Sep 26, 2025" },
    { name: "paper-boat-tutorial.mp4", type: "Video", size: "12 MB", emoji: "🎬", bg: "bg-blue-100", date: "Sep 25, 2025" },
    { name: "alphabet-tracing.pdf", type: "PDF", size: "3.1 MB", emoji: "Aa", bg: "bg-white border border-gray-200", date: "Sep 24, 2025" },
    { name: "ocean-animals-quiz.jpg", type: "Image", size: "320 KB", emoji: "🐋", bg: "bg-blue-200", date: "Sep 23, 2025" },
    { name: "volcano-guide.zip", type: "ZIP", size: "8.5 MB", emoji: "📦", bg: "bg-gray-100", date: "Sep 22, 2025" },
    { name: "little-star-audio.mp3", type: "Audio", size: "3.4 MB", emoji: "🎵", bg: "bg-yellow-100", date: "Sep 21, 2025" },
    { name: "science-experiments.pdf", type: "PDF", size: "5.6 MB", emoji: "🔬", bg: "bg-cyan-100", date: "Sep 20, 2025" },
    { name: "craft-thumbnail.jpg", type: "Image", size: "180 KB", emoji: "✂️", bg: "bg-rose-100", date: "Sep 19, 2025" },
    { name: "coloring-mandala.png", type: "Image", size: "560 KB", emoji: "🌸", bg: "bg-pink-100", date: "Sep 18, 2025" },
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Media Library</h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Manage all uploaded images, files and media assets.</p>
        </div>
        <button className="bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          Upload Files
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Files", value: "248", icon: "📁", bg: "bg-blue-50 text-blue-600" },
          { label: "Total Size", value: "1.4 GB", icon: "💾", bg: "bg-purple-50 text-purple-600" },
          { label: "Images", value: "132", icon: "🖼️", bg: "bg-green-50 text-green-600" },
          { label: "Documents", value: "64", icon: "📄", bg: "bg-amber-50 text-amber-600" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-[16px] p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex items-center gap-3">
            <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center text-lg ${s.bg}`}>{s.icon}</div>
            <div>
              <div className="text-[11px] font-bold text-gray-500">{s.label}</div>
              <div className="text-[18px] font-black text-[#0B2046]">{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] mb-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="relative flex-1 max-w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input type="text" placeholder="Search files..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 font-medium" />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1.5 rounded-lg text-[12px] font-bold transition-colors ${activeFilter === f ? "bg-[#0B2046] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200 ml-auto">
          <button onClick={() => setView("grid")} className={`p-1.5 rounded-lg transition-colors ${view === "grid" ? "bg-white shadow-sm text-blue-600" : "text-gray-400 hover:text-gray-600"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </button>
          <button onClick={() => setView("list")} className={`p-1.5 rounded-lg transition-colors ${view === "list" ? "bg-white shadow-sm text-blue-600" : "text-gray-400 hover:text-gray-600"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {media.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[14px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-all cursor-pointer group">
              <div className={`h-28 flex items-center justify-center text-4xl ${item.bg}`}>
                {item.emoji}
              </div>
              <div className="p-3">
                <p className="text-[11px] font-bold text-[#0B2046] truncate mb-0.5" title={item.name}>{item.name}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400">{item.size}</span>
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-bold">{item.type}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-white/60 rounded-[14px] border-2 border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer min-h-[140px]">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </div>
            <p className="text-[11px] font-bold text-gray-400 text-center px-2">Upload New File</p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
          <table className="w-full text-left min-w-[600px]">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="py-4 pl-5 pr-2 w-10"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /></th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">File Name</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Size</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Uploaded</th>
                <th className="py-4 pr-5 pl-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {media.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-3 pl-5 pr-2"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /></td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${item.bg}`}>{item.emoji}</div>
                      <span className="font-bold text-[#0B2046] text-[13px]">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2"><span className="px-2 py-1 bg-gray-100 rounded-lg text-[11px] font-bold text-gray-600">{item.type}</span></td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{item.size}</td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{item.date}</td>
                  <td className="py-3 pr-5 pl-2 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors" title="Download">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
