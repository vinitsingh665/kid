"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");
  const [notifications, setNotifications] = useState({ email: true, push: true, weekly: false, marketing: true });

  const tabs = ["General", "Account", "Notifications", "Security", "Billing", "API"];

  return (
    <div className="max-w-[900px] mx-auto pb-8">
      {/* Header */}
      <div className="mb-6 pt-1">
        <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Settings</h1>
        <p className="text-gray-500 text-[12px] md:text-[13px]">Manage your account and platform preferences.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto pb-2 mb-6 no-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors whitespace-nowrap ${activeTab === tab ? "bg-[#0B2046] text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "General" && (
        <div className="flex flex-col gap-5">
          {/* Site Info */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Site Information</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">🦒</div>
                <div>
                  <p className="text-[13px] font-bold text-gray-700 mb-1">Site Logo</p>
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-[12px] font-bold text-gray-600 hover:bg-gray-50 transition-colors">Change Logo</button>
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Site Name</label>
                <input type="text" defaultValue="KidZoo" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-bold" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Site Tagline</label>
                <input type="text" defaultValue="Learn, Play & Create with Fun" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Site URL</label>
                <input type="url" defaultValue="https://kidzoo.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium" />
              </div>
            </div>
          </div>

          {/* Content Settings */}
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Content Settings</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Default Content Per Page</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] font-medium focus:outline-none focus:border-blue-400 bg-white appearance-none">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center justify-between py-1">
                <div>
                  <p className="text-[13px] font-bold text-gray-700">Allow Comments</p>
                  <p className="text-[11px] text-gray-400">Let users leave comments on content</p>
                </div>
                <button className="w-12 h-6 bg-green-500 rounded-full flex items-center px-0.5 transition-all">
                  <div className="w-5 h-5 bg-white rounded-full shadow-sm ml-auto"></div>
                </button>
              </div>
              <div className="flex items-center justify-between py-1">
                <div>
                  <p className="text-[13px] font-bold text-gray-700">Content Moderation</p>
                  <p className="text-[11px] text-gray-400">Approve content before it goes live</p>
                </div>
                <button className="w-12 h-6 bg-gray-200 rounded-full flex items-center px-0.5 transition-all">
                  <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-2.5 bg-[#0f172a] hover:bg-black text-white font-bold rounded-xl text-[13px] transition-colors shadow-md">Save Changes</button>
          </div>
        </div>
      )}

      {activeTab === "Account" && (
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Profile Information</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#1a202c] text-white flex items-center justify-center text-2xl font-bold relative">
                A
                <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </button>
              </div>
              <div>
                <p className="text-[14px] font-black text-[#0B2046]">Admin</p>
                <p className="text-[12px] text-gray-500">Super Administrator</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">First Name</label>
                  <input type="text" defaultValue="Admin" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Last Name</label>
                  <input type="text" defaultValue="User" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Email</label>
                <input type="email" defaultValue="admin@kidzoo.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-gray-600 mb-1.5">Role</label>
                <input type="text" defaultValue="Super Admin" disabled className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] font-medium bg-gray-50 text-gray-500 cursor-not-allowed" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-2.5 bg-[#0f172a] hover:bg-black text-white font-bold rounded-xl text-[13px] transition-colors shadow-md">Save Profile</button>
          </div>
        </div>
      )}

      {activeTab === "Notifications" && (
        <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
          <h3 className="text-[15px] font-bold text-[#0B2046] mb-5">Notification Preferences</h3>
          <div className="flex flex-col divide-y divide-gray-100">
            {[
              { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
              { key: "push", label: "Push Notifications", desc: "Browser push notifications" },
              { key: "weekly", label: "Weekly Reports", desc: "Get a weekly analytics summary" },
              { key: "marketing", label: "Product Updates", desc: "News and product announcements" },
            ].map(n => (
              <div key={n.key} className="flex items-center justify-between py-4">
                <div>
                  <p className="text-[13px] font-bold text-gray-700">{n.label}</p>
                  <p className="text-[11px] text-gray-400">{n.desc}</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [n.key]: !prev[n.key as keyof typeof prev] }))}
                  className={`w-12 h-6 rounded-full flex items-center px-0.5 transition-all ${notifications[n.key as keyof typeof notifications] ? "bg-green-500" : "bg-gray-200"}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${notifications[n.key as keyof typeof notifications] ? "translate-x-6" : "translate-x-0"}`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Change Password</h3>
            <div className="flex flex-col gap-4">
              {["Current Password", "New Password", "Confirm New Password"].map(label => (
                <div key={label}>
                  <label className="block text-[12px] font-bold text-gray-600 mb-1.5">{label}</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] focus:outline-none focus:border-blue-400 font-medium" />
                </div>
              ))}
              <button className="px-6 py-2.5 bg-[#0f172a] hover:bg-black text-white font-bold rounded-xl text-[13px] transition-colors shadow-md w-fit mt-1">Update Password</button>
            </div>
          </div>
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[15px] font-bold text-[#0B2046] mb-0.5">Two-Factor Authentication</h3>
                <p className="text-[12px] text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <button className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 font-bold rounded-xl text-[13px] transition-colors border border-green-200">Enable 2FA</button>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-[16px] p-5">
            <h3 className="text-[15px] font-bold text-red-700 mb-1">Danger Zone</h3>
            <p className="text-[12px] text-red-600 mb-4">These actions are irreversible. Please be certain.</p>
            <button className="px-4 py-2 bg-white border border-red-300 hover:border-red-500 text-red-600 font-bold rounded-xl text-[13px] transition-colors">Delete Account</button>
          </div>
        </div>
      )}

      {activeTab === "Billing" && (
        <div className="flex flex-col gap-5">
          <div className="bg-gradient-to-br from-[#0B2046] to-[#1e3a5f] rounded-[16px] md:rounded-[24px] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[12px] font-bold opacity-70">CURRENT PLAN</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-[11px] font-bold">Active</span>
            </div>
            <div className="text-[32px] font-black mb-1">Pro Plan</div>
            <div className="text-[14px] opacity-70 mb-4">$49 / month · Renews Oct 26, 2025</div>
            <button className="px-4 py-2 bg-white text-[#0B2046] font-bold rounded-xl text-[13px] hover:bg-gray-100 transition-colors">Manage Subscription</button>
          </div>
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-4">Payment Method</h3>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 bg-[#1a1f71] rounded flex items-center justify-center">
                  <span className="text-white text-[10px] font-black">VISA</span>
                </div>
                <div>
                  <p className="text-[13px] font-bold text-gray-700">•••• •••• •••• 4242</p>
                  <p className="text-[11px] text-gray-400">Expires 12/2027</p>
                </div>
              </div>
              <button className="text-[12px] font-bold text-blue-600 hover:text-blue-800">Change</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "API" && (
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
            <h3 className="text-[15px] font-bold text-[#0B2046] mb-1">API Keys</h3>
            <p className="text-[12px] text-gray-500 mb-4">Use these keys to access the KidZoo API programmatically.</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Production API Key", key: "kz_prod_••••••••••••••••••••••••XvB2", env: "Production" },
                { label: "Test API Key", key: "kz_test_••••••••••••••••••••••••Qk9Y", env: "Test" },
              ].map((api, i) => (
                <div key={i} className="p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-bold text-gray-700">{api.label}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${api.env === "Production" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{api.env}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-[12px] font-mono text-gray-600 truncate">{api.key}</code>
                    <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2.5 bg-[#0f172a] hover:bg-black text-white font-bold rounded-xl text-[13px] transition-colors shadow-md flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
              Generate New Key
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
