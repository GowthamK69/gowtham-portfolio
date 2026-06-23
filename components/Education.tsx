"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "M.Sc. Computer Science",
      institution: "Karpagam Academy of Higher Education",
      period: "2024 – 2026",
      score: "CGPA: 9.18",
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "Sree Saraswathi Thyagaraja College",
      period: "2021 – 2024",
      score: "74.08%",
    },
    {
      degree: "HSC",
      institution: "PKD Matric. Hr. Sec. School",
      period: "2021",
      score: "79.15%",
    },
    {
      degree: "SSLC",
      institution: "LMHS School",
      period: "2019",
      score: "71.4%",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-3">
            Academic Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="relative pl-16 pb-14"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/30">
                <div className="h-4 w-4 rounded-full bg-cyan-400" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-lg text-gray-300">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-gray-400">
                    {item.period}
                  </p>

                  <p className="mt-3 font-semibold text-cyan-300">
                    {item.score}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}