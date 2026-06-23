"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

export default function Stats() {
  const stats = [
    {
      value: 7,
      suffix: "+",
      title: "Research Publications",
    },
    {
      value: 2,
      suffix: "",
      title: "IEEE Reviewer Roles",
    },
    {
      value: 3,
      suffix: "",
      title: "Internships",
    },
    {
      value: 9.18,
      suffix: "",
      decimals: 2,
      title: "CGPA",
    },
  ];

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section
      id="stats"
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl"
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Highlights
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Professional Snapshot
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

              <div className="relative z-10">
                <h3 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={3}
                      decimals={stat.decimals || 0}
                    />
                  )}
                  {stat.suffix}
                </h3>

                <p className="mt-4 font-medium text-gray-300">
                  {stat.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}