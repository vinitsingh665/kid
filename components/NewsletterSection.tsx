"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section
      id="newsletter"
      className="py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F5F0FF 50%, #FFF0F6 100%)" }}
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative stars */}
      <div className="absolute top-6 left-6 text-yellow-300 text-2xl star-spin opacity-70">⭐</div>
      <div className="absolute top-8 right-10 text-purple-300 text-xl star-spin opacity-50" style={{ animationDelay: "1.5s" }}>✦</div>
      <div className="absolute bottom-6 right-20 text-pink-300 text-lg opacity-60 floating">✦</div>
      <div className="absolute bottom-8 left-20 text-blue-300 text-xl opacity-50 floating-delay-1">⭐</div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 floating">
          ✉️
        </div>

        <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
          Get Free Activities Every Week
        </h2>
        <p className="text-gray-500 text-sm mb-7 max-w-md mx-auto">
          Join thousands of parents and get new games, printables and activity ideas in your inbox.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-700 px-6 py-4 rounded-2xl font-700">
            <span className="text-2xl">🎉</span>
            You&apos;re subscribed! Check your inbox.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            id="newsletter-form"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              id="newsletter-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-sm focus:outline-none focus:border-[#FF6B35] shadow-sm"
            />
            <button
              type="submit"
              id="newsletter-submit"
              className="btn-primary px-7 py-3.5 text-sm shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
