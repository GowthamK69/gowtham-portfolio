"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[1] h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]"
        style={{
          left: position.x - 160,
          top: position.y - 160,
        }}
      />

      <div
        className="pointer-events-none fixed z-[1] h-64 w-64 rounded-full bg-purple-500/10 blur-[120px]"
        style={{
          left: position.x - 120,
          top: position.y - 120,
        }}
      />
    </>
  );
}