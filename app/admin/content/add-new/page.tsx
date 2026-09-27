"use client";
import Link from "next/link";
import { useState } from "react";

export default function AddNewContentPage() {
  const [selectedType, setSelectedType] = useState("Game");

  const contentTypes = [
    { name: "Game", icon: "🎮", color: "blue" },
    { name: "Printable", icon: "📄", color: "pink" },
    { name: "Learning", icon: "📖", color: "green" },
    { name: "Activity", icon: "💡", color: "amber" },
    { name: "Story", icon: "📚", color: "purple" },
    { name: "Experiment", icon: "🧪", color: "cyan" },
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 border-blue-300 text-blue-700",
    pink: "bg-pink-50 border-pink-300 text-pink-700",
    green: "bg-green-50 border-green-300 text-green-700",
    amber: "bg-amber-50 border-amber-300 text-amber-700",
    purple: "bg-purple-50 border-purple-300 text-purple-700",
    cyan: "bg-cyan-50 border-cyan-300 text-cyan-700",
  };

  return (
    <div className="max-w-[1100px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/content" className="p-2 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-gray-800 transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-0.5">Add New Content</h1>
            <p className="text-gray-500 text-[12px] md:text-[13px]">Create and publish new content to Kidzoo.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 border border-gray-200 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-50 bg-white shadow-sm transition-colors">
            Save as Draft
          </button>
          <button className="px-5 py-2.5 bg-[#0f172a] hover:bg-black text-white font-bold rounded-xl text-[13px] shadow-md transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Publish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main form */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Basic Info */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Basic Information</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Title <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Enter content title..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium placeholder:text-gray-400 transition-colors" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Short Description</label>
                <input type="text" placeholder="Brief description (shown in listings)..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium placeholder:text-gray-400 transition-colors" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Full Content / Body</label>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-1 px-3 py-2.5 border-b border-gray-100 bg-gray-50">
                    {["B", "I", "U"].map(f => (
                      <button key={f} className="w-7 h-7 rounded-lg text-[13px] font-bold text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center">{f}</button>
                    ))}
                    <div className="w-px h-5 bg-gray-200 mx-1"></div>
                    <button className="w-7 h-7 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </button>
                    <button className="w-7 h-7 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </button>
                  </div>
                  <textarea rows={8} placeholder="Write the full content body here..." className="w-full px-4 py-3 text-[14px] focus:outline-none font-medium placeholder:text-gray-400 resize-none"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Media Upload */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Media & Files</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-300 hover:bg-blue-50/30 transition-colors cursor-pointer group">
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-2xl flex items-center justify-center mb-3 transition-colors">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-[14px] font-bold text-gray-700 mb-1">Drop files here or <span className="text-blue-600 underline">browse</span></p>
              <p className="text-[12px] text-gray-400">Supports images, PDFs, and ZIP files up to 50MB</p>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-1">SEO Settings</h3>
            <p className="text-[12px] text-gray-400 mb-4">Optimize discoverability of this content.</p>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">SEO Title</label>
                <input type="text" placeholder="SEO-optimized title..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium placeholder:text-gray-400" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Meta Description</label>
                <textarea rows={3} placeholder="Short description for search engines..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium placeholder:text-gray-400 resize-none"></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="flex flex-col gap-5">
          {/* Content Type */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Content Type</h3>
            <div className="grid grid-cols-2 gap-2">
              {contentTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelectedType(type.name)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all text-center ${selectedType === type.name ? colorMap[type.color] : "border-transparent bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
                >
                  <span className="text-xl">{type.icon}</span>
                  <span className="text-[12px] font-bold">{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Publishing */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Publishing</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Status</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 bg-white focus:outline-none focus:border-blue-400 appearance-none">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Publish Date</label>
                <input type="date" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-700 bg-white focus:outline-none focus:border-blue-400" />
              </div>
            </div>
          </div>

          {/* Classify */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Classification</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Category</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-700 bg-white focus:outline-none focus:border-blue-400 appearance-none">
                  <option>Select category...</option>
                  <option>Animals</option>
                  <option>Science</option>
                  <option>Math</option>
                  <option>Coloring</option>
                  <option>English</option>
                  <option>Crafts</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Age Group</label>
                <select className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-700 bg-white focus:outline-none focus:border-blue-400 appearance-none">
                  <option>Select age group...</option>
                  <option>2-4</option>
                  <option>3-6</option>
                  <option>4-8</option>
                  <option>6-8</option>
                  <option>6-10</option>
                  <option>9-12</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Tags</label>
                <input type="text" placeholder="Add tags (comma separated)..." className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-700 focus:outline-none focus:border-blue-400 placeholder:text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
