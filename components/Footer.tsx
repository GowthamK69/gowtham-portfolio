"use client";

import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Gowtham K
            </h3>

            <p className="text-gray-400 mt-2">
              AI Researcher • IEEE Reviewer • Data Analytics Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-6 text-xl">

            <a
              href="https://github.com/GowthamK69"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/gowtham-kathirvel-116177262"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://scholar.google.com/citations?user=oA9DGtoAAAAJ&hl=en"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGoogle />
            </a>

          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2026 Gowtham K. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}