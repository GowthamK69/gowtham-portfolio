"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript (Basic)", "PHP (Basic)"],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Databases",
      skills: ["SQL Server", "MS Access"],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "AI & Generative AI",
      skills: ["Prompt Engineering", "ChatGPT", "Claude AI"],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Office Applications",
      skills: ["MS Excel", "MS Word", "PowerPoint", "Google Docs"],
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Multimedia Tools",
      skills: ["Photo Editing", "Video Editing"],
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Operational Knowledge",
      skills: [
        "KYC Processes",
        "Customer Onboarding",
        "Document Verification",
        "Data Entry",
        "Record Maintenance",
      ],
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Compliance & Documentation",
      skills: [
        "Fraud Prevention",
        "CDD Procedures",
        "Compliance Awareness",
        "Process Verification",
        "Documentation",
      ],
      color: "from-indigo-500 to-violet-600",
    },
    {
      title: "Professional Skills",
      skills: [
        "Leadership",
        "Team Collaboration",
        "Problem Solving",
        "Adaptability",
        "Communication",
      ],
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold mb-4">
            Expertise
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Skills & Competencies
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Technical, analytical, operational and documentation skills
            suitable for both IT and Non-IT career opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full" />
              </div>

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${group.color} mb-6`}
              />

              <h3 className="text-2xl font-bold text-white mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-sm hover:text-cyan-400 hover:border-cyan-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}