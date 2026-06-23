"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Database,
  FileText,
  Award,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <FileText size={24} />,
      title: "7 Research Publications",
      desc: "Published papers in AI, Machine Learning and Data Analytics",
    },
    {
      icon: <Award size={24} />,
      title: "IEEE Reviewer",
      desc: "Actively reviewing research papers and technical manuscripts",
    },
    {
      icon: <Brain size={24} />,
      title: "AI & Machine Learning",
      desc: "Passionate about intelligent systems and predictive analytics",
    },
    {
      icon: <Database size={24} />,
      title: "Data Analytics",
      desc: "Extracting meaningful insights from complex datasets",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-32 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
            Get To Know Me
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500" />
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-3xl font-bold text-white">
              Who Am I?
            </h3>

            <p className="text-justify text-lg leading-10 text-gray-300">
              I am <span className="font-semibold text-cyan-400">Gowtham K</span>,
              a postgraduate Computer Science graduate with a strong passion
              for Artificial Intelligence, Machine Learning, Data Analytics,
              Research Innovation, and Software Development. My academic
              journey is driven by continuous learning, practical problem
              solving, and the pursuit of impactful technological solutions.
            </p>

            <p className="mt-6 text-justify text-lg leading-10 text-gray-300">
              Over the years, I have actively contributed to research through
              multiple publications, served as an IEEE reviewer, completed
              internships, and participated in technical and professional
              development activities. These experiences have strengthened my
              analytical thinking, communication skills, and ability to work
              on real-world challenges.
            </p>

            <p className="mt-6 text-justify text-lg leading-10 text-gray-300">
              I am open to both IT and non-IT career opportunities where I
              can create value through innovation, leadership, teamwork, and
              data-driven decision making while continuously expanding my
              knowledge and professional expertise.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-gray-400 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">7+</h3>
                <p className="text-sm text-gray-300 mt-1">Publications</p>
              </div>

              <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5 text-center">
                <h3 className="text-3xl font-black text-purple-400">1+</h3>
                <p className="text-sm text-gray-300 mt-1">IEEE Reviewer</p>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 text-center">
                <h3 className="text-3xl font-black text-blue-400">5+</h3>
                <p className="text-sm text-gray-300 mt-1">Projects</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}