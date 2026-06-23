"use client";

import { motion } from "framer-motion";

export default function Reviewer() {
  const roles = [
    {
      title: "IEEE Technical Program Committee (TPC) Reviewer",
      event: "MPCON 2025",
    },
    {
      title: "IEEE Conference Reviewer",
      event: "SASIGD 2026",
    },
  ];

  return (
    <section
      id="reviewer"
      className="py-32 px-6 bg-black"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            IEEE Reviewer Roles
          </h2>

          <p className="text-gray-400">
            Professional recognition through conference reviewing
            and technical program committee contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {roles.map((role, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -10,
              }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl mb-6">
                🏆
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {role.title}
              </h3>

              <p className="text-gray-300">
                {role.event}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}