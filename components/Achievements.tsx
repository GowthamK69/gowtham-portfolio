"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "EC Learnix Hackathon 360° Innovation Challenge 2025",
      category: "Hackathon",
      icon: "🏆",
    },
    {
      title: "NLP, ChatGPT & Prompt Engineering (30-Hour Live Training)",
      category: "ExcelR | Dec 2023 – Jan 2024",
      icon: "🤖",
    },
    {
      title: "One-Day Blender 3D Modeling Workshop",
      category: "Karpagam Academy of Higher Education | Feb 2026",
      icon: "🎨",
    },
    {
      title: "Certified Ethical Hacker (CEH) Workshop",
      category: "June 2023",
      icon: "🔐",
    },
    {
      title: "Prompt Engineering for Everyone",
      category: "ULSA",
      icon: "⚡",
    },
    {
      title: "ChatGPT for Everyone",
      category: "Learn Prompting",
      icon: "💬",
    },
    {
      title: "Introduction to Data Mining & IoT Applications",
      category: "Infosys Springboard",
      icon: "📊",
    },
    {
      title: "Claude Code in Action",
      category: "Anthropic",
      icon: "🧠",
    },
    {
      title: "Claude 101",
      category: "Anthropic",
      icon: "🚀",
    },
    {
      title: "Acquiring Data",
      category: "IT-ITES Sector Skills Council NASSCOM",
      icon: "📁",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-4">
            Recognition
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Certifications & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition-all duration-500"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-cyan-400">
                {item.category}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}