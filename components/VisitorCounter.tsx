"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [views, setViews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateViews = async () => {
      try {
        const response = await fetch(
          "https://api.countapi.xyz/hit/gowtham-portfolio/views"
        );

        const data = await response.json();

        if (data && typeof data.value === "number") {
          setViews(data.value);
        }
      } catch (error) {
        console.error("Visitor Counter Error:", error);
      } finally {
        setLoading(false);
      }
    };

    updateViews();
  }, []);

  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">
      <span className="text-2xl">👁</span>

      <div>
        <p className="text-xs uppercase tracking-wider text-gray-400">
          Portfolio Views
        </p>

        <p className="text-lg font-bold text-cyan-400">
          {loading ? "Loading..." : views.toLocaleString()}
        </p>
      </div>
    </div>
  );
}