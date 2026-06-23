"use client";

import {
  FaGithub,
  FaLinkedin,
  FaGoogleScholar,
  FaEnvelope,
} from "react-icons/fa6";

export default function SocialDock() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">

      <a
        href="https://linkedin.com/in/gowtham-kathirvel-116177262"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin className="text-xl text-white group-hover:text-cyan-400" />
      </a>

      <a
        href="https://github.com/GowthamK69"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
      >
        <FaGithub className="text-xl text-white group-hover:text-cyan-400" />
      </a>

      <a
        href="https://scholar.google.com/citations?user=oA9DGtoAAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
      >
        <FaGoogleScholar className="text-xl text-white group-hover:text-cyan-400" />
      </a>

      <a
        href="mailto:gowthamk15112003@gmail.com"
        className="group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
      >
        <FaEnvelope className="text-xl text-white group-hover:text-cyan-400" />
      </a>

    </div>
  );
}