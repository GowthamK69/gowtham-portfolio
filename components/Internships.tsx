"use client";

import { motion } from "framer-motion";

export default function Internships() {
  const internships = [
    {
      role: "Python Developer Intern",
      company: "Outrix",
      duration: "Nov 2025 – Dec 2025",
      description:
        "Worked on Python-based tasks and basic data handling operations.",
    },
    {
      role: "Front-End Developer Intern",
      company: "Alfido Tech",
      duration: "Aug 2025",
      description:
        "Developed basic user interface components using frontend technologies.",
    },
    {
      role: "RF Testing & Headphone Assembly Intern",
      company: "VVDN Technologies, Pollachi",
      duration: "Jun 2024 – Aug 2024",
      description:
        "Assisted in RF testing, product assembly, retail tracking, and quality checking processes.",
    },
  ];

  return (
    <section
      id="internships"
      className="py-32 px-6 bg-black"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6">
            Internships
          </h2>

          <p className="text-gray-400">
            Industry exposure across software development,
            frontend technologies and electronics manufacturing.
          </p>
        </div>

        <div className="space-y-8">

          {internships.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                x: 10,
              }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {item.role}
              </h3>

              <p className="text-white mt-2">
                {item.company}
              </p>

              <p className="text-gray-400 mt-2">
                {item.duration}
              </p>

              <p className="text-gray-300 mt-4 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}