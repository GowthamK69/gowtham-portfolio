"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title:
        "Hybrid ARIMA–LSTM Framework for Influenza Monitoring and Early Outbreak Prediction",
      tech: ["Python", "Machine Learning", "Flask"],
      description:
        "Developed a hybrid time-series forecasting system inspired by IEEE research methodologies for influenza outbreak prediction using historical healthcare datasets.",
      features: [
        "Hybrid ARIMA-LSTM forecasting model",
        "Disease outbreak prediction",
        "Interactive dashboard",
        "Automated report generation",
        "Symptom risk checker",
        "Admin dataset management",
        "AI-assisted insights",
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Airline Ticket Management System",
      tech: ["VB.NET", "SQL Server"],
      description:
        "Built a desktop-based airline reservation and ticket management application for handling passenger records, booking operations, and database management.",
      features: [
        "Passenger record management",
        "Ticket booking system",
        "Offline desktop application",
        "SQL Server integration",
        "Data storage & retrieval",
        "Database operations",
      ],
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden"
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
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Academic and research-driven projects focused on Artificial
            Intelligence, Forecasting Models, Database Systems, and Software
            Development.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:border-cyan-400/40 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                <div className="flex-1">
                  <div
                    className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${project.color} text-sm font-semibold mb-5`}
                  >
                    Project
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-xl bg-black/30 border border-white/10 text-cyan-400 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 text-gray-300">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}