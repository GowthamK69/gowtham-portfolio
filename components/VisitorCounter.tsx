"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const updateViews = async () => {
      try {
        const res = await fetch(
          "https://api.countapi.xyz/hit/gowtham-portfolio/views"
        );
        const data = await res.json();
        setViews(data.value);
      } catch (error) {
        console.error(error);
      }
    };

    updateViews();
  }, []);

  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-white/5 px-5 py-3 backdrop-blur-xl">
      <span className="text-xl">👁</span>

      <div>
        <p className="text-xs text-gray-400">
          Portfolio Views
        </p>

        <p className="font-bold text-cyan-400 text-lg">
          {views ? views.toLocaleString() : "..."}
        </p>
      </div>
    </div>
  );
}