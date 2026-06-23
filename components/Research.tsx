"use client";

import { motion } from "framer-motion";

export default function Research() {
  const publications = [
    {
      title: "Multi-Classes Automated Detection of Cardamom Leaf Diseases",
      details:
        "NCGSII 2026 • Sree Saraswathi Thyagaraja College • March 2026",
    },
    {
      title:
        "Quantum-Enhanced Wireless Security Framework Using SARG04-Based QKD",
      details:
        "IEEE ICIMIA 2025 • Saurie College of Engineering • September 2025",
    },
    {
      title:
        "Hybrid ARIMA-LSTM Model for Real-Time Influenza Monitoring",
      details:
        "IEEE KCISC 2025 • JCT College of Engineering • August 2025",
    },
    {
      title:
        "Real-Time Multi-Factor Biometric Encryption for Secure Authentication",
      details:
        "IEEE ICSCDS 2025 • Erode Sengunthar Engineering College • August 2025",
    },
    {
      title:
        "Early Detection of Lung Cancer Using AI",
      details:
        "NCIT 2025 • Karpagam Academy of Higher Education • August 2025",
    },
    {
      title:
        "Review on Image Processing Techniques for Neurodegenerative Disorders",
      details:
        "PUIRP 2025 • August 2025",
    },
    {
      title:
        "Cyber Security Trends",
      details:
        "National Conference • KIT College • May 2024",
    },
  ];

  return (
    <section
      id="research"
      className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Academic Contributions
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Research Publications
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Published research contributions spanning Artificial Intelligence,
            Cyber Security, Healthcare Analytics, Deep Learning, Biometrics,
            Quantum Communication and Agricultural Intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {publications.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500"
            >
              <div className="flex items-start gap-5">

                <div className="min-w-[55px] h-[55px] rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-8 group-hover:text-cyan-400 transition">
                    {paper.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {paper.details}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex px-8 py-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-cyan-300 font-semibold">
              Total Publications: 7
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}