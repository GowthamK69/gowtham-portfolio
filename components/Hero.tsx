"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const skills = [
    "7 Research Publications",
    "IEEE Reviewer",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Python",
    "SQL",
    "MSc Computer Science",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid min-h-[85vh] items-center gap-16 lg:grid-cols-2">

          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 blur-3xl" />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative"
              >
                <Image
  src="/profile.png"
  alt="Gowtham K"
  width={500}
  height={500}
  priority
  className="rounded-3xl border border-cyan-500/20 object-cover shadow-[0_0_40px_rgba(34,211,238,0.15)]"
/>
              </motion.div>

            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 font-medium text-cyan-400"
            >
              MSc Computer Science Graduate
            </motion.div>

            {/* Name */}
<motion.h1
  initial={{
    opacity: 0,
    y: 80,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
  }}
  className="text-5xl font-black leading-none md:text-7xl lg:text-[6rem]"
>
  <span className="whitespace-nowrap bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
    GOWTHAM K
  </span>
</motion.h1>
            {/* Role */}
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              className="mt-8 text-xl font-semibold text-white md:text-3xl"
            >
              AI Researcher • IEEE Reviewer • Data Analytics Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 lg:mx-0 md:text-xl"
            >
              Passionate about Artificial Intelligence, Machine Learning,
              Research Publications, Data Analytics, Technology Innovation,
              Documentation and Business Operations with a strong academic
              and practical foundation in Computer Science.
            </motion.p>

            {/* Skills */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.1,
              }}
              className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  className="rounded-full border border-cyan-500/20 bg-white/5 px-5 py-3 text-sm text-cyan-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 md:text-base"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.4,
              }}
              className="mt-12 flex flex-wrap justify-center gap-5 lg:justify-start"
            >
              <a
                href="#research"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
              >
                View Research
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-2xl border border-white/20 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
              >
                Download Resume
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}